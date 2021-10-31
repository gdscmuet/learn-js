import { Card, CardActionArea, CardActions, CardContent, CardMedia,Typography,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import image from './bg.jpg'

let useStyles=makeStyles((theme)=>({
    media:{
        height:250,
    },
    card:{
        marginBottom:theme.spacing(3)
    }
}))

let Feed=()=>
{
    let classes=useStyles();
    return(
        <>
         <Card className={classes.card}>
             <CardActionArea>
                 <CardMedia className={classes.media} image={image} title="My Post"/>
             </CardActionArea>
             <CardContent>
                 <Typography gutterBottom variant="h5">My First Post </Typography>
                 <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptates ex at adipisci voluptate, vitae earum quibusdam inventore accusamus quasi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptates ex at adipisci voluptate, vitae earum quibusdam inventore accusamus quasi.</Typography>
             </CardContent>
             <CardActions>
                 <Button size="small" color="primary">Share</Button>
                 <Button size="small" color="primary">Learn More</Button>
             </CardActions>
         </Card>
        </>
    )
}
export default Feed;