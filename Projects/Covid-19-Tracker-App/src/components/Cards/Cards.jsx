import React from 'react';
import {Card, CardContent, Typography, Grid, CardMedia, CardActionArea} from '@material-ui/core';
import CountUp from 'react-countup';

import { makeStyles } from '@material-ui/core/styles';

//importing image
import infectedImage from '../../static/images/infected1.png';
import recoveredImage from '../../static/images/recovered.png';
import deathImage from '../../static/images/deaths.png';

// styling 
import styles from './Cards.module.css';
//importing class modeule for styling
import cx from 'classnames';


const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
    media: {
      height: '50%',
      width: '100%',
      paddingTop: '100%',
      paddingBottom: '10px'
    },
  });

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const classes = useStyles();
    console.log(confirmed);
    

    if (!confirmed) {
      return 'Loading...';
    }


    
    return(
        <div className = {styles.container}>
        <Grid container spacing ={3} justify ="center"> 
         <Grid item component = {Card} xs = {12} md ={3} className = {cx(styles.card, styles.infected)}> 
            
     
      <CardActionArea> 
            <CardMedia 
            
            className={classes.media}
            // component="img"
            image= {infectedImage}
            
            title="Infected"
                 />
            <CardContent>
                <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                <Typography variant ="h5">
                <CountUp 
                    start ={0}
                    end   = {confirmed.value}
                    duration = {2.5}
                    separator = ","
                />
                </Typography>
                <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant ="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
            </CardActionArea>
         </Grid>
           

            <Grid item component = {Card} xs = {12} md ={3} className = {cx(styles.card, styles.recovered)}>
            <CardActionArea> 
            <CardMedia 
            
            className={classes.media}
            // component="img"
            image= {recoveredImage}
            
            title="Recovered"
                 />
            <CardContent>
                <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                <Typography variant ="h5">
                 <CountUp 
                     start ={0}
                     end ={recovered.value}
                     duration = {2.5}
                     separator = ","
                 />
                </Typography>
                <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant ="body2">Number of Recovered cases from COVID-19</Typography>
            </CardContent>
            </CardActionArea>
            </Grid>


            <Grid item component = {Card} xs = {12} md ={3} className = {cx(styles.card, styles.deaths)}>

            <CardActionArea> 
            <CardMedia 
            
            className={classes.media}
            // component="img"
            image= {deathImage}
            
            title="Recovered"
                 />
            <CardContent>
                <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant ="h5">
                <CountUp 
                    start = {0}
                    end = {deaths.value}
                    duration = {2.5}
                    separator = ","
                />
                </Typography>
                <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant ="body2">Number of Death caused by COVID-19</Typography>
            </CardContent>
            </CardActionArea>
            </Grid>
        </Grid>

        </div>
    )
}

export default Info;