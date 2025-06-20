import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7aa2f7', // Tokyo Night blue
      light: '#7dcfff', // Tokyo Night cyan
      dark: '#bb9af7', // Tokyo Night purple
    },
    secondary: {
      main: '#bb9af7', // Tokyo Night purple
      light: '#7dcfff', // Tokyo Night cyan
      dark: '#7aa2f7', // Tokyo Night blue
    },
    background: {
      default: '#1a1b26', // Tokyo Night bg
      paper: '#1a1b26', // Tokyo Night bg
    },
    text: {
      primary: '#a9b1d6', // Tokyo Night foreground
      secondary: '#9aa5ce', // Tokyo Night muted
    },
    error: {
      main: '#f7768e', // Tokyo Night red
    },
    warning: {
      main: '#e0af68', // Tokyo Night yellow
    },
    success: {
      main: '#9ece6a', // Tokyo Night green
    },
    info: {
      main: '#7dcfff', // Tokyo Night cyan
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: '#7aa2f7', // Tokyo Night blue
    },
    h2: {
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
      color: '#7aa2f7', // Tokyo Night blue
    },
    h3: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 1,
      color: '#7aa2f7', // Tokyo Night blue
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1b26', // Tokyo Night bg
          borderBottom: '1px solid rgba(122, 162, 247, 0.2)', // Tokyo Night blue with opacity
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f2335', // Tokyo Night bg darker
          backgroundImage: 'none',
          border: '1px solid rgba(122, 162, 247, 0.1)', // Tokyo Night blue with opacity
          boxShadow: '0 4px 32px 0 rgba(122, 162, 247, 0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
          textTransform: 'uppercase',
          backgroundColor: '#7aa2f7',
          color: '#1a1b26',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#bb9af7',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: '#7aa2f7',
          color: '#7aa2f7',
          '&:hover': {
            backgroundColor: 'rgba(122, 162, 247, 0.1)',
            borderColor: '#bb9af7',
            color: '#bb9af7',
          },
        },
        text: {
          color: '#7aa2f7',
          '&:hover': {
            backgroundColor: 'rgba(122, 162, 247, 0.1)',
            color: '#bb9af7',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(122, 162, 247, 0.1)',
          color: '#7aa2f7',
          border: '1px solid rgba(122, 162, 247, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(122, 162, 247, 0.15)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
