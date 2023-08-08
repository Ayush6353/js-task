import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Grid, textFieldClasses, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { adddata,nameadd } from '../Stores/SliceData';


export default function NameData() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const setAllData = useSelector((state) => state.reducer);
    const [name, setName] = useState("");

    const handalnextBtn = (e) => {
     e.preventDefault();    
        dispatch(nameadd({name}));
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
                    Enter your name
                </Typography>
                <form >
                    <TextField
                        helperText="Please enter your name"
                        id="demo-helper-text-aligned"
                        label="Name"
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Grid sx={{ display: 'flex', gap: 40 }}>
                        <Button
                            variant="contained"
                            disabled='true'
                            sx={{ backgroundColor: 'black' }}
                        >Previous
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: 'black' }}
                            onClick={handalnextBtn}
                        >Next
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Grid>
    )
}
