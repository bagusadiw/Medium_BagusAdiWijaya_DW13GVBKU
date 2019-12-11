import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const menu = [
  {
    id: 1,
    name: "home"
  },
  {
    id: 2,
    name: "onezero"
  },
  {
    id: 3,
    name: "elemental"
  },
  {
    id: 4,
    name: "gen"
  },
  {
    id: 5,
    name: "zora"
  },
  {
    id: 6,
    name: "forge"
  },
  {
    id: 7,
    name: "human parts"
  },
  {
    id: 8,
    name: "maker"
  },
  {
    id: 9,
    name: "level"
  },
  {
    id: 10,
    name: "modus"
  },
  {
    id: 11,
    name: "more"
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Grid p={3}>{children}</Grid>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
  },

  toolBar:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1032px',
    margin: '0px auto 0px auto',
  },

  tabText:{
    fontWeight: 600,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.toolBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {menu.map(item=> 
            <Tab className={classes.tabText} label={item.name} />
          )}
        </Tabs>
      </Grid>
    </Grid>
  );
}