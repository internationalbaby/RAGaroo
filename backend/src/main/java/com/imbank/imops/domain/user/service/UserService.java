package com.imbank.imops.domain.user.service;

import com.imbank.imops.domain.user.entity.User;
import com.imbank.imops.domain.user.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public void registerUser(User user) {
        // 중복 사용자 검사
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }

        // 비밀번호 암호화 후 저장
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public boolean authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username).orElse(null);
        if (user != null) {
            // 비밀번호 비교
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }

    @Transactional
    public void updateOpenAi(Long id, String openAi) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setOpenAi(openAi);
        userRepository.save(user);
    }

    @Transactional
    public void updateAnthropic(Long id, String anthropic) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setAnthropic(anthropic);
        userRepository.save(user);
    }

    @Transactional
    public void updateUpstage(Long id, String upstage) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUpstage(upstage);
        userRepository.save(user);
    }
}
