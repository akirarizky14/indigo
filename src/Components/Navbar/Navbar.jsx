import React, { useState } from 'react';
import '../../css/Navbar/Navbar.css';
import logo from '../../assets/Logo.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '../Context/DarkModeContext';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [value, setValue] = useState('one');
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = (id, tabValue) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setValue(tabValue);
  };

  return (
    <nav className={`container-navbar`} style={{ backgroundColor: theme.palette.background.default }}>
      <div className="wrapper-navbar">
        <div className="left-navbar">
          <img src={logo} alt="Logo" />
          <Box className="Box">
            <Tabs
              className="Tabs"
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab
                className="Tab"
                value="one"
                label="Home"
                onClick={() => handleScroll('home', 'one')}
                sx={{ color: theme.palette.text.primary }}
              />
              <Tab
                className="Tab"
                value="two"
                label="About Us"
                onClick={() => handleScroll('about-us', 'two')}
                sx={{ color: theme.palette.text.primary }}
              />
              <Tab
                className="Tab"
                value="three"
                label="Products"
                onClick={() => handleScroll('products', 'three')}
                sx={{ color: theme.palette.text.primary }}
              />
              <Tab
                className="Tab-cs"
                value="four"
                label="Contact Us"
                onClick={() => handleScroll('contact-us', 'four')}
                sx={{ color: theme.palette.text.primary }}
              />
            </Tabs>
          </Box>
        </div>
        <div className="right-navbar">
          <div onClick={toggleDarkMode} className="icon-lang">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon style={{ color: theme.palette.text.primary }} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
