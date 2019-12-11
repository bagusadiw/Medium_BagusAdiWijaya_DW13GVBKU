import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({    
  largeCardPost:{
    display: 'block',
    marginLeft: '80px',
    '& h1':{
      lineHeight: '20pt',
      fontSize: '15pt',
    },
    '& p': {
      lineHeight: '15pt',
      fontSize: '10pt',
    }
  },

  imageLargeCard: {
    flex: '0 1 auto',
    position: 'relative',
    height: '150px',
    width: '100%',
    marginBottom: '16px',
    backgroundOrigin: 'border-box!important',
    backgroundSize: 'cover!important',
    display: 'block!important',
  },

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

   smallCard:{
    justifyContent:'flex-start!important',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  smallCardPost:{
    display: 'block',
    lineHeight: '13pt',
    '& h2':{
      height: '100%',
      margin: '0px 0px 0px 0px',
      fontSize: '11pt',
    },
    '& p': {
      margin: '5px 0px 10px 0px',
      fontSize: '10pt',
    }
  },

  imageSmallCard: {
    flex: '0 1 auto',
    position: 'relative',
    minHeight: '100px',
    minWidth:'100px',
    maxWidth: '100px',
    maxHeight: '100px',
    marginRight: '24px',
    backgroundOrigin: 'border-box!important',
    backgroundSize: 'cover!important',
    display: 'block!important',
  },
}));


export const LargeCard = (props) => {
  const classes = useStyles();
  return (
          <CardActionArea>
            <CardMedia
              className={classes.imageLargeCard}
              image={props.url}
            />
            <Grid className={classes.largeCardPost}>
              <Grid>
                <h1>
                  {props.title}
                </h1>
                <p>
                  {props.subtitle}
                </p>
              </Grid>
              <Grid>
                <p>{props.uploader} {props.category}<br/>{props.date}</p>
              </Grid>
            </Grid>
          </CardActionArea>
      )
}

export const SmallCard = (props) => {
  const classes = useStyles();
  return (
      <Grid item>
        <CardActionArea className={classes.smallCard}>
            <CardMedia
              className={classes.imageSmallCard}
              image={props.url}
            />
            <Grid className={classes.smallCardPost}>
              <h2>
                {props.title}
              </h2>
              <p>
                {props.subtitle}
              </p>
              <p>{props.uploader} {props.category} <br/>{props.date}</p>
            </Grid>
        </CardActionArea>
      </Grid>
    
  )
}

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