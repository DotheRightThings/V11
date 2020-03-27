package com.spring.myapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.myapp.model.Fund;
import com.spring.myapp.repositories.FundRepository;

@SpringBootApplication
public class Application {
	
	@Autowired
	FundRepository fundRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);		
	}
	
	@Bean
    CommandLineRunner init(FundRepository fundRepository) {
        return args -> {
    		fundRepository.save(new Fund("asd",1,2));
    		fundRepository.save(new Fund("qwe",1,2));
    		fundRepository.save(new Fund("zxc",1,2));
    		fundRepository.save(new Fund("cvb",1,2));
    		fundRepository.save(new Fund("dfg",1,2));
    		fundRepository.save(new Fund("ert",1,2));
            fundRepository.findAll().forEach(System.out::println);
        };
    }
}