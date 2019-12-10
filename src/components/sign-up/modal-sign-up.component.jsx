import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';  
import Button from '@material-ui/core/Button';

import './modal-sign-up.styles.css'
import {SignUp} from './sign-up.component';

export const ModalSignUp = ({buttonText, styles}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="buttonSignUp" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box>
          <Box>
            <Box>
              <Box>
                <SignUp></SignUp>
              </Box>
            </Box>
          </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}