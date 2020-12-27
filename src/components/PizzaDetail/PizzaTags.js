import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import {useEffect} from 'react';

import $ from 'jquery';
import RoundedCornerTag from '../RoundedCornerTag/RoundedCornerTag';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        width: '100%'
    },
    TagsTitle:{
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
    Tags: {
        border: "3px solid black",
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 30,
        padding: 10,
    },
}));

const PizzaTags_startId = "PizzaTags_StartingPoint";

export const PizzaTags = ({pizzaTags}) => {
    const classes = useStyles();

    //Line Ids
    const TagsBox_PizzaImg_Id1 = "line_fromTagsBox_toImage1";
    const TagsBox_PizzaImg_Id2 = "line_fromTagsBox_toImage2";
    const PizzaTags_Line_Canvas = "lineCanvas_pizzaTags";

    useEffect(() => {
        //Draw lines
            //First line
        const FirstLineDraw = () => {
            const TagsBox = $('#' + PizzaTags_startId);
            const TagsBox_PizzaImg_Line = $('#' + TagsBox_PizzaImg_Id1);

            TagsBox_PizzaImg_Line.attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0.8*TagsBox.width())
            .attr('y2', 0);
        };
            //Second line
        const SecondLineDraw = () => {
            const TagsBox = $('#' + PizzaTags_startId);
            const TagsBox_PizzaImg_Line = $('#' + TagsBox_PizzaImg_Id2);

            TagsBox_PizzaImg_Line.attr('x1', 0.8*TagsBox.width() - 1)
            .attr('y1', 0)
            .attr('x2', TagsBox.width())
            .attr('y2', -75);

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
            flexDirection: 'row'
        }}>
            <Grid container item xs={10} >
                <Typography color='textPrimary' align='center' variant="h6" className={classes.TagsTitle}>
                    Tags
                </Typography>
            </Grid>
            <Grid id={PizzaTags_startId} container item xs={12} style={{
                position: 'relative',
            }}>
                <svg id={PizzaTags_Line_Canvas} style={{
                    position: 'absolute',
                    width: "100%"
                }} overflow="visible">
                    <line id={TagsBox_PizzaImg_Id1} style={{
                        strokeWidth: 4,
                        stroke: "rgb(0,0,0)",
                    }}/>
                    <line id={TagsBox_PizzaImg_Id2} style={{
                        strokeWidth: 4,
                        stroke: "rgb(0,0,0)",
                    }}/>
                </svg>
            </Grid>
            <Grid container item xs={10} style={{
                marginTop: 30,
                justifyContent: "flex-start",
                flexWrap: "wrap"
            }}>
                {pizzaTags ? pizzaTags.map((item) => 
                    <RoundedCornerTag key={"tagForPizzaDetail"+item.id} tagName={item.tagName} tagColor={item.tagColor}
                    className={classes.Tags} />
                ) : null}
            </Grid>
        </Grid>
    );
}

