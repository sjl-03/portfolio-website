import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(45deg, #7aa2f7, #7dcfff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(122, 162, 247, 0.3)',
              letterSpacing: 2,
            }}
          >
            Shenjun Lu
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              mb: 4,
              color: '#bb9af7',
              textShadow: '0 0 20px rgba(187, 154, 247, 0.3)',
              letterSpacing: 1.5,
            }}
          >
            Computer Science & Mathematics Student
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '800px',
              color: '#9aa5ce',
              lineHeight: 1.8,
            }}
          >
            Detail-oriented student passionate about software development and data analysis.
            Fast learner and effective communicator, seeking opportunities to contribute to impactful projects.
          </Typography>
        </motion.div>
      </Container>
      
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(122, 162, 247, 0.1) 0%, rgba(122, 162, 247, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(187, 154, 247, 0.1) 0%, rgba(187, 154, 247, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
    </Box>
  );
}

export default Hero; 