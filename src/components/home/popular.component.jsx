import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  popularArticle:{
    display:'flex',
    flexDirection: 'row',
  },

  popularRanking:{
    color: 'lightgrey',
    fontSize: '20pt',
    fontWeight: 450,      

  },

  popularTitle:{
    marginLeft: '10px',
    fontWeight: 650,
  },
}));

export const Popular = (props) => {
  	const classes = useStyles();
  	return (
  		<Grid item className={classes.popularArticle}>
	        <CardMedia className={classes.popularRanking}>
	          {props.id}
	        </CardMedia>  
	      <Grid className={classes.popularTitle}>

	        {props.title}
	      </Grid>
	    </Grid>
	  
	);
}

