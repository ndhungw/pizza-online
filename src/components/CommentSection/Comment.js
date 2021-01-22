import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import userAvatarUrl from '../../assets/img/userAvatar.png';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
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
        height: 4,
        backgroundColor: "black",
        alignSelf: 'center'
    },
    verticalLineStyle: {
        width: 4,
        border: 'none',
        height: 50,
        backgroundColor: "black",
        alignSelf: 'center'
    },
}));

const Comment = ({comment, ...props}) => {
    const classes = useStyles();

    return(
        <Grid container item xs={12} justify='left' className={classes.parent} {...props}>
            <Grid container item xs={1} justify="flex-start" alignItems="flex-start" >
                <img src={userAvatarUrl} style={{
                    width: '80%',
                }} alt="UserAvatar"/>
            </Grid>
            <Grid container item xs={8}>
                <Typography variant="body2" align="left" style={{
                    width: "100%",
                    fontWeight: "bold"
                }}>
                    {comment && comment.user && comment.user.Name ? comment.user.Name : "Tên người dùng"}
                </Typography>
                <Typography variant="body2" align="justify" style={{
                    width: "100%",
                    whiteSpace: 'pre-line'
                }}>
                    {comment && comment.commentText ? comment.commentText : "Nội dung bình luận"}
                </Typography>
            </Grid>
            <Grid container item xs={2} justify="flex-end" alignItems="flex-start">
                <Typography variant="body2" align="right" style={{
                    width: "100%",
                    fontWeight: "italic"
                }}>
                    {comment && comment.createdDate ? 
                    comment.createdDate.toLocaleString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    }) : "Ngày bình luận"}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Comment;