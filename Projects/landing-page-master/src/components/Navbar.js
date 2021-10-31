import {
    AppBar,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
    alpha,
    Badge,
    Avatar,

} from "@material-ui/core";
import { useState } from "react";
import Search from '@material-ui/icons/Search'
import Mail from '@material-ui/icons/Mail'
import Notifications from '@material-ui/icons/Notifications'
import Cancel from '@material-ui/icons/Cancel'




let useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    // will display AJ Traders if screen size > small screen size
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    //    will not  display AJ Traders if screen size > small scren size
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    search_input: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            display: (props)=> (props.open ? "flex":"none") ,
            width:"70%"
        }
    },
    input: {
        marginLeft: theme.spacing(2),
        width:"80%",
        color:'white'
    },
    cancel:{
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    search_btn:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    icons:{
        alignItems:"center",
        display: (props)=> (props.open ? "none":"flex")
    },
    badge:{
        marginRight:theme.spacing(2)
    }
}))



let Navbar = () => {
    let [open,setOpen]=useState(false);
    let classes = useStyles({open});
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>AJ Traders</Typography>
                <Typography variant="h6" className={classes.logoSm}>AJ</Typography>
                <div className={classes.search_input}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel  className={classes.cancel} onClick={()=> setOpen(false)}/>
                </div>
                <div className={classes.icons}>
                    <Search className={classes.search_btn} onClick={()=>setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail  />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notifications  />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="mypic.jfif" />
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;