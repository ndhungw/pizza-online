import React from 'react';
import {useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {TextField, Button} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';

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

const mockComments = [{
    user: {
        id: 1,
        Name: "Nguyễn Văn Nguyên"
    },
    commentText: "Tôi cảm thấy rằng món ăn này có vẻ rất ngon chắc chắn tôi sẽ recommend món ăn này cho bạn bè của mình nhất định họ sẽ rất thích",
    createdDate: new Date(Date.UTC(2020,11,23)),
}, {
    user: {
        id: 2,
        Name: "Đào Thị Mộng Mơ"
    },
    commentText: "Hôm trước tôi có đặt hàng món này, có rất nhiều vấn đề tôi muốn đề cập ở đây:\n"
    +"- Giao hàng trễ , thức ăn tôi bị nguội \n"
    +"-  Món ăn không như được quảng cáo \n"
    +"Tôi  sẽ không giới thiệu món này cho bạn bè của mình \n",
    createdDate: new Date(Date.UTC(2020,11,24)),
}];

const mockUser = {
    id: 3,
    Name: "Test"
}

const CommentSection = () => {
    const classes = useStyles();

    const [currentComment, setCurrentComment] = useState("");
    const [comments, setComments] = useState(mockComments);

    const handlePostingComment = (e) => {
        const newComment = currentComment;
        if(newComment && typeof newComment === 'string' && newComment.length > 0){
            const newCommentsList = comments.slice();
            newCommentsList.push({
                user: mockUser,
                commentText: newComment,
                createdDate: new Date()
            });
            setComments(newCommentsList);
        }
    };

    return(
        <Grid container item xs={12} justify='center' className={classes.parent}>
            <Grid container item xs={12} justify="center">
                <Grid container item xs={9} style={{
                    padding: 10,
                }} justify="center">
                    <TextField variant='outlined' fullWidth multiline rows={5}
                    value={currentComment}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setCurrentComment(e.target.value);
                    }}/>
                </Grid>
                <Grid container item xs={3} style={{
                    padding: 10,
                    paddingLeft: 0,
                    alignItems: 'center'
                }} justify="center">
                    <Button style={{
                        backgroundColor: "#033A56",
                        border: "2px solid black",
                        color: "white",
                        borderRadius: 20,
                    }}
                    onClick={handlePostingComment}>
                        Đăng bình luận
                    </Button>
                </Grid>
            </Grid>

            <Grid container item xs={12} justify="center" style={{
                marginTop: 30,
                justifyContent: "flex-start",
                flexWrap: "wrap",
                overflowY: 'auto',
                maxHeight: 350
            }}>
                {comments.map((item, idx) => 
                <Comment key={"pizzaComment"+idx} comment={item} style={{
                    marginTop: idx > 0 ? 30 : 0,
                }}/>)}
            </Grid>
        </Grid>
    );
}

export default CommentSection;