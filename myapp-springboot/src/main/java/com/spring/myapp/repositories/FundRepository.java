package com.spring.myapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.myapp.model.Fund;

@Repository
public interface FundRepository extends CrudRepository<Fund, Long>{}