import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';  
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Img from 'react-image';

import './sign-up.styles.css';
import kiri from '../../img/kiri.png';
import kanan from '../../img/kanan.png';
import {ModalLogin} from '../login/modal-login.component';
import './modal-sign-up.styles.css'
// import {SignUp} from './sign-up.component';

export class ModalSignUp extends Component{
	state = {open : false};
  		handleOpen = () => {
			this.setState({open : true})
		};
  		handleClose = () => {
			this.setState({open : false})
		};
  	render() {
  		return(
  			<div>
				<Button variant="outlined" className="buttonSignUp" onClick={this.handleOpen}>
					Register
				</Button>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className="modal"
					open={this.open}
					onClose={this.handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
					timeout: 500,
					}}
				>
			        <Fade in={this.open}>
				        <Box>
				          <Box>
				            <Box>
				            	<Box>
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
				            	</Box>
				            </Box>
				          </Box>
				        </Box>
			        </Fade>
		      	</Modal>
		    </div>
  		);
  	}
}