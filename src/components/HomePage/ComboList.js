import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const backgroundColor='#C2002F'
const backgroundColorT = "#660000";
const textColor='white'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%'
  }, 
  listTitleContainer: {
    display: 'flex', 
    backgroundColor: backgroundColorT, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginLeft: '5%', 
    width: '40%', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20
  },
  listContainer: {
    display: 'flex', 
    overflow: 'hidden', 
    width: '100%', 
    height: typeof window !== 'undefined'?(window.innerHeight*2/5): 400
  }, 
  gridList: {
    width: '100%', 
    height: '100%', 
    flexWrap: 'nowrap', 
    overflow: 'auto',
    paddingBottom: 10,
    backgroundColor: backgroundColorT
  }, 
  linkEffect: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 'bold',
    marginRight:20,
    fontSize: 14,

    transition: theme.transitions.create(["color", "transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      color: "#f3d438",
    },
    "&.active": {
      color: "#f3d438",
    }
  },
  comboItemContainer: {
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: backgroundColor, 
    borderRadius: "5px", 
    spacing: 20,
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
  comboItemTextContainer: {
    width: '70%', 
    height: '30%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  comboItemTitle: {
    fontWeight: 'bold', 
    fontSize: 16, 
    marginRight: '20%', 
    textAlign: 'start', 
    color: textColor
  },
  comboItemDuration: {
    color: textColor, 
    flexWrap: 'wrap', 
    fontStyle: 'italic', 
    opacity: 0.7
  }
}));
function ComboItem(props){
    const {combo}=props
    const classes = useStyles();
    return(
        <ButtonBase href="/sales" className={classes.comboItemContainer}>
            <CardMedia component='img' image={combo.img} alt={combo.title} style={{width: '70%', height: '70%', marginTop: "20px"}}/>
            <div className={classes.comboItemTextContainer}>
                <p className={classes.comboItemTitle}>{combo.title}</p>
                <p className={classes.comboItemDuration}>{combo.duration}</p>
            </div>
        </ButtonBase>
    )
}
export default function ComboList(props) {
    const {itemList}=props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span className={classes.listTitleContainer}>
                <p style={{fontWeight: 'bold', color: textColor, fontSize: 20}} >COMBO - KHUYẾN MÃI</p>
            </span>
            <div 
                style={{
                    backgroundColor: backgroundColorT, 
                    display: 'flex', 
                    height: 80, 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'flex-end', 
                    width: '100%', 
                    borderTopLeftRadius: 20, 
                    borderTopRightRadius: 20}} 
                >
                <ButtonBase  href="/sales">
                    <Typography color="inherit" className={classes.linkEffect}>Tất cả khuyến mãi</Typography>
                </ButtonBase>
            </div>
            <div className={classes.listContainer}>
                <div style={{height:'94%',width:2,backgroundColor:backgroundColorT}} />
                <GridList className={classes.gridList} cols={3.2} cellHeight='auto'>
                    {itemList.map((tile) => (
                        <GridListTile style={{
                            height: "100%", 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "center"
                            }}>
                            <ComboItem combo={tile} />
                        </GridListTile>
                    ))}
                </GridList>
                <div style={{height:'94%',width:2,backgroundColor:backgroundColorT}} />
            </div>
        </div>
    );
}

/*<img src={tile.img} alt={tile.title} style={{width: '30%', height: '80%'}}/>
                            <GridListTileBar
                            title={tile.title}
                            classes={{
                                title: classes.title, 
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />*/