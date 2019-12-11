import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({    
   imageMediumCard: {
    flex: '0 1 auto',
    position: 'relative',
    height: '150px',
    width: '100%',
    backgroundOrigin: 'border-box!important',
    backgroundSize: 'cover!important',
    display: 'block!important',
  },

  mediumCardPost:{
    display: 'block',
    marginRight: '80px',
    '& h2':{
      lineHeight: '20pt',
      fontSize: '15pt',
    },
    '& p': {
      lineHeight: '15pt',
      fontSize: '10pt',
    }
  },
}));

export const MediumCard = (props) => {
  const classes = useStyles();
  return (
  		  <CardActionArea>
            <CardMedia
              className={classes.imageMediumCard}
              image={props.url}
            />
            <Grid className={classes.mediumCardPost}>
              <h2>
                {props.title}
              </h2>
              <p>
                {props.subtitle}<br /> 
                {props.uploader} {props.category}<br />
                {props.date} 
              </p>
            </Grid>
          </CardActionArea>
  )
}