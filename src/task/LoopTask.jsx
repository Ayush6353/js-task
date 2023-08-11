import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'; // Step 1
import { Close } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const navItems = ['Home', 'About', 'Contact'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',

    },
}));
export default function LoopTask() {
    const [drawerOpen, setDrawerOpen] = React.useState(false); // Step 2

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    const drawerContent = ( // Step 3

        <div style={{ width: '40vh', height: '100%' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="close"
                sx={{ mr: 2, display: 'flex', justifyContent: 'flex-end', marginLeft: 40 }}
                onClick={toggleDrawer(false)}>
                <Close />
            </IconButton>
            <ul>
                {navItems.map((item) => (
                    <li key={item} style={{ listStyleType: 'none' }}>
                        <Button sx={{ color: 'black' }}>
                            {item}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <Box sx={{ flexGrow: 1 ,}}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black' }}>
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

                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <Button color="inherit" sx={{ width: "10vh", borderRadius: 3, backgroundColor: 'rgba(19, 200, 109, 0.179)', border: '1px solid rgb(19, 200, 109)', color: 'rgb(19, 200, 109)' }}>Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}> {/* Step 4 */}
                {drawerContent}
            </Drawer>
        </Box>
        
    );
}