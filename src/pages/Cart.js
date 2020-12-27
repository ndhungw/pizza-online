import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PageSectionName from '../components/PizzaDetail/PageSectionName';
import CartTable from '../components/CartTable';

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

const Cart = (props) => {
    const classes = useStyles();

    return(
        <Container>
            <CartTable></CartTable>
        </Container>
    );
}

export default Cart;