package com.imbank.imops;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ImOpsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImOpsApplication.class, args);
    }

}
