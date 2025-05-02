package com.imbank.imops.domain.user.dto;

public class UserUpdateRequest {
    private String openAi;
    private String anthropic;
    private String upstage;

    // Getters and Setters
    public String getOpenAi() {
        return openAi;
    }

    public void setOpenAi(String openAi) {
        this.openAi = openAi;
    }

    public String getAnthropic() {
        return anthropic;
    }

    public void setAnthropic(String anthropic) {
        this.anthropic = anthropic;
    }

    public String getUpstage() {
        return upstage;
    }

    public void setUpstage(String upstage) {
        this.upstage = upstage;
    }
}
