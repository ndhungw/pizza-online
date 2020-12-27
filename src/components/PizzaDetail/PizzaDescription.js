import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import {useEffect} from 'react';

import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
    },
    descriptionTitle:{
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
    description: {
        marginTop: 30,
        width: '95%',
        overflowWrap: 'break-word',
        textAlign: 'justify',
        overflowY: 'auto',
        maxHeight: 150
    },
}));

const PizzaDescription_startId = "PizzaDescription_StartingPoint";

export const PizzaDescription = ({pizzaDescription}) => {
    const classes = useStyles();

    //Line Ids
    const DescriptionBox_PizzaImg_Id1 = "line_fromDescriptionBox_toImage1";
    const DescriptionBox_PizzaImg_Id2 = "line_fromDescriptionBox_toImage2";
    const PizzaDescription_Line_Canvas = "lineCanvas_pizzaDescription";

    useEffect(() => {
        //Draw lines
            //First line
        const FirstLineDraw = () => {
            const DescriptionBox = $('#' + PizzaDescription_startId);
            const DescriptionBox_PizzaImg_Line = $('#' + DescriptionBox_PizzaImg_Id1);

            DescriptionBox_PizzaImg_Line.attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0.8*DescriptionBox.width())
            .attr('y2', 0);
        };
            //Second line
        const SecondLineDraw = () => {
            const DescriptionBox = $('#' + PizzaDescription_startId);
            const DescriptionBox_PizzaImg_Line = $('#' + DescriptionBox_PizzaImg_Id2);

            DescriptionBox_PizzaImg_Line.attr('x1', 0.8*DescriptionBox.width() - 1)
            .attr('y1', 0)
            .attr('x2', DescriptionBox.width())
            .attr('y2', 75);

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
            <Grid container item xs={10}>
                <Typography color='textPrimary' align='center' variant="h6" className={classes.descriptionTitle}>
                    Mô tả
                </Typography>
            </Grid>
            <Grid id={PizzaDescription_startId} container item xs={12} style={{
                position: 'relative',
            }}>
                <svg id={PizzaDescription_Line_Canvas} style={{
                    position: 'absolute',
                    width: "100%",
                }} overflow="visible">
                    <line id={DescriptionBox_PizzaImg_Id1} style={{
                        strokeWidth: 5,
                        stroke: "rgb(0,0,0)",
                    }}/>
                    <line id={DescriptionBox_PizzaImg_Id2} style={{
                        strokeWidth: 5,
                        stroke: "rgb(0,0,0)",
                    }}/>
                </svg>
            </Grid>
            <Grid container item xs={10} style={{
                justifyContent: "flex-start",
            }}>
                <Typography color='textPrimary' align='center' variant="body1" className={classes.description}>
                    Một chiếc bánh pizza đơn giản, dễ dàng với hương vị phô mai béo ngậy, thơm lừng kèm theo xúc xích ngon ngon sẽ là món ăn vặt hấp dẫn khi tụ tập bạn bè đấy. Nhanh tay mua ngay pizza xúc xích phô mai giòn nóng, hấp dẫn này nhé, đảm bảo khó lòng mà cưỡng lại được! <br/>

                    Một chiếc bánh pizza đơn giản, dễ dàng với hương vị phô mai béo ngậy, thơm lừng kèm theo xúc xích ngon ngon sẽ là món ăn vặt hấp dẫn khi tụ tập bạn bè đấy. Nhanh tay mua ngay pizza xúc xích phô mai giòn nóng, hấp dẫn này nhé, đảm bảo khó lòng mà cưỡng lại được!
                </Typography>
            </Grid>
        </Grid>
    );
}

