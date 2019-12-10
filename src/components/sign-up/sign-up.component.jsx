import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Img from 'react-image';

import './sign-up.styles.css';
import kiri from '../../img/kiri.png';
import kanan from '../../img/kanan.png';
import {ModalLogin} from '../login/modal-login.component';

export const SignUp = () => {
  return (
    <Box container className="paper" maxWidth="md">
      <Box className="imgContainer">
        <Box className="img">
          <Img src={kiri} />
        </Box>
      </Box>
       
      <Box className="signUpField">
        <Box className="boxTypograhpy1">
          <Typography className="typography1" component="h1" variant="h4">
            Join Medium.
          </Typography>
        </Box>
        <Box display="block">
          <Box className="boxTypography2">
            <Typography className="typography2" variant="subtitle2" style={{color: "grey"}}>
              Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
            </Typography>
          </Box>
        </Box>  
        <Box className="textFieldContainer">
          <Box className="textFieldContainer2">
            <Box>
              <Box className="textFieldContainer4">
                <Typography component="h1" className="textFieldLabel">Your username</Typography>
                <Box>
                  <TextField className="textField"></TextField>
                </Box>
              </Box>
              <Box className="textFieldContainer4">
                <Typography component="h1" className="textFieldLabel">Your password</Typography>
                <Box>
                  <TextField className="textField"></TextField>
                </Box>
              </Box>
              <Box className="textFieldContainer4">
                <Typography component="h1" className="textFieldLabel">Your email</Typography>
                <Box>
                  <TextField className="textField"></TextField>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" className="submit">
                  REGISTRASI
                </Button>
              </Box>
            </Box>  
          </Box>
          <Box className="boxTypography3">
            <Box>
              <Typography className="typography3" component="h1" variant="subtitle2">
                Already have an account?
              </Typography>
            </Box>
            <Box>
              <ModalLogin 
                buttonText="Sign in"
              />
            </Box>
          </Box>
        </Box>
        <Typography className="typography2" variant="subtitle2" style={{color: "grey"}}>
          To make Medium work, we log user data and share it with service providers. Click "Sign Up" above to accept Medium's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
        </Typography>
      </Box>

      <Box className="imgContainer">
        <Box className="img">
          <Img src={kanan} />
        </Box>
      </Box>
    </Box>
  );
}