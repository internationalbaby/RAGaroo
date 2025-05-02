package com.imbank.imops.domain.chat.entity;

import com.imbank.imops.domain.ai.entity.EmbeddingModel;
import com.imbank.imops.domain.ai.entity.ModelConfiguration;
import com.imbank.imops.domain.ai.entity.TextChunking;
import com.imbank.imops.domain.user.entity.User;
import com.imbank.imops.global.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Getter
@Table
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@ToString
public class Experiment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Chat chat;

    @ManyToOne
    private TextChunking textChunking;

    @ManyToOne
    private ModelConfiguration modelConfiguration;

    @ManyToOne
    private EmbeddingModel embeddingModel;

    private String question;

    private String answer;

    private Integer accuracy;

    private Integer relevance;

    private Integer completeness;

    private String feedback;

    private String pdfData;

    @Builder
    public Experiment(User user, Chat chat, TextChunking textChunking, ModelConfiguration modelConfiguration, EmbeddingModel embeddingModel, String question, String answer, Integer accuracy, Integer relevance, Integer completeness, String feedback, String pdfData) {
        this.user = user;
        this.chat = chat;
        this.textChunking = textChunking;
        this.modelConfiguration = modelConfiguration;
        this.embeddingModel = embeddingModel;
        this.question = question;
        this.answer = answer;
        this.accuracy = accuracy;
        this.relevance = relevance;
        this.completeness = completeness;
        this.feedback = feedback;
        this.pdfData = pdfData;
    }
}
