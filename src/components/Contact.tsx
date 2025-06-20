import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        minHeight: '50vh',
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
            Get in Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: '600px',
              mx: 'auto',
              textAlign: 'center',
              backgroundColor: '#1a1b26',
              border: '1px solid rgba(122, 162, 247, 0.1)',
              boxShadow: '0 4px 32px 0 rgba(122, 162, 247, 0.1)',
            }}
          >
            <Typography variant="body1" sx={{ mb: 4, color: '#a9b1d6' }}>
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of the following channels:
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                href="mailto:shenjunlu03@gmail.com"
                sx={{
                  minWidth: '200px',
                  backgroundColor: '#7aa2f7',
                  color: '#1a1b26',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#bb9af7',
                  },
                }}
              >
                Email Me
              </Button>
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/shenjun-lu/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: '200px',
                  backgroundColor: '#bb9af7',
                  color: '#1a1b26',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#7aa2f7',
                  },
                }}
              >
                LinkedIn
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact; 