import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';


export default function PrData() {

    const navigator = useNavigate();

    const handalnextBtn = ( ) => {
        console.log("nextButton");
        navigator("/show");
    }
    const handalpreviousBtn = ( ) => {
        console.log("nextButton");
        navigator("/std");
    }
    return (
        <Grid sx={{ height: '100%', width: "100%", }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 7,
                    padding: 5
                }}
            >
                <Typography variant='h4'>
                     Enter your Pr%
                </Typography>
                <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Pr"
                />
                <Grid sx={{ display: 'flex', gap: 40 }}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'black' }}
                        onClick={handalpreviousBtn}
                    >Previous
                    </Button>
                    <Button
                        variant="contained"
                        disabled='true'
                        sx={{ backgroundColor: 'black' }}
                        onClick={handalnextBtn}
                    >Next
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'black' }}
                        onClick={handalnextBtn}
                    >Submit
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}
