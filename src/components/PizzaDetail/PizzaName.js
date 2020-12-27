import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        flexDirection: 'column'
    },
    pizzaName:{
        fontWeight: 'bold',
        fontStyle: "italic",
        marginTop: "1%",
        marginBottom: "1%",
        alignSelf: 'center',
        width: '100%',
        overflowWrap: 'break-word'
    },
    horizontalLineStyle: {
        width: "40%",
        maxWidth: "40%",
        border: 'none',
        height: 5,
        backgroundColor: "black",
        alignSelf: 'center'
    },
    verticalLineStyle: {
        width: 5,
        border: 'none',
        height: 50,
        backgroundColor: "black",
        alignSelf: 'center'
    },
}));

const PizzaName = ({pizzaName}) => {
    const classes = useStyles();

    return(
        <Grid container item xs={12} justify='center' className={classes.parent}>
            <Typography color='textPrimary' align='center' variant="h5" className={classes.pizzaName}>
                {pizzaName? pizzaName : 'Tên bánh'}
            </Typography>
            <Divider className={classes.horizontalLineStyle}/>
            <Divider className={classes.verticalLineStyle}/>
        </Grid>
    );
}

export default PizzaName;