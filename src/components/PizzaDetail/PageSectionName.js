import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageSectionName: {
    fontWeight: "bold",
    width: "100%",
    marginTop: "1%",
    marginBottom: "1%",
  },
  dividerStyle: {
    width: "100%",
    maxWidth: "100%",
    border: "none",
    height: 4,
    backgroundColor: "black",
  },
}));

const PageSectionName = ({ fontVariant, name }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={12} justify="flex-start">
        <Typography
          color="textPrimary"
          align="left"
          variant={fontVariant ? fontVariant : "h2"}
          className={classes.pageSectionName}
        >
          {name ? name : "Chi tiết bánh"}
        </Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
    </>
  );
};

export default PageSectionName;
