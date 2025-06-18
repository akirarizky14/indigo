import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Tabs, Tab } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '../Context/DarkModeContext';

import '../../css/Navbar/Navbar.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [value, setValue] = useState('one');
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = (id, tabValue) => {
    setValue(tabValue);

    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToId: id, tab: tabValue } });
    }
  };

  return (
    <nav
      className="container-navbar"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <div className="wrapper-navbar">
        {/* Logo */}
        <div className="left-navbar">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
          </Link>

          {/* Tabs */}
          <Box className="Box">
            <Tabs
              className="Tabs"
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
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

        {/* Toggle Dark Mode */}
        <div className="right-navbar">
          <div onClick={toggleDarkMode} className="icon-lang" title="Toggle Dark Mode">
            {darkMode ? (
              <Brightness7Icon style={{ color: theme.palette.text.primary }} />
            ) : (
              <Brightness4Icon style={{ color: theme.palette.text.primary }} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
