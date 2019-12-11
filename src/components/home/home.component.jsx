import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Img from 'react-image';
import { makeStyles } from '@material-ui/core/styles';
import {Featured} from './featured.component.jsx';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import {Content} from './content.component';
import logo from '../../img/medium.svg.png'
import {ModalSignUp} from '../sign-up/modal-sign-up.component';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  toolBar:{
    backgroundColor: 'white!important',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1032px',
    margin: '0px auto 0px auto',
  },

  iconBar:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentFeedContainer:{
    maxWidth: '1032px',
    width: '100%',
    margin: '48px auto 0px auto',
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Grid>

      {/* NAV BAR */}
      <Grid className={classes.root}>
        <Grid container >
          <Toolbar className={classes.toolBar}>
            <Grid>
              <Img width="110" height="23" src={logo} />
            </Grid>
            <Grid className={classes.iconBar}>
              <SearchIcon />
              <NotificationsNoneIcon />
              <ModalSignUp 
                buttonText="Register"> </ModalSignUp>
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>

      {/* FEATURED FEED */}
      <Featured />
  
      {/* CONTENT FEED*/}
      <Grid className={classes.contentFeedContainer}>
        <Content /> 
      </Grid>
    </Grid>
    
  );
}