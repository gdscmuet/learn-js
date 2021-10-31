import { useState } from "react";
import * as React from 'react';
import AddCircle from '@material-ui/icons/AddCircle'
import {
    Tooltip,
    IconButton,
    makeStyles,
    Modal,
    Container,
    TextField,
    MenuItem,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


let useStyle = makeStyles((theme) => ({
    icon: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        inset: "0",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        }
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}))

// material UI Built in Function and its mandatory to write it for the snack bar
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
let Add = () => {
    let classes = useStyle();
    let [open, setOpen] = useState(false);
    let [openAlert, setOpenAlert] = useState(false);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Add" onClick={() => setOpen(true)}>
                <IconButton color="primary" className={classes.icon}>
                    <AddCircle fontSize="large" />
                </IconButton>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" variant="standard" style={{ width: "100%" }} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Tell Your Story"
                                variant="outlined"
                                style={{ width: "100%" }} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Visibility" value="public">
                                <MenuItem value="public">public</MenuItem>
                                <MenuItem value="private">private</MenuItem>
                                <MenuItem value="unlisted">unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can Comment ?</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="controlled-radio-buttons-group"

                            >
                                <FormControlLabel value="Everbody" control={<Radio />} label="Everbody" />
                                <FormControlLabel value="MyFriends" control={<Radio />} label="MyFriends" />
                                <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<Radio />}
                                    label="Custom(Premium)"
                                />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={() => setOpenAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{  vertical: 'bottom', horizontal: 'left'}}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}
export default Add;