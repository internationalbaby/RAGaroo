package com.imbank.imops.domain.chat.service;

import com.imbank.imops.domain.chat.dto.ChatListResponseDto;
import com.imbank.imops.domain.chat.dto.ChatRoomRequestDto;
import com.imbank.imops.domain.chat.entity.Chat;
import com.imbank.imops.domain.chat.repository.ChatRepository;
import com.imbank.imops.domain.user.entity.User;
import com.imbank.imops.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Service
public class ChatService {
    private final ChatRepository chatRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<ChatListResponseDto> getChatList(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("없는 유저입니다"));
        return chatRepository.getChatList(user);
    }

    @Transactional
    public Long makeChat(ChatRoomRequestDto chatRoomRequestDto) {
        User user = userRepository.findByUsername(chatRoomRequestDto.getUsername())
                .orElseThrow(() -> new RuntimeException("없는 유저입니다"));

        return chatRepository.saveAndFlush(Chat.builder()
                .user(user)
                .name(chatRoomRequestDto.getChatRoomName())
                .description(chatRoomRequestDto.getDescription())
                .build()).getId();
    }
}
