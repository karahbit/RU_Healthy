package com.example.himabindu.demo1;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by tahiyachowdhury on 11/4/17.
 *This code is to test whether the email address
 * */

public class RegisterUtilsTest {

    /* Testing whether a vaild email passess*/

    @Test
    public void aValidEmailAddressPassess() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isValidEmailAddress("hiya_0331@yahoo.com"));
    }
      /* Testing whether an invaild email fails*/

    @Test
    public void aInvalidEmailAddressFails() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isValidEmailAddress("invalid"));
    }

    /* Testing whether an invaild name fails*/

    @Test
    public void aInValidNamefails() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isValidName("*"));
    }

    /* Testing whether an invaild password fails*/
    @Test
    public void isInValidPassword() throws Exception {
        LoginUtils utils = new LoginUtils();
        assertTrue(!utils.isInValidPassword("`#$^"));
    }
}
