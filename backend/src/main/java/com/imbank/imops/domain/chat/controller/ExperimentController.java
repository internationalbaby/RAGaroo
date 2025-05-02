package com.imbank.imops.domain.chat.controller;

import com.imbank.imops.domain.chat.dto.AnswerRequestDto;
import com.imbank.imops.domain.chat.dto.AnswerResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentDetailResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentResponseDto;
import com.imbank.imops.domain.chat.service.ExperimentService;
import com.imbank.imops.global.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@Controller
@RequiredArgsConstructor
@RequestMapping("api/v1/chat/experiment")
public class ExperimentController {
    private final ExperimentService experimentService;

    @GetMapping("/{chatId}")
    public ResponseEntity<Message> getExperimentList(@PathVariable Long chatId) {
        log.info("ExperimentController/getExperimentList : " + chatId);

        Message message = new Message();

        try {
            List<ExperimentResponseDto> data = experimentService.getExperimentList(chatId);
            message.setMessage("실험 리스트 조회 성공");
            message.setData(data);
        } catch (Exception e) {
            log.error("ExperimentController/getExperimentList : " + e.getMessage(), e);
            message.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }

    @GetMapping("detail/{experimentId}")
    public ResponseEntity<Message> getExperimentDetail(@PathVariable Long experimentId) {
        log.info("ExperimentController/getExperimentDetail : " + experimentId);

        Message message = new Message();

        try {
            ExperimentDetailResponseDto data = experimentService.getExperimentDetail(experimentId);
            message.setMessage("실험 상세 조회 성공");
            message.setData(data);
        } catch (Exception e) {
            log.error("ExperimentController/getExperimentDetail : " + e.getMessage(), e);
            message.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }

    @PostMapping
    public ResponseEntity<Message> runExperiment(@RequestBody AnswerRequestDto answerRequestDto) {
        log.info("ExperimentController/runExperiment : " + answerRequestDto);

        Message message = new Message();

        try {
            List<AnswerResponseDto> data = experimentService.runExperiment(answerRequestDto);
            message.setMessage("실험 실행 성공");
            message.setData(data);
        } catch (Exception e) {
            log.error("ExperimentController/runExperiment : " + e.getMessage(), e);
            message.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }


}
