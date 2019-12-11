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