package com.example.himabindu.demo1;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Testing whether a valid Email address passes
 */


public class LoginUtilsTest {
    @Test
    public void aValidEmailAddressPassess() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isValidEmailAddress("hiya_0331@yahoo.com"));
    }

    /**
     * Testing whether an invalid Email address fails
     */
    @Test
    public void anInvalidEmailAddressFails() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isValidEmailAddress("invalid"));
    }

    /**
     * Testing whether an email address has an acceptable length
     */

    @Test
    public void localPartLengthForValidEmailAddress() throws Exception {
        assertEquals(1, !utils.getLocalPartlength("park@bar.com"));
    }


    /**
     * Testing whether a password contains an invalid character
     */
    @Test
    public void isInValidPassword() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertEquals(toString(),"`#$^");
    }
}