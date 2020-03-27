package com.spring.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.myapp.model.Fund;
import com.spring.myapp.repositories.FundRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FundContoller {
	
	@Autowired
	private FundRepository fundRepository;
	
	
	@GetMapping("/funds")
	public List<Fund> getFunds(){
		return (List<Fund>) fundRepository.findAll();
	}
	
    @PostMapping("/funds")
    void addFunds(@RequestBody Fund fund) {
        fundRepository.save(fund);
    }
}
