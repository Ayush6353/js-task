import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { Alert } from '@mui/material';



class ChangeBillingMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardholderName: '',
            expiryDate: '',
            creditCardNumber: '',
            cvv: '',
            errors: {},
        };
    }

    validateForm = () => {
        const { cardholderName, expiryDate, creditCardNumber, cvv } = this.state;
        const errors = {};

        if (!cardholderName) {
            errors.cardholderName = 'Cardholder name is required';
        }
        if (!expiryDate) {
            errors.expiryDate = 'Expiry date is required';
        }
        if (!creditCardNumber) {
            errors.creditCardNumber = 'Credit card number is required';
        }
        if (!cvv) {
            errors.cvv = <Alert severity="warning" sx={{
                "& .MuiAlert-icon":{color:"red"}
            }}  style={{color:'black',boxShadow:'0px 0px 2px 2px rgba(176, 176, 176, 0.338)', backgroundColor:'white'}}>Invalid Cardholder Name</Alert>;
        }

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    handleSaveChanges = () => {
        if (this.validateForm()) {
            // Perform your save changes logic here
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <React.Fragment>

                <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 40 }}>
                    <Grid>
                        <Container style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '5vh', width: '100%', border: '1px solid rgba(176, 176, 176, 0.338)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                            <Typography style={{ fontFamily: 'cursive' }}>{'Billing ->'}</Typography>
                            <Typography variant='h7' style={{ marginLeft: 5, color: 'purple' }}>{'Change Payment Method'}</Typography>
                        </Container>

                        <CssBaseline />
                        <Container fixed style={{ display: 'flex', backgroundColor: 'white', height: 'auto', width: '100vh', border: '1px solid rgba(176, 176, 176, 0.338)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <div style={{ height: '70vh', width: '100%' }}>
                                <Grid container lg={12} spacing={2} style={{ marginTop: 20 }}>
                                    <Grid item xs={12} lg={6} sm={12}>
                                        <Typography style={{ fontSize: 12, display: 'flex', fontWeight: 'normal', color: 'black' }}>Cardholder Name</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="name"
                                            variant="outlined"
                                            value={this.state.cardholderName}
                                            onChange={(e) => this.setState({ cardholderName: e.target.value })}
                                            error={errors.cardholderName}
                                            helperText={errors.cardholderName}
                                            style={{ width: '100%', bordeRadius: 10 }} />

                                        <Typography style={{ fontSize: 12, display: 'flex', fontWeight: 'normal', color: 'black', marginTop: 20 }}>Expiry Date</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            type='date'
                                            variant="outlined"
                                            value={this.state.expiryDate}
                                            onChange={(e) => this.setState({ expiryDate: e.target.value })}
                                            error={errors.expiryDate}
                                            helperText={errors.expiryDate}
                                            style={{ width: '100%', bordeRadius: 10 }} />
                                    </Grid>
                                    <Grid item xs={12} lg={6} sm={12} >
                                        <Typography style={{ fontSize: 12, display: 'flex', fontWeight: 'normal', color: 'black' }}>Credit Card Number</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="xxxx xxxx xxxx 8087"
                                            type='number'
                                            variant="outlined"
                                            value={this.state.creditCardNumber}
                                            onChange={(e) => this.setState({ creditCardNumber: e.target.value })}
                                            error={errors.creditCardNumber}
                                            helperText={errors.creditCardNumber}
                                            style={{ width: '100%', bordeRadius: 10 }} />

                                        <Typography style={{ fontSize: 12, display: 'flex', fontWeight: 'normal', color: 'black', marginTop: 20 }}>CVV</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="xxx"
                                            variant="outlined"
                                            value={this.state.cvv}
                                            onChange={(e) => this.setState({ cvv: e.target.value })}
                                            error={errors.cvv}
                                            helperText={errors.cvv}
                                            style={{ width: '100%', bordeRadius: 10 }} />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                        <Grid style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                            <Button variant='contained' onClick={this.handleSaveChanges} style={{ width: '20vh', borderRadius: 10, color: 'white', backgroundColor: '#3949ab', }}>
                                Save Changes
                            </Button>
                        </Grid>
                    </Grid>

                </Container>
            </React.Fragment>
        );
    }
}

// export default ChangeBillingMethod;
const styles = {

}
export default withStyles(styles)(ChangeBillingMethod);