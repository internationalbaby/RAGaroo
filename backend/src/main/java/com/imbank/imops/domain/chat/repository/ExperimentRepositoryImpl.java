package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.dto.ExperimentDetailResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentResponseDto;
import com.imbank.imops.domain.chat.entity.Chat;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.imbank.imops.domain.chat.entity.QExperiment.experiment;

@Log4j2
@RequiredArgsConstructor
@Repository
public class ExperimentRepositoryImpl implements ExperimentRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<ExperimentResponseDto> getExperimentList(Chat chat) {
        return queryFactory.select(Projections.constructor(ExperimentResponseDto.class,
                        experiment.id,
                        experiment.question,
                        experiment.answer,
                        experiment.modifiedAt
                ))
                .from(experiment)
                .where(experiment.chat.eq(chat))
                .fetch();
    }

    @Override
    public ExperimentDetailResponseDto getExperimentDetail(Long experimentId) {
        return queryFactory.select(Projections.constructor(ExperimentDetailResponseDto.class,
                        experiment.question,
                        experiment.answer,
                        experiment.accuracy,
                        experiment.relevance,
                        experiment.completeness,
                        experiment.textChunking.method,
                        experiment.textChunking.size,
                        experiment.textChunking.overlap,
                        experiment.embeddingModel.embeddingModel,
                        experiment.modelConfiguration.LLM,
                        experiment.modelConfiguration.temperature,
                        experiment.modelConfiguration.maxTokens,
                        experiment.modelConfiguration.topP,
                        experiment.modelConfiguration.frequencyPenalty,
                        experiment.modelConfiguration.presencePenalty,
                        experiment.pdfData
                )).from(experiment)
                .where(experiment.id.eq(experimentId))
                .fetchOne();

    }
}
