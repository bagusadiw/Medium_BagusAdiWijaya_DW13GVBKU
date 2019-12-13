import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Img from 'react-image';

import './login.styles.css';
import kiri from '../../img/kiri.png';
import kanan from '../../img/kanan.png';
import {ModalSignUp} from '../sign-up/modal-sign-up.component';

export const Login = () => {
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
            Sign in with email
          </Typography>
        </Box>
        <Box display="block">
          <Box className="boxTypography2">
            <Typography className="typography2" variant="subtitle2" style={{color: "grey"}}>
              Enter the email address associated with your account, and we'll send a magic link to your inbox.
            </Typography>
          </Box>
        </Box>  
        <Box className="textFieldContainerLogin">
          <Box className="textFieldContainer2">
            <Box>
              <Box className="textFieldContainer4">
                <Typography component="h1" className="textFieldLabel">Your email</Typography>
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
              <Box className="buttonContinue">
                <Button variant="contained" className="submit">
                  Continue
                </Button>
              </Box>
            </Box>  
          </Box>
          <Box className="boxTypography3">
            <Box>
              <ModalSignUp 
                buttonText="All sign in options"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="imgContainer">
        <Box className="img">
          <Img src={kanan} />
        </Box>
      </Box>
    </Box>
  );
}