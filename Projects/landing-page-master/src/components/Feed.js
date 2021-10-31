import { Container, makeStyles } from "@material-ui/core";
import Post from './Post'
let useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))

let Feed=()=>
{
    let classes = useStyles();
    return(
       <Container className={classes.container}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </Container>
    )
}
export default Feed;