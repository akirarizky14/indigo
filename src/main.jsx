import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
