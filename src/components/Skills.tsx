import { Box, Container, Typography, Paper, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    technical: ['Python', 'C++', 'Java'],
    tools: ['JIRA', 'Kibana', 'Power BI'],
    languages: ['English', 'Mandarin'],
    certifications: [
      {
        name: 'Supervised Machine Learning',
        provider: 'Coursera',
        link: 'https://coursera.org/share/3ea99d24d4730c4c38167bd5fc6cca1b'
      }
    ],
    awards: [
      'Senior Mathematical Challenge – Gold',
      'British Physics Olympiad – Bronze'
    ],
    activities: [
      'Active member of University of Edinburgh Computer Science Society'
    ]
  };

  return (
    <Box
      id="skills"
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
            Skills & Achievements
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
                  mb: 3,
                  textShadow: '0 0 20px rgba(122, 162, 247, 0.3)',
                }}
              >
                Technical Skills
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    color: '#bb9af7',
                  }}
                >
                  Programming Languages
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {skills.technical.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: 'rgba(122, 162, 247, 0.1)',
                        color: '#7aa2f7',
                        border: '1px solid rgba(122, 162, 247, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(122, 162, 247, 0.2)',
                          borderColor: '#7aa2f7',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    color: '#bb9af7',
                  }}
                >
                  Tools & Technologies
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {skills.tools.map((tool) => (
                    <Chip
                      key={tool}
                      label={tool}
                      sx={{
                        backgroundColor: 'rgba(122, 162, 247, 0.1)',
                        color: '#7aa2f7',
                        border: '1px solid rgba(122, 162, 247, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(122, 162, 247, 0.2)',
                          borderColor: '#7aa2f7',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    color: '#bb9af7',
                  }}
                >
                  Languages
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {skills.languages.map((language) => (
                    <Chip
                      key={language}
                      label={language}
                      sx={{
                        backgroundColor: 'rgba(122, 162, 247, 0.1)',
                        color: '#7aa2f7',
                        border: '1px solid rgba(122, 162, 247, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(122, 162, 247, 0.2)',
                          borderColor: '#7aa2f7',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                  mb: 3,
                  textShadow: '0 0 20px rgba(122, 162, 247, 0.3)',
                }}
              >
                Certifications & Awards
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    color: '#bb9af7',
                  }}
                >
                  Certifications
                </Typography>
                {skills.certifications.map((cert) => (
                  <Typography key={cert.name} variant="body1" sx={{ mb: 1, color: '#a9b1d6' }}>
                    {cert.name} – {cert.provider}{' '}
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#7dcfff',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#bb9af7',
                        },
                      }}
                    >
                      (View Certificate)
                    </Link>
                  </Typography>
                ))}
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    color: '#bb9af7',
                  }}
                >
                  Awards
                </Typography>
                {skills.awards.map((award) => (
                  <Typography key={award} variant="body1" sx={{ mb: 1, color: '#a9b1d6' }}>
                    {award}
                  </Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Activities
                </Typography>
                {skills.activities.map((activity) => (
                  <Typography key={activity} variant="body1" sx={{ mb: 1 }}>
                    {activity}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Skills; 