package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.dto.ExperimentDetailResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentResponseDto;
import com.imbank.imops.domain.chat.entity.Chat;

import java.util.List;

public interface ExperimentRepositoryCustom {
    List<ExperimentResponseDto> getExperimentList(Chat chat);

    ExperimentDetailResponseDto getExperimentDetail(Long experimentId);
}
