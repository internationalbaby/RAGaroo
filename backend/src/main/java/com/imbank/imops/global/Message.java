package com.imbank.imops.global;

import lombok.Data;

@Data
public class Message {
    private String message;
    private Object data;

    public Message() {
        this.message = null;
        this.data = null;
    }
}
