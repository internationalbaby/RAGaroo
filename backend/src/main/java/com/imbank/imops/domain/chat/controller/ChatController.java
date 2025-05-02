package com.imbank.imops.domain.chat.controller;

import com.imbank.imops.domain.chat.dto.ChatListResponseDto;
import com.imbank.imops.domain.chat.dto.ChatRoomRequestDto;
import com.imbank.imops.domain.chat.service.ChatService;
import com.imbank.imops.global.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@Controller
@RequiredArgsConstructor
@RequestMapping("api/v1/chat")
public class ChatController {
    private final ChatService chatService;

    @GetMapping
    public ResponseEntity<Message> getChatList(@RequestParam String username) {
        log.info("ChatController/getChatList : " + username);

        Message message = new Message();

        try {
            List<ChatListResponseDto> data = chatService.getChatList(username);
            message.setMessage("채팅 리스트 조회 성공");
            message.setData(data);
        } catch (Exception e) {
            log.error("ChatController/getChatList : " + e.getMessage(), e);
            message.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }

    @PostMapping
    public ResponseEntity<Message> makeChatRoom(@RequestBody ChatRoomRequestDto chatRoomRequestDto) {
        log.info("ChatController/makeChatRoom : " + chatRoomRequestDto);

        Message message = new Message();

        try {
            Long data = chatService.makeChat(chatRoomRequestDto);
            message.setMessage("채팅방 만들기 성공");
            message.setData(data);
        } catch (Exception e) {
            log.error("ChatController/makeChatRoom : " + e.getMessage(), e);
            message.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }
}
