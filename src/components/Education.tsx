import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      school: 'University of Edinburgh',
      period: '2023–2027',
      degree: 'BSc Computer Science and Mathematics',
      details: [
        'All courses so far graded A',
        'Topics: Computer Systems, Algorithms & Data Structures, Data Science, Algebra, Calculus, Statistics'
      ]
    },
    {
      school: "King's College London Mathematics School",
      period: '2020–2022',
      degree: 'A-levels',
      details: [
        'Mathematics, Further Mathematics, Physics — A*',
        'AS Level: Computer Science — A'
      ]
    }
  ];
  

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#24283b',
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
            Education
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                  {edu.school}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: '#bb9af7', mb: 2 }}
                >
                  {edu.period} | {edu.degree}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {edu.details.map((detail, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body1"
                      sx={{ mb: 1, color: '#a9b1d6' }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Education; 