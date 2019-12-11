import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

      fontSize: '10pt',
      margin: '0px 0px 0px 0px',
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
              <p>{props.uploader} {props.category} <br/>{props.date}</p>
            </Grid>
        </CardActionArea>
      </Grid>
    
  )
 }