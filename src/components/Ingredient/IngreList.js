import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IngreCard from "./IngreCard";
import {Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function IngreList({HaiSan, Thit, RauCu}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: "#033A56"}}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Hải sản" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Thịt" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Rau củ" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            <Grid container xs={12} spacing={2} >
            {HaiSan.map((item, index) => {
                    return (
                    <Grid item key={index} xs={4}>
                        <IngreCard className={classes.pizzaCard}  name={item.name} price={item.price} image={item.image}    />
                    </Grid>
                    );
                })}
            </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Grid container xs={12} spacing={2}>
                {Thit.map((item, index) => {
                        return (
                        <Grid item key={index} xs={4}>
                            <IngreCard className={classes.pizzaCard}  name={item.name}    price={item.price} image={item.image}   />
                        </Grid>
                        );
                    })}
            </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
            <Grid container xs={12} spacing={2}>
                {RauCu.map((item, index) => {
                        return (
                        <Grid item key={index} xs={4}>
                            <IngreCard className={classes.pizzaCard}  name={item.name} price={item.price}  image={item.image}/>
                        </Grid>
                        );
                    })}
            </Grid>
      </TabPanel>
    </div>
  );
}
