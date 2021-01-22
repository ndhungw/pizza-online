import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: theme.spacing(1, 0, 0),
  },
}));

export default function InteractiveList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Đơn hàng của bạn gồm có
          </Typography>
          <div className={classes.demo}>
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary="Pizza thập cẩm"
                  secondary={"Cỡ VỪA, đế DÀY, đơn giá 170.000đ, số lượng: 1"}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Pizza hải sản"
                  secondary={"Cỡ VỪA, đế DÀY, đơn giá 150.000đ, số lượng: 2"}
                />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
