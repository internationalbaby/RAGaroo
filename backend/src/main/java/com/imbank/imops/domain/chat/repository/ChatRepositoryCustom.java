package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.dto.ChatListResponseDto;
import com.imbank.imops.domain.user.entity.User;

import java.util.List;

public interface ChatRepositoryCustom {
    List<ChatListResponseDto> getChatList(User user);
}
