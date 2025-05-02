package com.imbank.imops.domain.chat.dto;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatRoomRequestDto {
    private String username;
    private String chatRoomName;
    private String description;
}
