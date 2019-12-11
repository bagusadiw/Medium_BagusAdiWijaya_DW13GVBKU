import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import {LargeCard} from './large-card.component';
import {SmallCard} from './small-card.component';
import {MediumCard} from './medium-card.component';

const dataLargeCard = [
  {
    id: 1,
    url: "https://cdn-images-1.medium.com/fit/c/416/151/1*VhxGyN3BmsKMEh2BrfP0gQ.png",
    title: "Using React Hooks to sync your component state with the URL Query string",
    subtitle: "",
    uploader: "Fernando Abolafio",
    category: "in The Startup",
    date: "Aug 7"
  }
]

const dataSmallCard = [
  {
    id:1,
    url: "https://cdn-images-1.medium.com/fit/c/416/151/1*ntr-5B9JWMCE2CcIF9FsMw.jpeg",
    title: "How I Made $11,000 From Writing in 30 Days",
    subtitle: "And what it took to get there",
    uploader: "Tim Denning",
    category: "in Better Marketing",
    date: "Aug 10"
  },
  {
    id: 2,
    url: "https://cdn-images-1.medium.com/fit/c/100/100/0*Qx5PHkuQkQStWZk6",
    title: "useBreakpoint Hook — Get Media Query Breakpoints in React",
    subtitle: "",
    uploader: "Udit Tyagi",
    category: "in Better Programming",
    date: "Oct 1"
  },
  {
    id: 3,
    url: "https://cdn-images-1.medium.com/fit/c/152/156/1*AX-ojZx301J9_BU4lan5WQ.gif",
    title: "How to *really* know you’re in love",
    subtitle: "Because most of “the signs” they tell you ",
    uploader: "Kris Gage",
    category: "",
    date: "Aug 3, 2017"
  }
]

const dataMediumCard = [
  {
    id: 1,
    url: "https://cdn-images-1.medium.com/fit/c/100/100/0*Qx5PHkuQkQStWZk6",
    title: "How to create responsive table in modern way",
    subtitle: "",
    uploader: "Fernando Abolafio",
    category: "in The Startup",
    date: "Sep 4, 2018"
  }
]

const useStyles = makeStyles(theme => ({
  featuredFeed:{
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1208px',
    width: '100%',
    margin: '12px auto 0 auto',
  },

  smallCardContainer:{
    display: 'flex',
    flexDirection: 'column',
  },

  border:{
    borderBottom: '1px solid rgba(0,0,0,.15)',
    maxWidth: '1032px',
    margin: '24px auto',
    display: 'block',
  },

  seeAllFeatured:{
    maxWidth: '1032px',
    margin: '0px auto 0px auto',
    display: 'flex!important',
    justifyContent:'flex-end!important',
  },
}));

export const Featured = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>        
      <Grid className={classes.featuredFeed} container spacing={2}>

        {/* LARGE CONTAINER */}
        <Grid item xs={12} sm={6} md={4}>
          {dataLargeCard.map(item=> 
            <LargeCard 
              id={item.id}
              url={item.url}
              title={item.title}
              subtitle={item.subtitle}
              uploader={item.uploader}
              category={item.category}
              date={item.date}
            />
          )}
        </Grid>

        {/* SMALL CONTAINER */}
        <Grid 
          className={classes.smallCardContainer} 
          container item xs={12} sm={6} md={4} 
          spacing={2}
        >
          {dataSmallCard.map(item=> 
            <SmallCard 
              id={item.id}
              url={item.url}
              title={item.title}
              subtitle={item.subtitle}
              uploader={item.uploader}
              category={item.category}
              date={item.date}
            />
          )}
        </Grid>

        {/* MEDIUM CONTAINER */}
        <Hidden smDown>
        <Grid item xs={12} sm={6} md={4}>
          {dataMediumCard.map(item=> 
            <MediumCard 
              id={item.id}
              url={item.url}
              title={item.title}
              subtitle={item.subtitle}
              uploader={item.uploader}
              category={item.category}
              date={item.date}
            />
          )}
        </Grid>
        </Hidden>
      </Grid>
      <Grid className={classes.seeAllFeatured}>
        <Button>
          See All Featured
        </Button>
      </Grid>
      <Grid className={classes.border}></Grid> 
    </Grid>
  );
}