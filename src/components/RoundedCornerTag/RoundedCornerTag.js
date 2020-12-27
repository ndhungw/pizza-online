import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Grid, Button} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    parent: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    tagName:{
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: "1%",
        marginBottom: "1%",
        alignSelf: 'center',
        width: '100%',
        overflowWrap: 'break-word'
    },
}));

const RoundedCornerTag = ({tagName, tagColor,...props}) => {
    const classes = useStyles();

    return(
        <Button {...props} style={{
            backgroundColor: tagColor ? tagColor : 'white',
            textTransform: 'none'
        }}>
            <Grid container item xs={12} justify='center' className={classes.parent}>
                <Typography color='textPrimary' align='center' variant="subtitle2" className={classes.tagName}>
                    {tagName? tagName : 'Tên tag'}
                </Typography>
            </Grid>
        </Button>
    );
}

export default RoundedCornerTag;