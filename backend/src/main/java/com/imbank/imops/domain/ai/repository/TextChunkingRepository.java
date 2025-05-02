package com.imbank.imops.domain.ai.repository;

import com.imbank.imops.domain.ai.entity.TextChunking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TextChunkingRepository extends JpaRepository<TextChunking, Long> {
    Optional<TextChunking> findByMethodAndSizeAndOverlap(String method, Integer size, Integer overlap);
}
