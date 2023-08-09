import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, TextField, Typography } from '@material-ui/core';

export default function ModalAddBox() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >

                <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 25, gap: 15, border: '1px solid rgba(176, 176, 176, 0.338)' }}>
                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>Add new District/Local Authority</Typography>
                </Grid>
                <CssBaseline />
                <DialogContent style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', gap: 10, marginTop: 20 }}>
                    <Typography variant='body2'>District/Local Authority</Typography>
                    <TextField id="outlined-basic" label="Example:Kirklees Council" variant="outlined" style={{ width: '100%', bordeRadius: 10, marginTop: 5 }} />
                </DialogContent>
                <DialogActions style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 20 }}>
                    <Button autoFocus onClick={handleClose} variant='contained' style={{ width: '30%', borderRadius: 10, color: 'white', backgroundColor: '#3949ab', }}>
                        Create
                    </Button>
                    <Button onClick={handleClose} color="black" autoFocus style={{ fontWeight: 'bold', marginTop: 20 }}>
                        Cancel
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
