import React, { useState } from 'react';
import '../../css/Navbar/Navbar.css';
import logo from '../../assets/Logo.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleScroll = (id, tabValue) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setValue(tabValue);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="container-navbar">
            <div className="wrapper-navbar">
                <div className="left-navbar">
                    <img src={logo} alt="Logo" />
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            indicatorColor="primary"
                        >
                            <Tab
                                value="one"
                                label="Home"
                                onClick={() => handleScroll('home', 'one')}
                            />
                            <Tab
                                value="two"
                                label="About Us"
                                onClick={() => handleScroll('about-us', 'two')}
                            />
                            <Tab
                                value="three"
                                label="Products"
                                onClick={() => handleScroll('products', 'three')}
                            />
                            <Tab
                                value="four"
                                label="Contact Us"
                                onClick={() => handleScroll('contact-us', 'four')}
                            />
                        </Tabs>
                    </Box>
                </div>
                <div className="right-navbar">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <LanguageIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Indonesia</MenuItem>
                        <MenuItem onClick={handleClose}>English</MenuItem>
                    </Menu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
