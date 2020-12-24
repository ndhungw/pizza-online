import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import RightArrowIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: 500,
    width: '100%',
    flexDirection:'column',
    alignItems:'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  carouselContainer: {
    display: 'flex',
    minWidth: 500,
    width: '100%',
    flexDirection:'row',
    alignItems:'center'
  },
  dotContainer: {
    display: 'flex',
    height: 50,
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    position: 'relative',
    height: typeof window !== 'undefined'?window.innerHeight*3/5:450,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }
}));

export default function Introduction(props) {
    const {images}=props
    const classes = useStyles();
    const [selectedImage,setSelectedImage]=useState(0)

    return (
        <div className={classes.root}>
            <div className={classes.carouselContainer}>
                {images.map((image,index) => (
                    <>
                    {selectedImage==index?(
                        <ButtonBase
                        onClick={()=>{alert(image.title)}}
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        style={{width: '70%'}}>
                            <span
                                className={classes.imageSrc}
                                style={{
                                backgroundImage: `url(${image.url})`,
                                }}
                            />
                        </ButtonBase>
                    ):(
                        <span />
                    )}
                    </>
                ))}
                <span style={{width:'15%'}} />
                {images.map((image,index) => (
                    <>
                    {selectedImage==index-1 || (selectedImage==images.length-1 && index==0)?(
                        <ButtonBase
                        onClick={()=>{setSelectedImage(index)}}
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        style={{width: '15%'}}>
                            <span
                                className={classes.imageSrc}
                                style={{
                                backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <RightArrowIcon fontSize='large'/>
                            </span>
                        </ButtonBase>
                    ):(
                        <span />
                    )}
                    </>
                ))}
            </div>
            <div className={classes.dotContainer}>
                {images.map((image,index) => (
                    <>
                    {selectedImage==index?(
                        <span style={{width:10,height:10,marginInline:10,borderRadius:10,backgroundColor:'black'}} />
                    ):(
                        <ButtonBase onClick={()=>{setSelectedImage(index)}}>
                            <span style={{width:10,height:10,marginInline:10,borderRadius:10,backgroundColor:'grey'}} /> 
                        </ButtonBase>
                    )}
                    </>
                ))}
            </div>
        </div>
    );
}
