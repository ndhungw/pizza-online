import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Introduction from '../components/HomePage/Introduction'
import ComboList from '../components/HomePage/ComboList'

const images = [
    {
      url: 'https://cdn.tgdd.vn/Files/2020/04/21/1250680/cach-lam-banh-pizza-chay-bang-noi-chien-khong-dau-10.jpg',
      title: 'Pizza 1'
    },
    {
      url: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2017/07/999cf916d676bcea9e5646256b3e0198.jpg',
      title: 'Pizza 2'
    },
    {
      url: 'https://cdn-www.vinid.net/2020/04/4692c9e2-huong-dan-cach-lam-banh-pizza-tai-nha-khong-can-lo-nuong-1024x683.jpg',
      title: 'Pizza 3'
    },
];
const combos = [
    {
      img: 'https://i1.wp.com/www.mycashbackoffers.in/wp-content/uploads/2020/09/bogo-delivery.jpg?fit=751%2C500&ssl=1',
      title: 'Mua 1 tặng 1',
      duration:'Vô thời hạn'
    },
    {
      img: 'https://i.imgur.com/tEdj9Wy.jpg',
      title: 'Khuyến mãi Mastercard',
      duration:'Vô thời hạn'
    },
    {
      img: 'https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg',
      title: 'Khuyến mãi tuần đầu',
      duration:'Vô thời hạn'
    },
    {
      img: 'https://i.gadgets360cdn.com/large/Pizza-Hut-Friday_1547549321816.jpg',
      title: 'Combo Noel',
      duration:'Vô thời hạn'
    },
    {
      img: 'https://cdn.tgdd.vn/Files/2020/04/21/1250680/cach-lam-banh-pizza-chay-bang-noi-chien-khong-dau-10.jpg',
      title: 'Pizza 6',
      duration:'Vô thời hạn'
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(4),
        //paddingLeft: theme.spacing(4),
        //paddingRight: theme.spacing(4),
        flexDirection:'column'
    }
}));

const HomePage = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div style={{width:'100%',backgroundColor:'#111133',height:60}} />
                <Container maxWidth="xl" className={classes.container}>
                    <Introduction images={images}/>
                    <div style={{height:50}} />
                    <ComboList itemList={combos} />
                </Container>              
            </main>
        </div>
    );
}

export default HomePage;