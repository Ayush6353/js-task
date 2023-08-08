import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';


export default function ModalBox() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rows = [
        { name: "ayush", calories: 12, fat: 12, carbs: 15, protein: 45 },
        { name: "ayush", calories: 12, fat: 12, carbs: 15, protein: 45 },
        { name: "Open responsive dialog", calories: 12, fat: 12, carbs: 15, protein: 45 },
        { name: "ayush", calories: 12, fat: 12, carbs: 15, protein: 45 },
        { name: "ayush", calories: 12, fat: 12, carbs: 15, protein: 45 },
    ];



    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 25, gap: 15, width: 500 }}>

                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>Default List</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" style={{ border: '1px solid rgb(223, 219, 219)' }}>
                            <TableRow>
                                <TableCell align="left" style={{ border: '1px solid black' }} colSpan={4}>
                                    Details
                                </TableCell>
                            </TableRow>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                        <Button variant='outlined' color="primary" style={{ fontWeight: 'bold', borderRadius: 10, height: 25 }}>Add New</Button>
                    </Grid>

                    <DialogActions style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Button autoFocus onClick={handleClose} variant='contained' style={{ width: '30%', borderRadius: 10, color: 'white', backgroundColor: '#3949ab', }}>
                            Save
                        </Button>
                        <Button onClick={handleClose} color="black" autoFocus style={{ fontWeight: 'bold' }}>
                            Cancel
                        </Button>
                    </DialogActions>

                </Grid>

            </Dialog>

        </div>
    );
}
