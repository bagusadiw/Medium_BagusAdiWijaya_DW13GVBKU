import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {FeedContent, PopularContent} from './feed-content.component';
import Hidden from '@material-ui/core/Hidden';

const dataFeed = [
  {
    id:1,
    url: "https://cdn-images-1.medium.com/fit/c/416/151/1*ntr-5B9JWMCE2CcIF9FsMw.jpeg",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "How I Made $11,000 From Writing in 30 Days",
    subtitle: "And what it took to get there",
    uploader: "Tim Denning",
    category: "in Better Marketing",
    date: "Aug 10"
  },
  {
    id: 2,
    url: "https://cdn-images-1.medium.com/fit/c/100/100/0*Qx5PHkuQkQStWZk6",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "useBreakpoint Hook — Get Media Query Breakpoints in React",
    subtitle: "",
    uploader: "Udit Tyagi",
    category: "in Better Programming",
    date: "Oct 1"
  },
  {
    id: 3,
    url: "https://cdn-images-1.medium.com/fit/c/100/100/1*6OXHRhwHdlz8B5Ra1Qid3A.png",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "How to *really* know you’re in love",
    subtitle: "Because most of “the signs” they tell you ",
    uploader: "Kris Gage",
    category: "",
    date: "Aug 3, 2017"
  }
]

const useStyles = makeStyles(theme => ({
  contentPopularContainer:{
    justifyContent: 'space-between',
  },

  contentFeed:{
    display: 'flex',
    flexDirection: 'column',
  },

  contentCardContainer:{
    display: 'flex',
    flexDirection: 'column',
  },

  popularHeader:{
      height: '45px',
      width: '100%',
      justifyContent: 'flex-start',
      '& h3':{
        margin: '32px 32px 0px 0px',
        paddingBottom: '16px',
        fontSize:'22px',
      }
  },

  popularArticleContainer:{
    padding: '24px 24px 24px 0px',
  },

  popularFooter:{
    maxWidth: '740px!important',
    margin: '0px auto 0px auto',
  },


  footerMenu:{
    textRendering: 'optimizeLegibility',
    fontSize:'9pt',
    display:'flex',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    padding: '10px 0px 25px 0px',
  },

  border:{
    borderBottom: '1px solid rgba(0,0,0,.15)',
    maxWidth: '1032px',
    margin: '0px auto',
    display: 'block',
  },
}));

export const ContentContainer = () => {
  const classes = useStyles();
  return (
  
    <Grid 
      container
      className={classes.contentPopularContainer}>
        <Hidden smDown>
          <Grid item md={4}>
            <Grid className={classes.popularHeader}>
              <Grid>
                <h3>
                  Popular on Medium
                </h3>
              </Grid>
            </Grid>
            <Grid className={classes.border}></Grid>
            {/* POPULAR ARTICLE CONTAINER*/}
            <Grid className={classes.popularArticleContainer} container spacing={3}>
              {dataFeed.map(item=> 
                <PopularContent 
                  id={item.id}
                  title={item.title}
                />
              )}
            </Grid>
            <Grid className={classes.border}></Grid>
            <Grid className={classes.popularFooter}>
              <Grid className={classes.footerMenu}>
                <a style={{marginRight: '10px'}}>Help</a>
                <a style={{marginRight: '10px'}}>Status</a>
                <a style={{marginRight: '10px'}}>Writers</a>
                <a style={{marginRight: '10px'}}>Blog</a>
                <a style={{marginRight: '10px'}}>Careers</a>
                <a style={{marginRight: '10px'}}>Privacy</a>
                <a style={{marginRight: '10px'}}>Terms</a>
                <a style={{marginRight: '10px'}}>About</a>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      
      {/* CONTENT FEED */}
      <Grid 
        className={classes.contentFeed}
        container spacing={4}
        item sm={12} md={8}>
        <Grid item container spacing={2} className={classes.contentCardContainer}>
          {dataFeed.map(item=> 
            <FeedContent 
              id={item.id}
              url={item.url}
              basedOn={item.basedOn}
              title={item.title}
              subtitle={item.subtitle}
              uploader={item.uploader}
              category={item.category}
              date={item.date}
            />
          )}
        </Grid>
      </Grid>
      {/* CONTENT FEED END*/}
      
    </Grid>
  );
}