import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import ScrollTypographyLink from './ScrollTypographyLink';

const pages = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const boxStyles = {
    flexGrow: 1,
    display: {
      xs: 'flex' as const,
      md: 'none' as const,
    },
  };

  const desktopBoxStyles = {
    flexGrow: 1,
    display: {
      xs: 'none' as const,
      md: 'flex' as const,
    },
    justifyContent: 'flex-end',
  };

  const desktopTypographyDisplay = { xs: 'none' as const, md: 'flex' as const };
  const mobileTypographyDisplay = { xs: 'flex' as const, md: 'none' as const };

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ background: '#1a1b26' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={ScrollTypographyLink}
            to="hero"
            smooth
            duration={500}
            offset={-64}
            sx={{
              mr: 2,
              display: desktopTypographyDisplay,
              fontWeight: 700,
              color: '#a9b1d6',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            SHENJUN LU
          </Typography>

          <Box sx={boxStyles}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-64}
                  >
                    <Typography textAlign="center" sx={{ color: '#a9b1d6' }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={ScrollTypographyLink}
            to="hero"
            smooth
            duration={500}
            offset={-64}
            sx={{
              mr: 2,
              display: mobileTypographyDisplay,
              flexGrow: 1,
              fontWeight: 700,
              color: '#a9b1d6',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            SHENJUN LU
          </Typography>

          <Box sx={desktopBoxStyles}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: '#a9b1d6',
                  display: 'block',
                  background: 'transparent',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'rgba(122, 162, 247, 0.1)',
                    color: '#7aa2f7',
                  },
                }}
              >
                <Link
                  to={page.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 