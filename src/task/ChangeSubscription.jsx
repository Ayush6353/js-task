import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { Alert } from '@mui/material';



export default function ChangeSubscription() {



    return (
        <React.Fragment>

            <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 40 }}>
                <Grid>
                    <Container style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '5vh', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                        <Typography style={{ fontFamily: 'cursive' }}>{'Billing ->'}</Typography>
                        <Typography variant='h7' style={{ marginLeft: 5,fontWeight:'bold', color: 'rgba(21, 12, 93, 0.839)' }}>{'Change Subscription Type'}</Typography>
                    </Container>

                    <CssBaseline />
                    <Container fixed style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', height: 'auto', width: '100vh', border: '1px solid rgba(176, 176, 176, 0.338)' }}>
                        <div style={{ height: '70%', width: '100%', display: 'flex', marginTop: 30, padding: 10 }}>
                            <Grid container lg={12} spacing={5} >
                                {/* ================= Box 1 ===================== */}

                                <Grid item xs={12} lg={4} md={4} sm={6} >
                                    <Container style={{ display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: 'white', height: '100%', width: '30vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>

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
                                            <Button variant='contained' style={{ width: '100%', height: '100%', backgroundColor: ' rgba(21, 0, 255, 0.598)', color: 'white', borderRadius: 10 }}>Select</Button>
                                        </Grid>

                                    </Container>
                                </Grid>

                                {/* ================= Box 2 ===================== */}

                                <Grid item xs={12} lg={4} md={4} sm={6}>
                                    <Container style={{ display: 'flex', flexDirection: 'column', gap: 17, backgroundColor: 'white', height: '100%', width: '30vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>

                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 12 ,marginBottom:5}}>
                                            <img src={require('./img/png.png')} style={{ height: 30, width: 30 }}></img>
                                        </Grid>

                                        <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <Typography variant='h6' style={{ fontWeight: 'bold', marginBottom: 3 }}>Your Subscription</Typography>
                                            <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Lorem ipsum dolor sit amet,conse ctetur adipiscing</Typography>
                                        </Grid>

                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10,marginBottom:10 }}>
                                            <Typography variant='h7' style={{ fontWeight: 'bold' }}>$32/month</Typography>
                                        </Grid>

                                        <Grid style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                                            <Button variant='outlined' style={{ width: '100%', height: '100%', color: 'rgba(21, 0, 255, 0.598)', borderRadius: 10 }}>Current Subscription</Button>
                                        </Grid>

                                    </Container>
                                </Grid>

                                {/* ================= Box 3 ===================== */}

                                <Grid item xs={12} lg={4} md={4} sm={6}>
                                    <Container style={{ display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: 'white', height: '100%', width: '30vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>

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
                                            <Button variant='contained' style={{ width: '100%', height: '100%', backgroundColor: ' rgba(21, 0, 255, 0.598)',color: 'white', borderRadius: 10 }}>Select</Button>
                                        </Grid>

                                    </Container>
                                </Grid>


                            </Grid>
                        </div>
                    </Container>
                    <Container style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '40vh', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} >

                    </Container>
                    <Grid style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                        <Button variant='contained' style={{ width: '20vh', borderRadius: 10, color: 'white', background: 'rgba(21, 12, 93, 0.839)' }}>
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    );
}

