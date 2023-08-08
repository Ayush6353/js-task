import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Image } from '@mui/icons-material';
import { SchemaYup } from '../Schema';
import { useState } from 'react';

export default function FormikAndYup() {
const [Alldata, setAllData] = useState([]);


    const initialValues = {
        email: '',
        password: '',
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SchemaYup,
        onSubmit: (values,action) => {
        console.log("🚀 ~ file: FormikAndYup.jsx:20 ~ FormikAndYup ~ vḁlues:", values)
       
            action.resetForm();

        },

    }); 
    // console.log("🚀 ~ file: FormikAndYup.jsx:27 ~ FormikAndYup ~ err̥ors:", errors)



    return (
<>
        <Container sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '55rem' }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex',flexDirection:'row-reverse', bgcolor: 'white', height: '55vh', width: '130vh', gap: 5, boxShadow: '4px 4px 11px 0px rgba(0, 0, 0, 0.215)' }} >

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, height: '50vh', width: '100vh', gap: 5 }} >
                        <Typography variant='h5'>Form</Typography>

                        <Box
                            sx={{ width: '100%', maxWidth: '100%', }} >
                            <TextField
                                fullWidth label="Email"
                                id="email"
                                placeholder='email'
                                name='email'
                                type='email'
                                helperText={errors.email && touched.email ? (<p style={{ color: 'red' }}>{errors.email}</p>) : null}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Box>
                        <Box
                            sx={{ width: '100%', maxWidth: '100%', }} >
                            <TextField fullWidth
                                label="Password"
                                id="password"
                                placeholder='password'
                                name='password'
                                type='password'
                                helperText={errors.password && touched.password ? (<p style={{ color: 'red' }}>{errors.password}</p>):null}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />

                        </Box>

                        <Button variant='contained' sx={{ width: "50%" }} type='submit'>Submit</Button>
                    </Box>

                    <Box sx={{ bgcolor: 'rgba(223, 219, 219, 0.459);', height: '100%', width: '100vh' }} >
                        <img src={require('./img/img1.webp')} style={{height:'100%',width:'100%'}} ></img>
                    </Box>
                </Box>
            </form>
        </Container >
         {/* <Container sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '55rem' }}>
         <form onSubmit={handleSubmit}>
             <Box sx={{ display: 'flex',flexDirection:'row-reverse', bgcolor: 'white', height: '55vh', width: '130vh', gap: 5, boxShadow: '4px 4px 11px 0px rgba(0, 0, 0, 0.215)' }} >

             <React.Fragment>
              <Grid sx={{ height: '100%', width: "100%", padding: 25, display: 'flex', flexDirection: 'column', gap: 2 }}>
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

                          <TableCell align="center">email</TableCell>
                          <TableCell align="center">password</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Alldata.map((AllData) => (
                          <TableRow
                            key={AllData.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            </React.Fragment>

                 <Box sx={{ bgcolor: 'rgba(223, 219, 219, 0.459);', height: '100%', width: '100vh' }} >
                     <img src={require('./img/img1.webp')} style={{height:'100%',width:'100%'}} ></img>
                 </Box>
             </Box>
         </form>
     </Container > */}
     </>
    );
}

