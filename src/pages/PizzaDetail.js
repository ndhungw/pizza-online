import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PageSectionName from '../components/PizzaDetail/PageSectionName';
import PizzaName from '../components/PizzaDetail/PizzaName';

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
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
    },  
    pageContent: {
        backgroundColor: 'red'
    }
}));

const PizzaDetail = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                {/* use this if you use app bar <div className={classes.appBarSpacer} /> */}
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3} justify="center" className={classes.pageContent}>
                        <Grid container item xs={12}>
                            <PageSectionName fontVariant="h4"/>  
                        </Grid>
                        {/* Under page title, there lies the  */}
                        <Grid container item xs={12} justify="center">
                            <PizzaName pizzaName="Pizza phô mai xúc xích Đức"/>
                        </Grid>                  
                    </Grid>
                </Container>              
            </main>
        </div>
    );
}

export default PizzaDetail;