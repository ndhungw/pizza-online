import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InteractiveList from "../components/List/InteractiveList";
import { Card, CardContent, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  form: {
    flex: 1, // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
    width: "60%",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    width: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      opacity: 0.7,
    },
    "&.active": {
      opacity: 1,
    },
  },
  titleContainer: {
    // marginLeft: "10%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    marginBottom: 10
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    fontStyle: "Roboto",
  },
  attributeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    fontStyle: "Roboto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    paddingRight: 30,
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    height: 100,
    justifyContent: "space-around",
    flexDirection: "row",
    // marginLeft: "10%",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  },
  rowInfo: {},
  confirmInfo: {
    display: "flex",
    flexDirection: "column",
  },
  bill: {
    margin: theme.spacing(2, 0),
  },
  confirmButton: {
    fontWeight: "bold",
    backgroundColor: "#D2112D",
    color: "white",

    transition: theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      backgroundColor: "#ffdf3c",
    },
  },
  cancelButton: {
    fontWeight: "bold",
  },

  paymentRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: "100%",
    marginBottom: 40,
  },
}));
// <Container component="main" maxWidth="xs">
export default function Payment() {
  let history = useHistory();
  const classes = useStyles();

  // dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = () => {
    setOpen(false);
    history.push("/cart");
  };

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <div className={classes.titleContainer}>
          <Typography className={classes.titleText} component="h1" variant="h4">
            Đơn thanh toán
          </Typography>
        </div>
        <form className={classes.form} >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {/* <div style={{ height: 20 }}></div> */}
            <div
              className={classes.paymentRow}
            >
              <div style={{ width: "100%" }}>
                <TextField
                  style={{ backgroundColor: "#E7E7E7" }}
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="Người đặt hàng"
                  size="small"
                  defaultValue="Nguyễn Văn An"
                  required
                />
              </div>
            </div>
            {/* <div style={{ height: 40 }}></div> */}
            <div
              className={classes.paymentRow}
            >

              <div style={{ width: "100%" }}>
                <TextField
                  style={{ backgroundColor: "#E7E7E7" }}
                  name="phone"
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Số điện thoại"
                  size="small"
                  defaultValue="0123456789"
                  required
                />
              </div>
            </div>
            {/* <div style={{ height: 40 }}></div> */}
            <div
              className={classes.paymentRow}
            >

              <div style={{ width: "100%" }}>
                <TextField
                  style={{ backgroundColor: "#E7E7E7" }}
                  name="receiver"
                  variant="outlined"
                  fullWidth
                  id="receiver"
                  label="Người nhận hàng"
                  size="small"
                  defaultValue="Võ Thùy Linh"
                  required
                />
              </div>
            </div>
            {/* <div style={{ height: 40 }}></div> */}
            <div
              className={classes.paymentRow}
            >

              <div style={{ width: "100%" }}>
                <TextField
                  style={{ backgroundColor: "#E7E7E7" }}
                  name="address"
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Địa chỉ nhận hàng"
                  size="small"
                  defaultValue="12/34 Nguyễn Tri Phương, phường 5, quận 5, tp.HCM"
                  required

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ButtonBase>
                          <RoomIcon style={{ color: "#005500", }} />
                        </ButtonBase>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            {/* <div style={{ height: 40 }}></div> */}
            <div
              className={classes.paymentRow}
            >
              <div style={{ width: "100%" }}>
                <TextField
                  style={{ backgroundColor: "#E7E7E7" }}
                  name="address"
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Ghi chú"
                  size="small"
                  defaultValue="Chạy tới hẻm 12 quẹo trái đi tới cuối đường"
                />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              {/* <ButtonBase
                className={classes.button}
                style={{ backgroundColor: "#D2112D" }}
                onClick={handleClickOpen}
              >
                <Typography className={classes.buttonText} color="inherit">
                  XÁC NHẬN ĐẶT HÀNG
                </Typography>
              </ButtonBase> */}
              <ButtonBase onClick={handleClickOpen}>
                <div
                  style={{
                    borderRadius: 20,
                    paddingVertical: 15,
                    paddingInline: 40,
                    backgroundColor: "#D2112D",
                  }}
                >
                  <p className={classes.buttonText}>
                    XÁC NHẬN ĐẶT HÀNG
            </p>
                </div>
              </ButtonBase>
            </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-pay"
            aria-describedby="alert-dialog-pay"
          >
            <DialogTitle id="alert-dialog-pay">
              {"Xác nhận đặt hàng?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {
                  "Bạn vui lòng kiểm tra lại thông tin đặt hàng trước khi xác nhận!"
                }
              </DialogContentText>
              <div className={classes.confirmInfo}>
                <div className={classes.rowInfo}>
                  <Typography variant="caption">{"Người nhận: "}</Typography>
                  <Typography variant="body">{"Võ Thùy Linh"}</Typography>
                </div>
                <div className={classes.rowInfo}>
                  <Typography variant="caption">{"Địa chỉ nhận: "}</Typography>
                  <Typography variant="body">
                    {"12/34 Nguyễn Tri Phương, phường 5, quận 5, tp.HCM"}
                  </Typography>
                </div>
                <div className={classes.rowInfo}>
                  <Typography variant="caption">
                    {"SĐT người nhận: "}
                  </Typography>
                  <Typography variant="body">{"012 345 6780"}</Typography>
                </div>
              </div>
              <Card className={classes.bill}>
                <CardContent>
                  <InteractiveList></InteractiveList>
                </CardContent>
              </Card>
              <Typography variant="h6">
                {"Số tiền phải trả: 470.000đ"}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                className={classes.cancelButton}
                variant="contained"
              >
                {"Thay đôi thông tin"}
              </Button>
              <Button
                onClick={handleAccept}
                className={classes.confirmButton}
                variant="contained"
                autoFocus
              >
                {"Xác nhận"}
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>
  );
}
