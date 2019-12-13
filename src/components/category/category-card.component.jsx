import React from 'react';
import Grid from '@material-ui/core/Grid';
import Img from 'react-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  categoryContentContainer1:{
    marginBottom:'0px', 
    display:'block',
  },

  cC11:{
    height:"100%", 
    width:'100%',
  },

  cC12:{
    margin:'40px auto 0px auto', 
    display:'block,'
  },

  cC13:{
    display:'flex',
    justifyContent:'center', 
  },

  cC14:{
    margin:'0px 64px', 
    maxWidth:'1192px', 
    width:'100%',
    height:'354px',
    minWidth:'0',
    flexDirection:'row',
    display:'flex',
  },

  categoryImage1Container:{
    flex:'0 1 auto', 
    justifyContent:'center', 
    position:'relative',
  },

  categoryImage1:{
    flex:'2 1 0', 
    minWidth:'316px', 
    height:'354px',
    width:'100%',
    backgroundSize:'cover',
    overflow:'auto',
  },

  categoryPost11:{
    flex:'1 1 0', 
    padding:'24px 40px', 
    minWidth:'316px', 
    justifyContent:'center', 
    alignItems:'center', 
    display: 'flex',
    overflow: 'auto',
    minWidth:'316px',
    background: '#6A0BFF',
  },

  categoryPost12:{
    flex:'1 1 0', 
    padding:'24px 40px', 
    minWidth:'316px', 
    justifyContent:'center', 
    alignItems:'center', 
    display: 'flex',
    overflow: 'auto',
    minWidth:'316px',
    background: '#white',
  },

  cP12:{
    display:'block',
    textAlign:'center',
    '& h1':{
      fontSize: '21pt',
      color:'white',
      fontWeight: 500,
      margin: '0px 0px 8px 0px',
    },

    '& p1':{
      fontSize: '13pt',
      color:'white',
    },

    '& p2':{
      fontSize: '11pt',
      fontWeight: 600,
      color:"#DAF832",
    },

    '& p3':{
      color:'white',
    },

    '& h2':{
      color:'black',
      fontSize: '21pt',
      fontWeight: 500,
      margin: '0px',
    },

    '& p4':{
      fontSize: '13pt',
      color:'black',
    },

    '& p5':{
      fontSize: '11pt',
      fontWeight: 600,
      color:"#6A0BFF",
    },

    '& p6':{
      color:'black',
    },
  },
}));

export const CategoryCard = (props) => {
  const classes = useStyles();
  const idnumber = props.id;
  return (
    <Grid>
      {(idnumber%2) !== 0 &&
        <Grid className={classes.categoryContentContainer1}>
          <Grid className={classes.cC11}>
            <Grid className={classes.cC12}>
              <Grid className={classes.cC13}>
                <Grid className={classes.cC14}>
                  <Grid className={classes.categoryImage1Container}>
                    <Img className={classes.categoryImage1} src={props.url} />
                  </Grid>
                  <Grid className={classes.categoryPost11}>
                    <Grid className={classes.cP12}>
                      <Grid>
                        <h1>{props.title}</h1>
                      </Grid>
                      <Grid style={{marginBottom:"24px"}}>
                        <p1>{props.subtitle}</p1>
                      </Grid>
                      <Grid style={{marginBottom:"4px"}}>
                        <p2>{props.uploader}</p2>
                      </Grid>
                      <Grid>
                        <p3>{props.date} - 9 min read</p3> 
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }

      {(idnumber%2) == 0  &&
        
        <Grid className={classes.categoryContentContainer1}>
          <Grid className={classes.cC11}>
            <Grid className={classes.cC12}>
              <Grid className={classes.cC13}>
                <Grid className={classes.cC14}>
                  <Grid className={classes.categoryPost12}>
                    <Grid className={classes.cP12}>
                      <Grid>
                        <h2>{props.title}</h2>
                      </Grid>
                      <Grid style={{marginBottom:"24px"}}>
                        <p4>{props.subtitle}</p4>
                      </Grid>
                      <Grid style={{marginBottom:"4px"}}>
                        <p5>{props.uploader}</p5>
                      </Grid>
                      <Grid>
                        <p6>{props.date}- 9 min read</p6> 
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className={classes.categoryImage1Container}>
                    <Img className={classes.categoryImage1} src={props.url} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
      </Grid>         
  );
}