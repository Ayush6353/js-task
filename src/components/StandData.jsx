import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { adddata, stddata } from '../Stores/SliceData';


export default function StandData() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const setAllData = useSelector((state) => state.reducer);
    const [Std, setStd] = useState("");

    const handalnextBtn = (e) => {
        e.preventDefault();
        dispatch(stddata(Std));
        navigator("/pr");
    }
    const handalpreviousBtn = () => {
        navigator("/");
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
                    Enter your Std
                </Typography>
                <TextField
                    helperText="Please enter your Std"
                    id="demo-helper-text-aligned"
                    label="Std"
                    type='text'
                    value={Std}
                    onChange={(e)=>setStd(e.target.value)}
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
                        sx={{ backgroundColor: 'black' }}
                        onClick={handalnextBtn}
                    >Next
                    </Button>
                </Grid>
            </Box>
        </Grid>
    )
}
