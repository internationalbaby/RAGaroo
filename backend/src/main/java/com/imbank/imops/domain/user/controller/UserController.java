package com.imbank.imops.domain.user.controller;

import com.imbank.imops.domain.user.dto.UserUpdateRequest;
import com.imbank.imops.domain.user.entity.User;
import com.imbank.imops.domain.user.repository.UserRepository;
import com.imbank.imops.domain.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.imbank.imops.domain.user.dto.UserResponse;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // 기본 필드 설정 (openAi, anthropic, upstage는 초기값 설정)
        user.setOpenAi(""); // 필요 시 기본값을 설정하거나 null로 유지
        user.setAnthropic("");
        user.setUpstage("");

        userService.registerUser(user);
        return ResponseEntity.ok("사용자 등록이 완료되었습니다");
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticateUser(user.getUsername(), user.getPassword());
        if (isAuthenticated) {
            Optional<User> optionalUser = userRepository.findByUsername(user.getUsername());
            if (optionalUser.isPresent()) {
                User authenticatedUser = optionalUser.get();
                UserResponse response = new UserResponse(
                        authenticatedUser.getId(),
                        authenticatedUser.getUsername(),
                        authenticatedUser.getOpenAi(),
                        authenticatedUser.getAnthropic(),
                        authenticatedUser.getUpstage()
                );
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(401).body("인증 후 사용자를 찾을 수 없습니다");
            }
        } else {
            return ResponseEntity.status(401).body("아이디 또는 비밀번호가 올바르지 않습니다");
        }
    }

    @PatchMapping("/api_key/{id}/update")
    public ResponseEntity<String> updateUser(
            @PathVariable Long id,
            @RequestBody UserUpdateRequest request
    ) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (request.getOpenAi() != null) {
                user.setOpenAi(request.getOpenAi());
            }
            if (request.getAnthropic() != null) {
                user.setAnthropic(request.getAnthropic());
            }
            if (request.getUpstage() != null) {
                user.setUpstage(request.getUpstage());
            }
            userRepository.save(user);
            return ResponseEntity.ok("api key 등록 완료");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/api_key/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            UserResponse userResponse = new UserResponse(
                    user.getId(),
                    user.getUsername(),
                    user.getOpenAi(),
                    user.getAnthropic(),
                    user.getUpstage()
            );
            return ResponseEntity.ok(userResponse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
