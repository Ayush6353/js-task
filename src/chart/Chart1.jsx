import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';


export default function Chart1() {
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
                    pless Enter your name
                </Typography>
                <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Name"
                />
                <Grid sx={{ display: 'flex', gap: 40 }}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'black' }}
                    >Previous
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'black' }}
                    >Next
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}
