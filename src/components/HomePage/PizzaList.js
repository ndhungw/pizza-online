import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//SimpleSelect
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//PizzaCard
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
// react-router-dom
import { NavLink } from "react-router-dom";
//PizzaList
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// From this project
import pizzaImgUrl from "../../assets/img/pizzaImg.png";

const backgroundColor='#C2002F'
const textColor='white'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width:'100%'
  },
  listContainer: {
    display: 'flex',
    overflow:'hidden',
    width:'100%',
    minHeight:typeof window !== 'undefined'?(window.innerHeight*2/5)+100:400,
  },
  gridList: {
    width:'100%',
    height:'100%',
    flexWrap: 'nowrap',
    backgroundColor:backgroundColor,
    overflow:'auto'
  },
  //////
  card: {
    maxWidth: 300,
    backgroundColor:backgroundColor,
    paddingBottom:20
  },
  name: {
    textDecoration: "none",
    color: textColor,
  },
  price: {
    color: textColor,
    fontWeight: "bold",
  },
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

function SimpleSelect(props) {
    const {label,options,defaultOptionValue,setOption} =props
    const handleChange = (event) => {
      setOption(event.target.value);
    };
  
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label" color='inherit' style={{color:textColor}}>{label}</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={defaultOptionValue}
            onChange={handleChange}
            label={label}
            color='inherit'
            style={{color:textColor}}
            autoWidth
          >
            {options.map((option, index) => (
              <MenuItem value={index}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

function PizzaCard({ name, price }) {
    const classes = useStyles();
    const sizeOptions = ["Nhỏ", "Vừa", "Lớn"];
    const crustOptions = ["Dày", "Giòn"];
    const [sizeOption, setSizeOption] = useState(0);
    const [crustOption, setCrustOption] = useState(0);
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="pizza image"
                height="280"
                image={pizzaImgUrl}
                />
            </CardActionArea>
            <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography
                gutterBottom
                variant="h6"
                component="h2"
                color='inherit'
                className={classes.name}
                >
                <NavLink to={`/pizzas/${name}`} className={classes.name}>
                    {name}
                </NavLink>
                {name}
                </Typography>
                <Typography gutterBottom className={classes.price}>
                {price},000 đ
                </Typography>
            </CardContent>
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

export default function PizzaList(props) {
    const {itemList}=props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span style={{display:'flex',backgroundColor:backgroundColor,flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:'5%',width:'40%',borderTopLeftRadius:20,borderTopRightRadius:20}} >
                <p style={{fontWeight: 'bold',color:textColor,fontSize:20}} >MÓN ĂN YÊU THÍCH</p>
            </span>
            <div style={{backgroundColor:backgroundColor,display:'flex',minHeight:80,paddingBottom:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',width:'100%'}} >
                <ButtonBase>
                    <p style={{fontWeight: 'bold',color:textColor,marginRight:20}} >Tất cả sản phẩm</p>
                </ButtonBase>
            </div>
            <div className={classes.listContainer}>
                <GridList className={classes.gridList} cols={3.8} cellHeight='auto'>
                    {itemList.map((tile) => (
                        <GridListTile style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <PizzaCard name={tile.name} price={tile.price} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
}