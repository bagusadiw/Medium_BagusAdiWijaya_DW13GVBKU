import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';  
import Button from '@material-ui/core/Button';

import './modal-login.styles.css';
import {Login} from './login.component';

export const ModalLogin = ({buttonText}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button className="buttonSignIn" onClick={handleOpen}>
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
                <Login />
              </Box>
            </Box>
          </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}