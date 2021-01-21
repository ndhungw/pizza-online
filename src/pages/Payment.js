import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1
    },
    paper: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    form: {
        flex: 1, // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        width:'60%'
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        width: '30%',
        borderRadius: 20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        transition: theme.transitions.create(["opacity", "transform"], {
            duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
            opacity: 0.7,
        },
        "&.active": {
            opacity: 1,
        }
    },
    titleContainer: {
        marginLeft: '10%',
        flex:1,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width:'50%'
    },
    titleText: {
        fontSize:30,
        fontWeight: 'bold',
        color: '#000',
        fontStyle: 'Roboto'
    },
    attributeText: {
        fontSize:16,
        fontWeight: 'bold',
        color: '#000',
        fontStyle: 'Roboto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        paddingRight: 30
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft: '10%',
    },
    buttonText: {
        color: '#E7E7E7',
        fontSize: 18,
        fontStyle: 'Roboto'
    }
}));
// <Container component="main" maxWidth="xs">
export default function Payment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <div className={classes.titleContainer}>
            <Typography className={classes.titleText} component="h1" variant="h4">
                Đơn thanh toán
            </Typography>
        </div>
        <form className={classes.form} noValidate>
            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                <div style={{height:20}}></div>
                <div style={{display:'flex',flexDirection:'row', flex: 1,width: '100%'}}>
                    <div style={{height: 40, width: '20%',}}>
                        <Typography className={classes.attributeText} component="h1" variant="h6">
                            Người đặt hàng
                        </Typography>
                    </div>
                    <div style={{width: '80%'}}>
                        <TextField
                            style={{backgroundColor: '#E7E7E7'}}
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="Người đặt hàng"
                            size="small"
                            placeholder = "Nguyễn Văn An"
                        />
                    </div>
                </div>
                <div style={{height:40}}></div>
                <div style={{display:'flex',flexDirection:'row', flex: 1,width: '100%'}}>
                    <div style={{height: 40, width: '20%',}}>
                        <Typography className={classes.attributeText} component="h1" variant="h6">
                            Số điện thoại
                        </Typography>
                    </div>
                    <div style={{width: '80%'}}>
                        <TextField
                            style={{backgroundColor: '#E7E7E7'}}
                            name="phone"
                            variant="outlined"
                            fullWidth
                            id="phone"
                            label="Số điện thoại"
                            size="small"
                            placeholder="0123456789"
                        />
                    </div>
                </div>
                <div style={{height:40}}></div>
                <div style={{display:'flex',flexDirection:'row', flex: 1,width: '100%'}}>
                    <div style={{height: 40, width: '20%',}}>
                        <Typography className={classes.attributeText} component="h1" variant="h6">
                            Người nhận hàng
                        </Typography>
                    </div>
                    <div style={{width: '80%'}}>
                        <TextField
                            style={{backgroundColor: '#E7E7E7'}}
                            name="receiver"
                            variant="outlined"
                            fullWidth
                            id="receiver"
                            label="Người nhận hàng"
                            size="small"
                            placeholder="Võ Thị Vi"
                        />
                    </div>
                </div>
                <div style={{height:40}}></div>
                <div style={{display:'flex',flexDirection:'row', flex: 1,width: '100%'}}>
                    <div style={{height: 40, width: '20%',}}>
                        <Typography className={classes.attributeText} component="h1" variant="h6">
                            Địa chỉ nhận hàng
                        </Typography>
                    </div>
                    <div style={{width: '80%'}}>
                        <TextField
                            style={{backgroundColor: '#E7E7E7'}}
                            name="address"
                            variant="outlined"
                            fullWidth
                            id="address"
                            label="Địa chỉ nhận hàng"
                            size="small"
                            placeholder="117 Nghĩa Thục, phường 5, quận 5, TP.Hồ Chí Minh"
                        />
                    </div>
                </div>
                <div style={{height:40}}></div>
                <div style={{display:'flex',flexDirection:'row', flex: 1,width: '100%'}}>
                    <div style={{height: 40, width: '20%',}}>
                        <Typography className={classes.attributeText} component="h1" variant="h6">
                            Ghi chú
                        </Typography>
                    </div>
                    <div style={{width: '80%'}}>
                        <TextField
                            multiline = {true}
                            style={{backgroundColor: '#E7E7E7'}}
                            size='medium'
                            name="note"
                            variant="outlined"
                            fullWidth
                            id="note"
                            label=""
                            value={`\n\n\n\n\n`}
                        />
                    </div>
                </div>
                <div style={{height:20}}></div>
                <div className={classes.buttonContainer}>
                    <ButtonBase
                        className={classes.button}
                        style={{backgroundColor:'#033A56'}}
                    >
                        <Typography className={classes.buttonText} color="inherit">Huỷ đơn đặt hàng</Typography>
                    </ButtonBase>
                    <ButtonBase
                        className={classes.button}
                        style={{backgroundColor:'#D2112D'}}
                    >
                        <Typography className={classes.buttonText} color="inherit">Xác nhận đặt hàng</Typography>
                    </ButtonBase>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
}
