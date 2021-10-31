import { makeStyles,Container, Typography } from "@material-ui/core";
import Home from '@material-ui/icons/Home'
import People from '@material-ui/icons/People'
import List from '@material-ui/icons/List'
import Camera from '@material-ui/icons/Camera'
import VideoLabel from '@material-ui/icons/VideoLabel'
import Apps from '@material-ui/icons/Apps'
import Collections from '@material-ui/icons/Collections'
import Shop from '@material-ui/icons/Shop'
import Settings from '@material-ui/icons/Settings'
// import Logout from '@material-ui/icons/Logout'
import ExitToApp from '@material-ui/icons/ExitToApp'


let useStyles=makeStyles((theme)=>({
    container:{
        position:"sticky",
        top:"0",
        width:"100%",
        height:"100vh",
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main ,
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"white",
            color:"black",
            border:"1px solid #F1EFF7"
        }
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.down("sm")]:{
        marginBottom:theme.spacing(3),
        color:"white"
    }
    },
    icon:{
        marginRight:theme.spacing(2)
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
}))

let Leftbar =()=>
{
    let classes = useStyles();
    return(
        <>
         <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <People className={classes.icon}/>
                <Typography className={classes.text}>Friend</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>List</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <VideoLabel className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections className={classes.icon}/>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Shop className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
         </Container>
        </>
    )
}
export default Leftbar;