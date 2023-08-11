import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { Add, AddRounded } from '@mui/icons-material';
import { padding } from '@mui/system';
import { DialogContentText, Rating, TextField } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';



const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "black",
        }
    }
})
export default function ChangeSubscription() {
    const [formValues, setFormValues] = useState([]);
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const initialValues = {
        name: '',
        rating: "",
        file: '',
        color:'',
    };

    const { values, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            setFormValues([...formValues, values])
            console.log("🚀 ~ file: ChangeSubscription.jsx:37 ~ ChangeSubscription ~ values:", values)
            action.resetForm();
        }
    })


    return (
        <React.Fragment>

            <div style={{ height: '100vh', backgroundColor: '' }}>

                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title" style={{ display: 'flex', justifyContent: 'center' }}>
                        {"Enter your Details"}
                    </DialogTitle>
                    <DialogContent>
                        <Formik>
                            <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 30, padding: 20 }}>
                                <TextField id="file" name='file' placeholder='file' type='url' label="File" value={values.file} variant="outlined" onBlur={handleBlur} onChange={handleChange} color='success' focused />
                                <TextField id="name" name='name' placeholder='name' type='text' value={values.name} label="Name" variant="filled" onBlur={handleBlur} onChange={handleChange} color='success' focused />
                                <TextField id="color" name='color' placeholder='color' type='color' value={values.color} label="color" variant="outlined" onBlur={handleBlur} onChange={handleChange} color='success' focused />
                                <Rating
                                    id='rating'
                                    name="rating"
                                    value={values.rating}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Button autoFocus onClick={handleClose}  >
                                    Disagree
                                </Button>
                                <Button onClick={handleClose} type='submit' style={{ backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)', }}>
                                    Agree
                                </Button>
                            </Form>
                        </Formik>
                    </DialogContent>
                </Dialog>

                <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 40, }}>
                    <Grid >

                        {/* ======================== container 1 ================================= */}

                        <Container style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '5vh', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                            <Typography style={{ fontFamily: 'cursive' }}>{'Billing ->'}</Typography>
                            <Typography variant='h7' style={{ marginLeft: 5, fontWeight: 'bold', color: 'rgb(19, 200, 109)' }}>{'Change Subscription Type'}</Typography>
                        </Container>

                        {/* ======================== container 2 ================================= */}

                        <Container fixed style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', height: 'auto', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)' }}>
                            <div style={{ height: '70%', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 30, padding: 10 }}>
                                <Grid container lg={12} spacing={5} >
                                    {/* ================= Box 1 ===================== */}

                                    <Grid item xs={12} lg={4} md={4} sm={6} >

                                        <Container className={classes.root} style={{ backgroundColor: 'white', height: '100%', width: '30vh', padding: 20, border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>
                                            <Container className={classes.root} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 240, width: '25vh', border: '2px dashed rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>
                                                <Button onClick={handleClickOpen}>
                                                    <Add sx={{ backgroundColor: 'rgba(176, 176, 176, 0.338)', color: 'white', borderRadius: 20, fontSize: 35 }} />
                                                </Button>
                                            </Container>
                                        </Container>
                                    </Grid>

                                    {/* ================= Box 2 ===================== */}

                                    <Grid item xs={12} lg={4} md={4} sm={6}>
                                        <Container style={{ display: 'flex', flexDirection: 'column', gap: 17, backgroundColor: 'white', height: '100%', width: '30vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 12, marginBottom: 5 }}>
                                                <img src={require('./img/png.png')} style={{ height: 30, width: 30 }}></img>
                                            </Grid>

                                            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Typography variant='h6' style={{ fontWeight: 'bold', marginBottom: 3 }}>Your Subscription</Typography>
                                                <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Lorem ipsum dolor sit amet,conse ctetur adipiscing</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10, marginBottom: 10 }}>
                                                <Typography variant='h7' style={{ fontWeight: 'bold' }}>$32/month</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                                                <Button variant='outlined' style={{ width: '100%', height: '100%', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)', borderRadius: 10 }}>Current Subscription</Button>
                                            </Grid>

                                        </Container>
                                    </Grid>

                                    {/* ================= Box 3 ===================== */}

                                    <Grid item xs={12} lg={4} md={4} sm={6}>
                                        <Container style={{ display: 'flex', flexDirection: 'column', gap: 13, backgroundColor: 'white', height: '100%', width: '30vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 12 }}>
                                                <img src={require('./img/png.png')} style={{ height: 30, width: 30 }}></img>
                                            </Grid>

                                            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Typography variant='h6' style={{ fontWeight: 'bold', marginBottom: 3 }}>Advanced</Typography>
                                                <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Lorem ipsum dolor sit amet,conse ctetur adipiscing</Typography>
                                                <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Features include Lorem ipsum dolor si</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }}>
                                                <Typography variant='h7' style={{ fontWeight: 'bold' }}>$42/month</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                                                <Button variant='contained' style={{ width: '100%', height: '100%', backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)', borderRadius: 10 }}>Select</Button>
                                            </Grid>

                                        </Container>
                                    </Grid>


                                </Grid>
                            </div>
                        </Container>

                        {/* ======================== container 3 ================================= */}

                        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'white', height: '100%', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} >
                            <Grid container lg={12} spacing={5} >
                                {formValues.map((val) => (
                                    <Grid item xs={12} lg={4} md={4} sm={6} key={val.name}>
                                        <Container style={{ display: 'flex', flexDirection: 'column', gap: 17, backgroundColor: 'white', height: '100%', width: '30vh', border: `1px solid ${val.color}`, borderRadius: 20 }}>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 12, marginBottom: 5 }}>
                                                <img
                                                    src={`${val.file}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${val.file}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    style={{ height: 70, width: 70,borderRadius:40 }}></img>
                                            </Grid>
                                            <Rating name="read-only" value={val.rating} readOnly />
                                            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Typography variant='h6' style={{ fontWeight: 'bold', marginBottom: 3 }}>{val.name}</Typography>
                                                <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Lorem ipsum dolor sit amet,conse ctetur adipiscing</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10, marginBottom: 10 }}>
                                                <Typography variant='h7' style={{ fontWeight: 'bold' }}>$32/month</Typography>
                                            </Grid>

                                            <Grid style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                                                <Button variant='outlined' style={{ width: '100%', height: '100%', border: `1px solid ${val.color}`, color: `${val.color}`, borderRadius: 10 }}>Current Subscription</Button>
                                            </Grid>

                                        </Container>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>

                        {/* ======================== Save Button ================================= */}
                        <Grid style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                            <Button variant='contained' style={{ width: '20vh', borderRadius: 10, color: 'white', backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)' }}>
                                Save Changes
                            </Button>
                        </Grid>
                    </Grid>

                </Container>

            </div>
        </React.Fragment>
    );
}

