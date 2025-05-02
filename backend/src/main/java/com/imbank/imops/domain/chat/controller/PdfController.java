package com.imbank.imops.domain.chat.controller;

import com.imbank.imops.domain.chat.entity.Pdf;
import com.imbank.imops.domain.chat.repository.PdfRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/pdf")
public class PdfController {

    private final PdfRepository pdfRepository;
    private final RestTemplate restTemplate;

    @Value("${fastapi.url}") // FastAPI 서버 URL을 환경 변수로 설정
    private String fastApiUrl;

    public PdfController(PdfRepository pdfRepository, RestTemplate restTemplate) {
        this.pdfRepository = pdfRepository;
        this.restTemplate = restTemplate;
    }

    // PDF 파일 업로드
    @PostMapping("/upload")
    public ResponseEntity<String> uploadPdf(@RequestParam("file") MultipartFile file) {
        try {
            // 파일명 중복 확인
            if (pdfRepository.findByName(file.getOriginalFilename()).isPresent()) {
                return ResponseEntity.badRequest().body("PDF with the same name already exists.");
            }
            Pdf pdf = new Pdf(file.getOriginalFilename(), file.getBytes());
            pdfRepository.save(pdf);
            return ResponseEntity.ok("PDF uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("PDF upload failed.");
        }
    }

    // FastAPI에 PDF 파일과 이름 전송 (이름으로 조회)
    @PostMapping("/sendToFastApi/name/{name}")
    public ResponseEntity<String> sendPdfToFastApiByName(@PathVariable String name) {
        Optional<Pdf> pdf = pdfRepository.findByName(name);
        if (pdf.isPresent()) {
            Pdf pdfFile = pdf.get();
            // FastAPI에 전송할 데이터 준비
            var requestBody = new FastApiRequest(pdfFile.getName(), pdfFile.getData());
            ResponseEntity<String> response = restTemplate.postForEntity(fastApiUrl, requestBody, String.class);
            return ResponseEntity.ok(response.getBody());
        } else {
            return ResponseEntity.status(404).body("PDF not found.");
        }
    }

    // PDF 이름 리스트 조회
    @GetMapping("/names")
    public ResponseEntity<List<String>> getPdfNames() {
        List<String> names = pdfRepository.findAll()
                .stream()
                .map(Pdf::getName)
                .collect(Collectors.toList());
        return ResponseEntity.ok(names);
    }

    // FastAPI로 전송할 요청 DTO
    private static class FastApiRequest {
        private String name;
        private byte[] data;

        public FastApiRequest(String name, byte[] data) {
            this.name = name;
            this.data = data;
        }

        // Getters and Setters
        public String getName() {
            return name;
        }

        public byte[] getData() {
            return data;
        }
    }
}
