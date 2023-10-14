import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../app/gameReducer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import AutorenewIcon from '@mui/icons-material/Autorenew';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Controls() {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const reset = () => {dispatch(resetGame()); handleClose();}

    return (
        <Box display="flex" justifyContent="center" marginTop={4}>
            <Button variant="outlined" endIcon={<AutorenewIcon />} onClick={handleClickOpen}>reset game</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you want to reset game ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This action cannot be restored.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={reset}>Reset</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Controls;