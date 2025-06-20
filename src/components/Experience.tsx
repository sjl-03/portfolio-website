import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Experience() {
  const experience = {
    company: 'Crédit Agricole Corporate and Investment Bank',
    location: 'London',
    position: 'IT Summer Intern',
    period: 'June – September 2024',
    responsibilities: [
      'Built data pipelines using Elastic Stack for device logs',
      'Collaborated with Fixed Income Dev teams to index logs',
      'Developed Kibana dashboards for real-time monitoring',
      'Created Power BI dashboards for power consumption analysis',
      'Managed EMEA JIRA project deck for CAB meetings',
      'Wrote documentation for future pipeline usage'
    ]
  };

  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#1a1b26',
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
            Work Experience
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
              backgroundColor: '#1f2335',
              border: '1px solid rgba(122, 162, 247, 0.1)',
              boxShadow: '0 4px 32px 0 rgba(122, 162, 247, 0.1)',
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#7aa2f7',
                mb: 1,
                textShadow: '0 0 20px rgba(122, 162, 247, 0.3)',
              }}
            >
              {experience.position}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#bb9af7', mb: 2 }}
            >
              {experience.company} | {experience.location}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: '#7dcfff', mb: 3 }}
            >
              {experience.period}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
              {experience.responsibilities.map((responsibility, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body1"
                  sx={{ mb: 1, color: '#a9b1d6' }}
                >
                  {responsibility}
                </Typography>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience; 