import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'; // Step 1
import { AbcOutlined, AdbOutlined, Close, ContactEmergencyOutlined, ContactMail, ContactMailTwoTone, ContactPage, Dangerous, Home, HomeOutlined, Logout, MailOutline, MailOutlineOutlined, Male, Settings, Warning, WarningAmber, WarningAmberRounded, WarningOutlined, WarningRounded } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField, useMediaQuery } from '@mui/material';
import { useRef } from 'react';
import { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import { DialogContentText, useTheme } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import ChangeSubscription from './ChangeSubscription';

const profile = 'data:image/png;base64,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'
const navItems = ['Home', 'About', 'Contact'];


export default function NavBar() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const [formValues, setFormValues] = useState([]);
    const [drawerOpen, setDrawerOpen] = React.useState(false); // Step 2
    const inputRef = useRef(null);
    const [img, setImg] = useState('');
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    console.log(formValues)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        user: '',
        email: '',
        password: '',
    };
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            setFormValues([values])
            console.log("🚀 ~ file: FormikAndYup.jsx:20 ~ FormikAndYup ~ vḁlues:", values)

            action.resetForm();

        },

    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImg(event.target.files[0]);

    }
    const drawerContent = ( // Step 3


        <div style={{ width: '35vh', height: '100%' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="close"
                sx={{ mr: 2, display: 'flex', justifyContent: 'flex-end', marginLeft: '83%' }}
                onClick={toggleDrawer(false)}>
                <Close />
            </IconButton>
            <Container fixed >
                <Box sx={{ marginLeft: '30%', bgcolor: '#cfe8fc', height: '10vh', width: '10vh', borderRadius: 20 }} >
                    {isAuthenticated && <img src={user.picture} alt={user.name} style={{ bgcolor: '#cfe8fc', height: '10vh', width: '10vh', borderRadius: 70, }} />}

                </Box>
                {/* <Box onClick={handleImageClick} sx={{ marginLeft: '25%', bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 20 }} >

                    {img ? (<img src={URL.createObjectURL(img)} style={{ bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 70, }} />)
                        : (<img src={profile} style={{ bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 30, }} />)}
                    <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                </Box> */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {formValues.map((val) => <Typography variant='body2'>{val.email}</Typography>)}
                </div>
            </Container>

            <ul >

                <li style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, width: '85%', height: 40, color: 'rgb(19, 200, 109)', backgroundColor: 'rgba(205, 203, 203, 0.281)', borderRadius: 3 }}>
                        <HomeOutlined sx={{ color: 'rgba(154, 154, 154, 0.626)' }} />  <Divider orientation="vertical" variant="fullWidth" flexItem /> Home
                    </Button>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, width: '85%', height: 40, color: 'black', backgroundColor: 'rgba(205, 203, 203, 0.281)', borderRadius: 3 }}>
                        <ContactPage sx={{ color: 'rgba(154, 154, 154, 0.626)' }} />  <Divider orientation="vertical" variant="fullWidth" flexItem /> Team
                    </Button>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, width: '85%', height: 40, color: 'black', backgroundColor: 'rgba(205, 203, 203, 0.281)', borderRadius: 3 }}>
                        <MailOutlineOutlined sx={{ color: 'rgba(154, 154, 154, 0.626)' }} />  <Divider orientation="vertical" variant="fullWidth" flexItem /> Contact
                    </Button>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, width: '85%', height: 40, color: 'black', backgroundColor: 'rgba(205, 203, 203, 0.281)', borderRadius: 3 }}>
                        <Settings sx={{ color: 'rgba(154, 154, 154, 0.626)' }} />  <Divider orientation="vertical" variant="fullWidth" flexItem /> Settings
                    </Button>
                </li>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, marginTop: '48vh', width: '85%', height: 55, border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)', borderRadius: 3 }}>
                    <Logout sx={{ color: 'rgba(154, 154, 154, 0.626)' }} />  <Divider orientation="vertical" variant="fullWidth" flexItem /> Logout
                </Button>
            </ul>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(19, 200, 109)" fill-opacity="0.5" d="M0,224L15,224C30,224,60,224,90,192C120,160,150,96,180,96C210,96,240,160,270,186.7C300,213,330,203,360,202.7C390,203,420,213,450,192C480,171,510,117,540,128C570,139,600,213,630,229.3C660,245,690,203,720,176C750,149,780,139,810,138.7C840,139,870,149,900,181.3C930,213,960,267,990,277.3C1020,288,1050,256,1080,240C1110,224,1140,224,1170,202.7C1200,181,1230,139,1260,149.3C1290,160,1320,224,1350,245.3C1380,267,1410,245,1425,234.7L1440,224L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
        </div>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)} // Step 4
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 15 }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'black', marginLeft: 5 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        {
                            isAuthenticated &&

                            <img src={user.picture} alt={user.name} style={{ marginRight: 10, bgcolor: '#cfe8fc', height: '4vh', width: '4vh', borderRadius: 70, }} />
                        }
                        {
                            isAuthenticated &&
                            <Typography style={{ marginRight: 10 }} variant='body2'>{user.name}</Typography>

                        }

                        {
                            isAuthenticated ? (<Button
                                color="inherit"
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                sx={{ display: 'none', width: "10vh", borderRadius: 3, backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)' }}
                            >Logout
                            </Button>) : (<Button
                                color="inherit"
                                onClick={() => loginWithRedirect()}
                                sx={{ width: "10vh", borderRadius: 3, backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)' }}
                            >Login
                            </Button>)
                        }
                        {/* <div>
                        <Button
                            color="inherit"
                            onClick={handleClickOpen}
                            sx={{ width: "10vh", borderRadius: 3, backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)' }}
                        >Login
                        </Button>

                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >

                            <DialogTitle id="responsive-dialog-title" style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                                {"Login"}
                            </DialogTitle>
                            <Formik>
                                <Form onSubmit={handleSubmit} style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    <Container fixed style={{ display: 'flex', justifyContent: 'center', }}>
                                        <Box onClick={handleImageClick} sx={{ bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 20 }} >

                                            {img ? (<img src={URL.createObjectURL(img)} style={{ bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 70, }} />)
                                                : (<img src={profile} style={{ bgcolor: '#cfe8fc', height: '15vh', width: '15vh', borderRadius: 30, }} />)}
                                            <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                        </Box>
                                    </Container>
                                    <TextField
                                        id="user"
                                        label="user"
                                        variant="outlined"
                                        type='user'
                                        placeholder='user'
                                        name='user'
                                        value={values.user}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        id="email"
                                        label="email"
                                        variant="outlined"
                                        type='email'
                                        placeholder='email'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        id="password"
                                        label="password"
                                        variant="outlined"
                                        type='password'
                                        placeholder='password'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Button autoFocus onClick={handleClose}>
                                        Disagree
                                    </Button>
                                    <Button onClick={handleClose} autoFocus type='submit'>
                                        Agree
                                    </Button>
                                </Form>
                            </Formik>
                        </Dialog>

                    </div> */}

                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}> {/* Step 4 */}
                    {drawerContent}
                </Drawer>
            </Box>
            <ChangeSubscription/>
        </>
    );
}