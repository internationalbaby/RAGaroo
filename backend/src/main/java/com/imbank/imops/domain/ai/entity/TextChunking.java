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
                @Index(name = "idx_method_size_overlap", columnList = "method, size, overlap")
        }
)
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@ToString
public class TextChunking extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String method;

    @NotNull
    private Integer size;

    @NotNull
    private Integer overlap;

    @Builder
    public TextChunking(String method, Integer size, Integer overlap) {
        this.method = method;
        this.size = size;
        this.overlap = overlap;
    }
}
