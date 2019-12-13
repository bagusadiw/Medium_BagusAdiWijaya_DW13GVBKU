import React from 'react';
import Grid from '@material-ui/core/Grid';
import Img from 'react-image';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {Header} from '../header/header.component';
import {FeedContent} from '../home/content-feed.component';
import {CategoryCard} from './category-card.component';

const useStyles = makeStyles(theme => ({
  container:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',
  },

  tagline1:{
    padding: '40px 0px',
    justifyContent:'center',
    display:'flex',
  },

  tagline2:{
    maxWidth:"1192px", 
    width:"100%", 
    margin:"0px 0px",
    display:"block",

  },

  tagline3:{
    marginTop:"40px",
    alignItems:"flex-end", 
    marginRight:"auto",
    marginLeft:"auto",
    display:"flex",
  },

  logoTagline:{
    width:"270px",
    height:"61px",
    display:"block",
  },

  descTagline:{
    flex:'1 1 auto',
    maxWidth:'560px',
    padding: '0 0 0 16px',
    fontWeight: 500,
    lineHeight:'24px',
    fontSize:'20px',
    '& span1':{
      color: '#6A0BFF',
    }
  },

  taglineButton:{
    flex: '1 0 auto',
    textAlign: "right",
    paddingRight: "0px",
    display: 'block',
  },

  catergoryContentContainer2:{
    marginTop:'40px',
    marginBottom:'24px',
    display:'block',
  },

  cC21:{
     height:'100%', 
     width:'100%', 
     display:'block',
  },

  cC22:{
    display:'flex', 
    justifyContent:'center',
  },

  cC23:{
    maxWidth:'1192px', 
    margin:'0px 64px', 
    width:'100%', 
    minWidth:'0px', 
    display:'block',
  },

  cC24:{
    margin: '40px auto 0x auto', 
    textAlign:'left', 
    background:'#DAF832', 
    padding:'24px 0px', 
    width:'100%', 
    display:'block'
  },

  cC25:{
    display:'flex', 
    justifyContent:'center', 
  },

  cC26:{
    margin:'0 64px', 
    maxWidth:'680px', 
    width:'100%', 
    minWidth:'0', 
    display:'block'
  },

  cC27:{
    position:'relative', 
    display:'block',
    '& p1':{
      fontSize: '21pt',
      fontWeight: 500,
    },

    '& p2':{
      fontSize: '12pt',
      fontWeight: 500,
    },

    '& p3':{
      fontSize: '15pt',
      fontWeight: 400,
    },

    '& p4':{
      fontSize: '12pt',
      fontWeight: 500,
    },
  },

  contentFeedContainer:{
    display:'flex',
    flexDirection:'column',
    maxWidth: '680px',
    width: '100%',
    height:'100%',
    margin: '48px auto 0px auto',
  },

  border:{
    borderBottom: '1px solid rgba(0,0,0,.15)',
    maxWidth: '1032px',
    margin: '24px auto',
    display: 'block',
  },
}));

const dataFeed = [
  {
    id:1,
    url: "https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "How I Made $11,000 From Writing in 30 Days",
    subtitle: "And what it took to get there",
    uploader: "Tim Denning",
    category: "in Better Marketing",
    date: "Aug 10"
  },
  {
    id: 2,
    url: "https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "useBreakpoint Hook — Get Media Query Breakpoints in React",
    subtitle: "",
    uploader: "Udit Tyagi",
    category: "in Better Programming",
    date: "Oct 1"
  },
  {
    id: 3,
    url: "https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "How to *really* know you’re in love",
    subtitle: "Because most of “the signs” they tell you ",
    uploader: "Kris Gage",
    category: "",
    date: "Aug 3, 2017"
  },
  {
    id: 4,
    url: "https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg",
    basedOn: "BASED ON YOUR READING HISTORY",
    title: "useBreakpoint Hook — Get Media Query Breakpoints in React",
    subtitle: "",
    uploader: "Udit Tyagi",
    category: "in Better Programming",
    date: "Oct 1"
  },
]

export const CategoryContainer = () => {
  const classes = useStyles();
  return (
    <Grid >

      {/*--------------------------------------------*/}
      
      {/* HEADER */}
      <Header />

      {/* CATEGORY BODY */}
      <Grid className={classes.container}>

        {/* TAGLINE */}
        <Grid  className={classes.tagline1}>
          <Grid className={classes.tagline2}>
            <Grid className={classes.tagline3}>
              <Grid className={classes.logoTagline}>
                <Img src="https://miro.medium.com/max/270/1*cw32fIqCbRWzwJaoQw6BUg.png" />
              </Grid>
              <Grid className={classes.descTagline}>
                <span1>The front lines of the future.</span1><span> A Medium publication about tech and science.</span>
              </Grid>
              <Grid className={classes.taglineButton}>

                  <Button size="small" variant="outlined">Follow</Button>

              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* CATEGORY CONTENT 1 */}
        <Grid>
          {dataFeed.map(item=> 
            <CategoryCard 
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

        {/* CATEGORY CONTENT 2 */}
        <Grid className={classes.catergoryContentContainer2}>
          <Grid className={classes.cC21}>
            <Grid className={classes.cC22}>
              <Grid className={classes.cC23}>
                <Grid className={classes.cC24}>
                  <Grid className={classes.cC25}>
                    <Grid className={classes.cC26}>
                      <Grid className={classes.cC27}>
                        <Grid>
                          <p1>“There’s no need for Twitter to serve as a tool of political omnipresence.”</p1>
                        </Grid>
                        <Grid style={{margin:'16px 0 40px 0'}}>
                          <p2>— Robert Howell</p2>
                        </Grid>
                        <Grid style={{margin: '0 0 8px 0'}}>
                          <p3>The Case for Removing All Politicians From Twitter</p3>
                        </Grid>
                        <Grid>
                          <p4>Dec 11 - 5 min read</p4>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* CATEGORY CARD*/}
        <Grid 
          className={classes.contentFeedContainer} 
          container  
          spacing={2}
        >
          {dataFeed.map(item=> 
            <FeedContent 
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
      </Grid>

      {/* FOOTER */}
      <Grid >
        
      </Grid>      

    </Grid>    
  );
}