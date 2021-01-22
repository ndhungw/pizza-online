import React from "react";
import "../../App.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import {Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2),
  },
  addCardButton: {
    backgroundColor: "#FED400",
    height: 55,
  },
  addCartIcon: {
    color: "#272B37",
  }
}));

export default function IngreCard({item, onAddItem}) {
  const classes = useStyles();
  const temp= {id: item.id, name: item.name, price: item.price, weight: item.weight+50}

  return (
    <Card class="contentCenter">
      <CardActionArea>
        <CardMedia component="img" alt="pizza image" height="280" image={item.image}
        />
      </CardActionArea>
      <CardContent class="contentCenter">
        <Grid item xs={12} class="name"> {item.name} </Grid>
        <Grid  xs={12} sm={10} class="price"> {item.price}.000đ/50g</Grid>
      </CardContent>
      <CardActions class="cardActions">
        <Button className={classes.addCardButton} variant="contained" size="large" onClick={()=>onAddItem(temp)} >
          <AddShoppingCartRoundedIcon className={classes.addCartIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}
