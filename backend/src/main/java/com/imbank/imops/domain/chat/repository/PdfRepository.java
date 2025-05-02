package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.entity.Pdf; // 경로를 올바르게 수정
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PdfRepository extends JpaRepository<Pdf, Long> {
    Optional<Pdf> findByName(String name);
}
