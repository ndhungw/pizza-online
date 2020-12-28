import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from "@material-ui/core/CardMedia";

const backgroundColor='#C2002F'
const textColor='white'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width:'100%'
  },
  listContainer: {
    display: 'flex',
    overflow:'hidden',
    width:'100%',
    height:typeof window !== 'undefined'?(window.innerHeight*2/5)+100:400,
  },
  gridList: {
    width:'100%',
    height:'100%',
    flexWrap: 'nowrap',
    backgroundColor:backgroundColor,
    overflow:'auto'
  }
}));
function ComboItem(props){
    const {combo}=props
    return(
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
            <CardMedia component='img' image={combo.img} alt={combo.title} style={{width:'70%',height:'55%'}}/>
            <div style={{width:'70%',height:'15%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{fontWeight: 'bold',fontSize:16,marginRight:'20%',textAlign:'start',color:textColor}} >{combo.title}</p>
                <p style={{color:textColor,flexWrap:'wrap',fontStyle:'italic',opacity:0.7}} >{combo.duration}</p>
            </div>
            <div style={{width:'70%',height:'30%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <ButtonBase href="/sale">
                    <div style={{borderRadius:20,paddingVertical:10,paddingInline:20,backgroundColor:'#fed400'}}>
                        <p style={{fontWeight: 'bold',color:'black'}}>Thông tin khuyến mãi</p>
                    </div>
                </ButtonBase>
            </div>
        </div>
    )
}
export default function ComboList(props) {
    const {itemList}=props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span style={{display:'flex',backgroundColor:backgroundColor,flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:'5%',width:'40%',borderTopLeftRadius:20,borderTopRightRadius:20}} >
                <p style={{fontWeight: 'bold',color:textColor,fontSize:20}} >COMBO - KHUYẾN MÃI</p>
            </span>
            <div style={{backgroundColor:backgroundColor,display:'flex',minHeight:100,paddingBottom:30,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',width:'100%'}} >
                <ButtonBase  href="/sales">
                    <p style={{fontWeight: 'bold',color:textColor,marginRight:20}} >Tất cả khuyến mãi</p>
                </ButtonBase>
            </div>
            <div className={classes.listContainer}>
                <GridList className={classes.gridList} cols={3.3} cellHeight='auto'>
                    {itemList.map((tile) => (
                        <GridListTile style={{height:'100%'}}>
                            <ComboItem combo={tile} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
}

/*<img src={tile.img} alt={tile.title} style={{width:'30%',height:'80%'}}/>
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