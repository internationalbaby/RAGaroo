package com.imbank.imops.domain.user.dto;

public class UserResponse {
    private Long id;
    private String username;
    private String openAi;
    private String anthropic;
    private String upstage;

    // 생성자
    public UserResponse(Long id, String username, String openAi, String anthropic, String upstage) {
        this.id = id;
        this.username = username;
        this.openAi = openAi;
        this.anthropic = anthropic;
        this.upstage = upstage;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getOpenAi() {
        return openAi;
    }

    public String getAnthropic() {
        return anthropic;
    }

    public String getUpstage() {
        return upstage;
    }
}
