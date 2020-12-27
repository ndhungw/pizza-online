import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import {useEffect} from 'react';

import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        flexDirection: 'column'
    },
    IngredientsTitle:{
        fontStyle: "italic",
        marginBottom: "1%",
        alignSelf: 'center',
        width: '100%',
        overflowWrap: 'break-word'
    },
    horizontalLineStyle: {
        width: "100%",
        maxWidth: "100%",
        border: 'none',
        height: 5,
        backgroundColor: "black",
        alignSelf: 'center',
    },
    Ingredients: {
        marginTop: 30,
        overflowWrap: 'break-word',
        textAlign: 'justify',
        overflowY: 'auto',
        maxHeight: 200
    },
}));

const PizzaIngredients_startId = "PizzaIngredients_StartingPoint";

export const PizzaIngredients = ({PizzaIngredients}) => {
    const classes = useStyles();

    //Line Ids
    const IngredientsBox_PizzaImg_Id1 = "line_fromIngredientsBox_toImage1";
    const IngredientsBox_PizzaImg_Id2 = "line_fromIngredientsBox_toImage2";
    const PizzaIngredients_Line_Canvas = "lineCanvas_pizzaIngredients";

    useEffect(() => {
        //Draw lines
            //First line
        const FirstLineDraw = () => {
            const IngredientsBox = $('#' + PizzaIngredients_startId);
            const IngredientsBox_PizzaImg_Line = $('#' + IngredientsBox_PizzaImg_Id1);
            const text_IngredientsBox = $("#text_IngredientsBox");

            IngredientsBox_PizzaImg_Line.attr('x1', IngredientsBox.width())
            .attr('y1', 0)
            .attr('x2', 0.2*IngredientsBox.width())
            .attr('y2', 0);

            text_IngredientsBox.width(0.8 * IngredientsBox.width());
        };
            //Second line
        const SecondLineDraw = () => {
            const IngredientsBox = $('#' + PizzaIngredients_startId);
            const IngredientsBox_PizzaImg_Line = $('#' + IngredientsBox_PizzaImg_Id2);
            const leftGutter = $("#leftGutter_IngredientsBox");

            IngredientsBox_PizzaImg_Line.attr('x1', 0.2*IngredientsBox.width() + 1)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', 75);

            leftGutter.width(0.2*IngredientsBox.width());
        };

        // Call them
        FirstLineDraw();
        SecondLineDraw();

        window.addEventListener('resize', (e) => {
            FirstLineDraw();
            SecondLineDraw();
        });
    }, []);

    return(
        <Grid container item xs={12} className={classes.parent} style={{
            flexDirection: 'row',
        }}>
            <Grid item xs={2}/>
            <Grid container item xs={10} justify="flex-end">
                <Typography color='textPrimary' align='center' variant="h6" className={classes.IngredientsTitle}>
                    Nguyên liệu
                </Typography>
            </Grid>
            <Grid id={PizzaIngredients_startId} container item xs={12} style={{
                position: 'relative',
            }}>
                <svg id={PizzaIngredients_Line_Canvas} style={{
                    position: 'absolute',
                    width: "100%",
                    zIndex: -100,
                }} overflow="visible">
                    <line id={IngredientsBox_PizzaImg_Id1} style={{
                        strokeWidth: 4,
                        stroke: "rgb(0,0,0)",
                    }}/>
                    <line id={IngredientsBox_PizzaImg_Id2} style={{
                        strokeWidth: 4,
                        stroke: "rgb(0,0,0)",
                    }}/>
                </svg>
            </Grid>
            <Grid container item xs={12} >
                <div id="leftGutter_IngredientsBox" style={{width: '15%'}}></div>
                <Typography id="text_IngredientsBox" color='textPrimary' align='center' variant="body1" className={classes.Ingredients}>
                    - Bột mì <br/>
                    - Men nở <br/>
                    - Dầu olive <br/>
                    - Mật ong <br/>
                    - Sốt cà chua <br/>
                    - Xúc xích <br/>
                    - Sốt Mayonnaise <br/>
                    - Tương ớt <br/>
                    - Gia vị
                </Typography>
            </Grid>
        </Grid>
    );
}

