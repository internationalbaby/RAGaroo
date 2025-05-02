package com.imbank.imops.domain.chat.repository;

import com.imbank.imops.domain.chat.entity.Experiment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperimentRepository extends JpaRepository<Experiment, Long>, ExperimentRepositoryCustom {
}
