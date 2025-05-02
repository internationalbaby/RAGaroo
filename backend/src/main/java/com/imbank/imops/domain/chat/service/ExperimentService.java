package com.imbank.imops.domain.chat.service;

import com.imbank.imops.domain.ai.entity.EmbeddingModel;
import com.imbank.imops.domain.ai.entity.ModelConfiguration;
import com.imbank.imops.domain.ai.entity.TextChunking;
import com.imbank.imops.domain.ai.repository.EmbeddingModelRepository;
import com.imbank.imops.domain.ai.repository.ModelConfigurationRepository;
import com.imbank.imops.domain.ai.repository.TextChunkingRepository;
import com.imbank.imops.domain.chat.dto.AnswerRequestDto;
import com.imbank.imops.domain.chat.dto.AnswerResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentDetailResponseDto;
import com.imbank.imops.domain.chat.dto.ExperimentResponseDto;
import com.imbank.imops.domain.chat.entity.Chat;
import com.imbank.imops.domain.chat.entity.Experiment;
import com.imbank.imops.domain.chat.repository.ChatRepository;
import com.imbank.imops.domain.chat.repository.ExperimentRepository;
import com.imbank.imops.domain.user.entity.User;
import com.imbank.imops.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Service
public class ExperimentService {
    private final ChatRepository chatRepository;
    private final UserRepository userRepository;
    private final ExperimentRepository experimentRepository;
    private final TextChunkingRepository textChunkingRepository;
    private final EmbeddingModelRepository embeddingModelRepository;
    private final ModelConfigurationRepository modelConfigurationRepository;


    @Transactional(readOnly = true)
    public List<ExperimentResponseDto> getExperimentList(Long chatId) {
        Chat chat = chatRepository.findById(chatId)
                .orElseThrow(() -> new RuntimeException("없는 채팅입니다"));
        return experimentRepository.getExperimentList(chat);
    }

    @Transactional(readOnly = true)
    public ExperimentDetailResponseDto getExperimentDetail(Long experimentId) {
        experimentRepository.findById(experimentId)
                .orElseThrow(() -> new RuntimeException("없는 실험입니다"));
        return experimentRepository.getExperimentDetail(experimentId);
    }

    @Transactional
    public List<AnswerResponseDto> runExperiment(AnswerRequestDto answerRequestDto) {
        User user = userRepository.findByUsername(answerRequestDto.getUsername())
                .orElseThrow(() -> new RuntimeException("없는 사용자입니다"));

        Chat chat = chatRepository.findById(answerRequestDto.getChatId())
                .orElseThrow(() -> new RuntimeException("없는 채팅입니다"));

        TextChunking textChunking = textChunkingRepository.findByMethodAndSizeAndOverlap(
                answerRequestDto.getMethod(),
                answerRequestDto.getSize(),
                answerRequestDto.getOverlap()
        ).orElseGet(() -> textChunkingRepository.saveAndFlush(
                TextChunking.builder()
                        .method(answerRequestDto.getMethod())
                        .size(answerRequestDto.getSize())
                        .overlap(answerRequestDto.getOverlap())
                        .build()));

        EmbeddingModel embeddingModel = embeddingModelRepository.findByEmbeddingModel(
                answerRequestDto.getEmbedding()
        ).orElseGet(() -> embeddingModelRepository.saveAndFlush(
                EmbeddingModel.builder()
                        .embeddingModel(answerRequestDto.getEmbedding())
                        .build()
        ));

        ModelConfiguration modelConfiguration = modelConfigurationRepository.findByLLMAndTemplateAndTemperatureAndMaxTokensAndTopPAndFrequencyPenaltyAndPresencePenalty(
                answerRequestDto.getLlm(),
                answerRequestDto.getTemplate(),
                answerRequestDto.getTemperature(),
                answerRequestDto.getMaxTokens(),
                answerRequestDto.getTopP(),
                answerRequestDto.getFrequencyPenalty(),
                answerRequestDto.getPresencePenalty()
        ).orElseGet(() -> modelConfigurationRepository.saveAndFlush(
                ModelConfiguration.builder()
                        .LLM(answerRequestDto.getLlm())
                        .template(answerRequestDto.getTemplate())
                        .temperature(answerRequestDto.getTemperature())
                        .maxTokens(answerRequestDto.getMaxTokens())
                        .topP(answerRequestDto.getTopP())
                        .frequencyPenalty(answerRequestDto.getFrequencyPenalty())
                        .presencePenalty(answerRequestDto.getPresencePenalty())
                        .build()
        ));

        // TODO fast api로 받는 거 구현 후 response 값 수정
//        List<AnswerResponseDto> response = new ArrayList<>();//restTemplate으로 받은 데이터
        AnswerResponseDto temp = AnswerResponseDto.builder()
                .answer("test")
                .accuracy(9)
                .relevance(8)
                .completeness(7)
                .feedback("very good")
                .pdfData("{x : 1, y : 1}")
                .build();
        List<AnswerResponseDto> response = new ArrayList<>();
        response.add(temp);
        response.add(temp);
        response.add(temp);
        response.add(temp);
        response.add(temp);
        if (response != null) {
            AnswerResponseDto firstData = response.get(0);
            experimentRepository.save(Experiment.builder()
                    .user(user)
                    .chat(chat)
                    .textChunking(textChunking)
                    .modelConfiguration(modelConfiguration)
                    .embeddingModel(embeddingModel)
                    .question(answerRequestDto.getQuestion())
                    .answer(firstData.getAnswer())
                    .accuracy(firstData.getAccuracy())
                    .relevance(firstData.getRelevance())
                    .completeness(firstData.getCompleteness())
                    .feedback(firstData.getFeedback())
                    .pdfData(firstData.getPdfData())
                    .build()
            );
        }
        return response;
    }
}
