package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.dto.ChatListResponseDto;
import com.imbank.imops.domain.user.entity.User;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.imbank.imops.domain.chat.entity.QChat.chat;
import static com.imbank.imops.domain.chat.entity.QExperiment.experiment;

@Log4j2
@RequiredArgsConstructor
@Repository
public class ChatRepositoryImpl implements ChatRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<ChatListResponseDto> getChatList(User user) {
        return queryFactory.select(Projections.constructor(ChatListResponseDto.class,
                        chat.id,
                        chat.name,
                        chat.description,
                        JPAExpressions
                                .select(experiment.count())
                                .from(experiment)
                                .where(experiment.chat.eq(chat)),
                        JPAExpressions
                                .select(experiment.modifiedAt.max())
                                .from(experiment)
                                .where(experiment.chat.eq(chat))
                ))
                .from(chat)
                .where(chat.user.eq(user))
                .fetch();
    }
}
