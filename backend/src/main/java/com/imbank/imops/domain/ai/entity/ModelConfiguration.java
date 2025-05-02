package com.imbank.imops.domain.ai.entity;

import com.imbank.imops.global.BaseTimeEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Getter
@Table(
        indexes = {
                @Index(name = "idx", columnList = "LLM, template, temperature, maxTokens, topP, frequencyPenalty, presencePenalty")
        }
)
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@ToString
public class ModelConfiguration extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String LLM;

    @NotNull
    private String template;

    @NotNull
    private Double temperature;

    @NotNull
    private Integer maxTokens;

    @NotNull
    private Double topP;

    @NotNull
    private Double frequencyPenalty;

    @NotNull
    private Double presencePenalty;

    @Builder
    public ModelConfiguration(String LLM, String template, Double temperature, Integer maxTokens, Double topP, Double frequencyPenalty, Double presencePenalty) {
        this.LLM = LLM;
        this.template = template;
        this.temperature = temperature;
        this.maxTokens = maxTokens;
        this.topP = topP;
        this.frequencyPenalty = frequencyPenalty;
        this.presencePenalty = presencePenalty;
    }
}
