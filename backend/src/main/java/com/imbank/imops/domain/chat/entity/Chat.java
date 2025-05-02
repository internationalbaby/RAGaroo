package com.imbank.imops.domain.chat.entity;

import com.imbank.imops.domain.user.entity.User;
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
@Table
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@ToString
public class Chat extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @Builder
    public Chat(User user, String name, String description) {
        this.user = user;
        this.name = name;
        this.description = description;
    }
}
