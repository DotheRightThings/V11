package com.spring.myapp;

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
    		fundRepository.save(new Fund("RHB China-India Dynamic Growth Fund",0.9855,3.81));
    		fundRepository.save(new Fund("RHB Energy Fund",0.3632,2.57));
    		fundRepository.save(new Fund("RHB-GS US Equity Fund",1.2338,2.46));
    		fundRepository.save(new Fund("RHB Dana Hazeem",0.6928,2.30));
    		fundRepository.save(new Fund("RHB Shariah China Focus Fund - MYR",1.2716,2.01));
    		fundRepository.save(new Fund("RHB Emerging Markets Bond Fund",0.6021,1.07));
    		fundRepository.save(new Fund("RHB Golden Dragon Fund",0.559,0.23));
    		fundRepository.save(new Fund("RHB Dana Hazeem",0.4275,0.12));
            fundRepository.findAll().forEach(System.out::println);
        };
    }
}