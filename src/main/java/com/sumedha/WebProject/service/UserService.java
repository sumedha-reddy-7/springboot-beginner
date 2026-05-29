package com.sumedha.WebProject.service;
import java.util.List;
import java.util.ArrayList;
import com.sumedha.WebProject.model.User;
public class UserService {
private List<User> allUsers;
    public UserService(){
        allUsers=new ArrayList<>();
        allUsers.add(new User("Sumedha","Female","/img/jane_doe.png", 1));
        allUsers.add(new User("David", "Male","/img/john_doe.png", 2));
    }

    public List<User> getAllUsers(){
        return allUsers;
    }
}
