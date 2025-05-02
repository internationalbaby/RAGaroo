package com.imbank.imops.domain.chat.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pdf", uniqueConstraints = @UniqueConstraint(columnNames = "name")) // 파일명 유니크 제약 조건 추가
public class Pdf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Lob
    private byte[] data;

    // 생성자
    public Pdf() {}

    public Pdf(String name, byte[] data) {
        this.name = name;
        this.data = data;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public byte[] getData() {
        return data;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
