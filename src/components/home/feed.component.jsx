import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contentCard:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  contentCardPost:{
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '13pt',
    '& h2':{
      margin: '0px 0px 0px 0px',
      lineHeight: '30px',
    },
    '& p1, p2, p3':{
      color: 'grey',
      fontSize: '10pt',
      margin: '0px 0px 0px 0px',
    },
    '& p1': {
      textTransform: 'uppercase',      
    },
    '& p3': {
      marginTop: '10px',
    }
  },

  imageContenCard: {
    flex: '0 1 auto',
    position: 'relative',
    minHeight: '143px',
    minWidth:'152px',
    maxWidth: '152px',
    maxHeight: '143px',
    backgroundOrigin: 'border-box!important',
    backgroundSize: 'cover!important',
    display: 'block!important',
  },
}));

export const Feed = (props) => {
  const classes = useStyles();
  return (
        <Grid item>
          <CardActionArea  
            className={classes.contentCard}>
              <Grid className={classes.contentCardPost}>
                <p1>
                  {props.basedOn} 
                </p1>
                <h2>
                  {props.title} 
                </h2>
                <p2>
                  {props.subtitle} 
                </p2>
                <p3>
                {props.uploader} {props.category}
                </p3>
                <p4>
                {props.date}
                </p4>

              </Grid>
              <CardMedia
                className={classes.imageContenCard}
                image={props.url}
              />
          </CardActionArea>
        </Grid>
  );
}