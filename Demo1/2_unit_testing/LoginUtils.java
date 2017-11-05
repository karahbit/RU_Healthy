package com.example.himabindu.demo1;

/**
 * Created by tahiyachowdhury on 11/4/17.
 * This method checks if the string provided in 'Email' field
 * is a valid email address.

*/

public class LoginUtils {

    public boolean isValidEmailAddress(String email){
        boolean hasAtSign = email.indexOf("@")>-1;
        return hasAtSign;
    }


    /* This method checks if the string provided in 'password' field
 * is a valid password.*/


    public boolean isInValidPassword(String password){
        boolean hasAtSign = password.indexOf("#")>-1;
        return hasAtSign;
    }




}
