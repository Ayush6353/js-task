import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';



const rows = [
];



export default function ShowData() {
    const navigator = useNavigate();

    const handalAddBtn = () => {
        navigator("/");
    }
    return (
        <Grid sx={{ height: '100%', width: "100%",  padding: 25,display:'flex', flexDirection:'column',gap: 2}}>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'black',width:'20%'}}
                onClick={handalAddBtn}
            >Add Data
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    
                   
                }}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor: ' rgba(218, 218, 217, 0.53)', color: 'white' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Std</TableCell>
                                <TableCell align="center">Pr%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {/* {row.name} */}
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Grid>
    );
}