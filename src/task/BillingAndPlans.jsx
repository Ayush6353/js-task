import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, Grid, TextField } from '@material-ui/core';


export default function BillingAndPlans() {
    return (
        <React.Fragment>
           
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Grid style={{ padding: 35 }}>
                        <Container  style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '40vh', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                            <Container style={{ display: 'flex', flexDirection: 'column', gap: 20, backgroundColor: 'white', height: '85%', width: '35%', marginLeft: 0, border: '1px solid rgba(176, 176, 176, 0.338)', borderRadius: 20 }}>
                                <Grid style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                                    <img src={require('./img/png.png')} style={{ height: 30, width: 30 }}></img>
                                    <Button color="primary" style={{ fontSize: 12, fontWeigth: 'border' }}>Current Plan</Button>
                                </Grid>
                                <Grid style={{ display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'flex-start' }}>
                                    <Typography variant='h7' style={{ fontWeight: 'bold' }}>Your Subscription</Typography>
                                    <Typography variant='body2' style={{ fontSize: 15, textAlign: 'start' }}>Lorem ipsum dolor sit amet,conse ctetur adipiscing</Typography>
                                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>$32/month</Typography>
                                </Grid>
                                <Grid style={{ display: 'flex', justifyContent: 'space-around', padding: 15 }}>
                                    <Button variant='outlined' style={{ color: ' rgba(21, 0, 255, 0.598)', borderRadius: 10 }}>Cancel</Button>
                                    <Button variant='contained' style={{ backgroundColor: ' rgba(21, 0, 255, 0.598)', color: 'white', borderRadius: 10 }}>Update</Button>
                                </Grid>
                            </Container>
                        </Container>

                        <CssBaseline />
                        <Container  style={{ backgroundColor: 'white', height: '40vh', width: '100vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 15 }}>
                                <Typography style={{ fontSize: 15, display: 'flex', fontWeight: 'bold', color: 'black' }}>Your Billing Details</Typography>
                                <Typography style={{ fontSize: 12, display: 'flex', fontWeight: 'normal', color: 'black' }}>Credit Card Number</Typography>
                                <TextField id="outlined-basic" label="xxxx xxxx xxxx 8087" variant="outlined" style={{ width: '40%',bordeRadius: 10}} />
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
           
        </React.Fragment>
    );
}