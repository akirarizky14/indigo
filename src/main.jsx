import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DarkModeProvider, useDarkMode } from './Components/Context/DarkModeContext.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  const { darkMode } = useDarkMode();

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: 'rgba(255, 255, 255)',
        default1: 'rgba(255, 255, 255)',
        plain: 'rgba(255, 255, 255)',
      },
      text: {
        primary: '#000000',
        secondary: '#eeeeee',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: 'rgba(0, 0, 0, 0.2)',
        default1: 'rgba(0, 0, 0)',
        paper: '#1d1d1d',
      },
      text: {
        primary: '#ffffff',
        secondary: '#bdbdbd',
      },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <Root />
  </DarkModeProvider>
);
