import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

import { motion } from 'framer-motion';

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#1f2335',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #7aa2f7, #7dcfff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(122, 162, 247, 0.3)',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#1f2335',
                  border: '1px solid rgba(122, 162, 247, 0.1)',
                  boxShadow: '0 4px 32px 0 rgba(122, 162, 247, 0.1)',
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: '#bb9af7',
                    textShadow: '0 0 20px rgba(187, 154, 247, 0.3)',
                  }}
                >
                  Profile
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#a9b1d6' }}>
                  Detail-oriented Computer Science student enthusiastic about software development and data analysis. 
                  Fast learner and effective communicator, excelling in both independent work and collaborative environments.
                </Typography>
                <Typography variant="body1" sx={{ color: '#a9b1d6' }}>
                  Strengthened problem-solving skills through a summer internship at a leading financial institution. 
                  Seeking opportunities to apply and further develop technical expertise by contributing to impactful projects.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#1f2335',
                  border: '1px solid rgba(122, 162, 247, 0.1)',
                  boxShadow: '0 4px 32px 0 rgba(122, 162, 247, 0.1)',
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: '#7aa2f7',
                    textShadow: '0 0 20px rgba(122, 162, 247, 0.3)',
                  }}
                >
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: '#a9b1d6' }}>
                  📧 Email: shenjunlu03@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: '#a9b1d6' }}>
                  📱 Phone: +44 7399 586396
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: '#a9b1d6' }}>
                  🔗 LinkedIn:{' '}
                  <Box
                    component="a"
                    href="https://www.linkedin.com/in/shenjun-lu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#7aa2f7',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#7dcfff',
                      },
                    }}
                  >
                    linkedin.com/in/shenjun-lu
                  </Box>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 