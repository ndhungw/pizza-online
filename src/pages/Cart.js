import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PageSectionName from '../components/PizzaDetail/PageSectionName';
import CartTable from '../components/Cart/CartTable';
import { Button, ButtonBase, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    summary: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center",
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

const StyledSum = withStyles((theme) => ({
    root: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    // lineHeight: 42,
    color: '#000000',
  },
  })) (Typography);

const Cart = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <CartTable></CartTable>
            <div className={classes.summary}>
                <StyledSum style={{marginRight: 10}}>Tổng tiền: </StyledSum>
                <StyledSum>150000</StyledSum>
                <ButtonBase style={{marginLeft: 30}}>
                    <div style={{ borderRadius: 20, paddingVertical: 15, paddingInline: 40, backgroundColor: '#D2112D' }}>
                        <p style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>Thanh Toán</p>
                    </div>
                </ButtonBase>
            </div>

        </Container>
    );
}

export default Cart;