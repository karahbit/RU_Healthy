package com.example.himabindu.demo1;

/**
 * Created by tahiyachowdhury on 11/4/17.
 */

/* Testing whether the name is a valid string and does not contain invalid character '*'

 */
public class RegisterUtils {
    public boolean isValidName(String name){
        boolean hasAtSign = name.indexOf("*")>-1;
        return hasAtSign;
    }

    /* Testing whether the name is a valid email

 */



    public boolean isValidEmail(String email){
            boolean hasAtSign = email.indexOf("@")>-1;
            return hasAtSign;
        }

    /* Testing whether the password is a valid password string and does not contain invalid character '#'

 */

    public boolean isInValidPassword(String password){
        boolean hasAtSign = password.indexOf("#")>-1;
        return hasAtSign;
    }

}
