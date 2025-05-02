package com.imbank.imops.domain.chat.dto;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnswerResponseDto {
    private String answer;
    private Integer accuracy;
    private Integer relevance;
    private Integer completeness;
    private String feedback;
    private String pdfData;
}
