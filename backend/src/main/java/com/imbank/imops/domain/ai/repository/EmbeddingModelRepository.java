package com.imbank.imops.domain.ai.repository;

import com.imbank.imops.domain.ai.entity.EmbeddingModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmbeddingModelRepository extends JpaRepository<EmbeddingModel, Long> {
    Optional<EmbeddingModel> findByEmbeddingModel(String embeddingModel);
}
