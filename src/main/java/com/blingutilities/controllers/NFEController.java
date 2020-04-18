package com.blingutilities.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NFEController {

    @GetMapping(value = "/test")
    public ResponseEntity<Object> getID(){
        return ResponseEntity.ok().body("tudo ok");
    }

}