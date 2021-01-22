import React, { useState } from "react";
// Material-ui core
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
// react-router-dom
import { NavLink } from "react-router-dom";
// From this project
import pizzaImgUrl from "../../assets/img/pizzaImg.png";
import SimpleSelect from "./SimpleSelect";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(1, 3, 0, 3),
  },
  name: {
    textDecoration: "none",
    color: "inherit",
  },
  price: {
    color: "red",
    fontWeight: "bold",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3, 2, 3),
  },
  addCardButton: {
    backgroundColor: "#FED400",
    height: 55,

    transition: theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      backgroundColor: "#ffdf3c",
    },
  },
  addCartIcon: {
    color: "#272B37",
  },
}));

export default function PizzaCard({ name, price }) {
  const classes = useStyles();
  const sizeOptions = ["Nhỏ", "Vừa", "Lớn"];
  const crustOptions = ["Dày", "Giòn"];
  const [sizeOption, setSizeOption] = useState(0);
  const [crustOption, setCrustOption] = useState(0);

  return (
    <Card className={classes.root}>
      <NavLink to={`/pizza-detail`} className={classes.name}>
        <CardActionArea>
          <CardMedia component="img" alt="pizza image" image={pizzaImgUrl} />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.name}
          >
            {name}
          </Typography>
          <Typography gutterBottom className={classes.price}>
            {price},000 đ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Mô tả chiếc bánh này một cách chi tiết kĩ lưỡng nhất có thể"}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions className={classes.cardActions}>
        <SimpleSelect
          label="Kích cỡ"
          defaultOptionValue={sizeOption}
          options={sizeOptions}
          setOption={setSizeOption}
        />
        <SimpleSelect
          defaultOptionValue={crustOption}
          label="Đế bánh"
          options={crustOptions}
          setOption={setCrustOption}
        />
        <Button
          className={classes.addCardButton}
          variant="contained"
          size="large"
        >
          <AddShoppingCartRoundedIcon className={classes.addCartIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}
