package com.example.finallogin.Exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserNotFoundAdvice {
    
    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class) //handle exception globally
    @ResponseStatus(HttpStatus.NOT_FOUND) //to declare http status code
    public Map<String,String> exceptionHandler(UserNotFoundException exception){
        Map<String,String>errorMap=new HashMap<>();
        errorMap.put("errorMessage",exception.getMessage());

        return errorMap;
    }
}
