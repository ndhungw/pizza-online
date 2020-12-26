import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PageSectionName from '../components/PizzaDetail/PageSectionName';
import PizzaName from '../components/PizzaDetail/PizzaName';
import {PizzaDescription} from '../components/PizzaDetail/PizzaDescription';
import { PizzaIngredients } from '../components/PizzaDetail/PizzaIngredients';
import { PizzaTags } from '../components/PizzaDetail/PizzaTags';

import pizzaImgUrl from "../assets/img/pizzaImg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflow: 'visible',   
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    }, 
    middleColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start'
    }
}));

const pizzaTags = [{
    id: 1, tagName: 'Best-selling', tagColor: '#FFAF10'
},
{
    id: 2, tagName: 'Recommended', tagColor: '#00CC52'
},
{
    id: 3, tagName: 'Chef\'s pick', tagColor: 'pink'
},
{
    id: 4, tagName: 'HOT', tagColor: 'red'
}
];

const PizzaDetail = (props) => {
    const classes = useStyles();

    const PizzaImg_Id = "PizzaImage";

    return(
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content} >
                {/* use this if you use app bar <div className={classes.appBarSpacer} /> */}
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3} justify="center">
                        <Grid container item xs={12}>
                            <PageSectionName fontVariant="h4"/>  
                        </Grid>
                        {/* Under page title, there lies the  */}
                        <Grid container item xs={12} justify="center">
                            <PizzaName pizzaName="Pizza phô mai xúc xích Đức"/>
                        </Grid> 
                        {/* Under the title we divide it into 3 big columns */}

                        { /* This is the left column */}
                        <Grid container item xs={4} justify="center" alignContent="flex-start">
                            <PizzaDescription/>
                            <Grid item xs={12} style={{
                                height: 150,
                            }}>
                            </Grid>
                            <PizzaTags pizzaTags={pizzaTags}/>
                        </Grid> 

                        { /* This is the middle column */}
                        <Grid container item xs={4} justify="center" alignContent="flex-start" className={classes.middleColumn}>
                            <img id={PizzaImg_Id} src={pizzaImgUrl} alt="Hello, you found the easter egg" 
                                style={{
                                    width: "100%",
                                    position: 'relative'
                            }} />
                        </Grid>   
                        
                        {/* This is the right column */}
                        <Grid container item xs={4} justify="center" alignContent="flex-start">
                            <PizzaIngredients/>
                        </Grid>    

                    </Grid>
                </Container>              
            </main>
        </div>
    );
}

export default PizzaDetail;