package com.imbank.imops.domain.chat.dto;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExperimentDetailResponseDto {
    private String question;
    private String answer;

    // Score 값
    private Integer accuracy;
    private Integer relevance;
    private Integer completeness;

    // TextChunking 정보
    private String method;
    private Integer size;
    private Integer overlap;

    // Embedding Model 정보
    private String embedding;

    // LLM Model 정보
    private String LLM;
    private Double temperature;
    private Integer maxTokens;
    private Double topP;
    private Double frequencyPenalty;
    private Double presencePenalty;

    // 참고한 pdf의 정보
    private String pdfData;
}
