import React from 'react';
import { useState } from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Select, MenuItem, IconButton} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import IncrementDecrementBox from '../IncrementDecrementBox/IncrementDecrementBox';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const ActionsOnPizza = () => {
    const classes = useStyles();

    const sizeOptions = ["Nhỏ", "Vừa", "Lớn"];
    const crustOptions = ["Dày", "Giòn"];
    const [sizeOption, setSizeOption] = useState(0);
    const [crustOption, setCrustOption] = useState(0);

    const handleSizeChange = (event) => {
        setSizeOption(event.target.value);
    };

    const handleCrustChange = (event) => {
        setCrustOption(event.target.value);
    };

    return(
        <Grid container item xs={12} justify='center' className={classes.parent}>
            {/* 2 combo boxes here */}
            <Grid container item xs={12} md={6} style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                {/* Choose pizza size */}
                <Grid container item xs={12} sm={6} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Grid container item xs={12} sm={3} justify="flex-start">
                        <Typography color='textPrimary' align="left" variant="h6" style={{
                            fontWeight: "bold"
                        }}>
                            Kích cỡ:
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={9} justify="center">
                        <Select variant="standard" value={sizeOption}
                        onChange={(e) => handleSizeChange(e)} style={{
                            width: '70%'
                        }} >
                            {sizeOptions.map((val, idx) =>
                                <MenuItem key={"pizzaSizeOption" + idx} value={idx}>{val}</MenuItem>
                            )}
                        </Select>
                    </Grid>
                </Grid>  
                {/* Choose pizza crust */}
                <Grid container item xs={12} sm={6} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Grid container item xs={12} sm={3} justify="flex-start">
                        <Typography color='textPrimary' align="left" variant="h6" style={{
                            fontWeight: "bold"
                        }}>
                            Đế bánh:
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={9} justify="center">
                        <Select value={crustOption}
                        onChange={(e) => handleCrustChange(e)} variant="standard" style={{
                            width: '70%'
                        }}>
                            {crustOptions.map((val, idx) =>
                                <MenuItem key={"pizzaCrustOption" + idx} value={idx}>{val}</MenuItem>
                            )}
                        </Select>
                    </Grid>
                </Grid>                     
            </Grid>

             {/* cart and box here */}
            <Grid container item xs={12} md={6} style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                {/* Choose pizza amount */}
                <Grid container item xs={12} sm={10} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Grid container item xs={9} sm={3} justify="flex-start">
                        <Typography color='textPrimary' align="left" variant="h6" style={{
                            fontWeight: "bold",
                            justifySelf: 'flex-start'
                        }}>
                            Số lượng:
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={9} justify="center">
                        <div style={{
                            width: '70%',
                            justifySelf: 'flex-end'
                        }}>
                            <IncrementDecrementBox />
                        </div>
                    </Grid>
                </Grid>

                <Grid container item xs={12} sm={2} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', 
                    alignItems: 'flex-end',
                }}>
                    <IconButton width={24} height={24}>
                        <svg width={24} height={24} viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.4799 100C45.0087 100 50.3013 94.7076 50.3013 88.1788C50.3013 81.65 45.0087 76.3574 38.4799 76.3574C31.9512 76.3574 26.6586 81.65 26.6586 88.1788C26.6586 94.7076 31.9512 100 38.4799 100Z" fill="black"/>
                            <path d="M72.9787 76.3574C66.4501 76.3574 61.1573 81.6501 61.1573 88.1788C61.1573 94.7074 66.4501 100 72.9787 100C79.5074 100 84.8001 94.7074 84.8001 88.1788C84.8001 81.6501 79.5074 76.3574 72.9787 76.3574Z" fill="black"/>
                            <path d="M93.1235 64.2941H31.4834L30.2772 57.2978H80.9402C82.4306 57.3023 83.7714 56.3924 84.3177 55.0059L96.3804 24.6081C97.1133 22.7488 96.1999 20.6472 94.3405 19.9145C93.9146 19.7465 93.4606 19.661 93.0028 19.6624H24.0046L21.1096 3.01601C20.8123 1.25586 19.2757 -0.0246144 17.4908 0.000359034H3.61879C1.62021 0.000359034 0 1.62057 0 3.61915C0 5.61772 1.62021 7.23793 3.61879 7.23793H14.4751L24.849 68.516C25.1463 70.2762 26.6829 71.5567 28.4678 71.5317H93.1235C95.122 71.5317 96.7422 69.9115 96.7422 67.9129C96.7422 65.9143 95.122 64.2941 93.1235 64.2941Z" fill="black"/>
                        </svg>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ActionsOnPizza;