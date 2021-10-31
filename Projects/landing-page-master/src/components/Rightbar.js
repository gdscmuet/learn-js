import { makeStyles, Container, Typography, Avatar,ImageList,ImageListItem } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup'
let useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: "0"
    },
    text:{
        fontSize:16,
        fontWeight:500,
        marginBottom:theme.spacing(2)
    },
    avatar:{
        marginBottom:theme.spacing(3)
    }
}))

let Rightbar = () => {
    let classes = useStyles();
    return (
        <>
            <Container className={classes.container}>
                <Typography gutterBottom className={classes.text}>
                    Online Friends
                </Typography>
                <AvatarGroup max={4} gutterBottom className={classes.avatar}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" />
                    <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography gutterBottom className={classes.text}>  Gallery         </Typography>
                <ImageList  cols={3} rowHeight={100}>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                        <ImageListItem >
                            <img  src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format" alt="" />
                        </ImageListItem>
                    ))
                </ImageList>
            </Container>
        </>
    )
}
export default Rightbar;