package com.imbank.imops.domain.chat.dto;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnswerRequestDto {
    private String username;
    private Long chatId;

    private String question;

    // TextChunking 정보
    private String method;
    private Integer size;
    private Integer overlap;

    // Embedding Model 정보
    private String embedding;

    // LLM Model 정보
    private String llm;
    private String template;
    private Double temperature;
    private Integer maxTokens;
    private Double topP;
    private Double frequencyPenalty;
    private Double presencePenalty;
}
