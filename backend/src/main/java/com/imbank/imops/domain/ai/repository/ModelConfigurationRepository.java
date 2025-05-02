package com.imbank.imops.domain.ai.repository;

import com.imbank.imops.domain.ai.entity.ModelConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModelConfigurationRepository extends JpaRepository<ModelConfiguration, Long> {
    Optional<ModelConfiguration> findByLLMAndTemplateAndTemperatureAndMaxTokensAndTopPAndFrequencyPenaltyAndPresencePenalty(
            String LLM,
            String template,
            Double temperature,
            Integer maxTokens,
            Double topP,
            Double frequencyPenalty,
            Double presencePenalty
    );
}
