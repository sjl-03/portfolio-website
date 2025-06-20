import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Projects() {
  const projects = [
    {
      title: 'Galaxy Mass Estimation',
      description: [
        'Developed a machine learning model to estimate galaxy masses from images',
        'Achieved 92% accuracy using CNN architecture',
        'Implemented data augmentation techniques',
        'Used PyTorch and scikit-learn for model development'
      ],
      pdfLink: 'https://github.com/sjl-03/portfolio-website/blob/main/public/Estimating_Galaxy_Masses_from_3D_Galaxy_Survey_Data%20(4)%5B4467%5D.pdf'
    },
    {
      title: 'Steam Data Analysis',
      description: [
        'Analyzed 10+ years of Steam gaming platform data',
        'Created interactive visualizations using Python',
        'Identified key trends in gaming industry',
        'Used pandas and matplotlib for data processing'
      ],
      pdfLink: '/steam-report.pdf'
    },
    {
      title: 'Flappy Cat (Unity Game)',
      description: [
        'A web game built in Unity and deployed under my domain.',
        'Play directly in your browser!'
      ],
      gameLink: 'https://sjl-03.itch.io/flappy-cat'
    }
  ];

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                    mb: 2,
                    textShadow: '0 0 20px rgba(122, 162, 247, 0.3)',
                  }}
                >
                  {project.title}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                  {project.description.map((detail, idx) => (
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
                {project.pdfLink && (
                  <Button
                    variant="contained"
                    startIcon={<ArticleIcon />}
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mr: 2,
                      backgroundColor: 'rgba(122, 162, 247, 0.1)',
                      color: '#7aa2f7',
                      border: '1px solid rgba(122, 162, 247, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(122, 162, 247, 0.2)',
                        borderColor: '#7aa2f7',
                      },
                    }}
                  >
                    View Report
                  </Button>
                )}
                {project.gameLink && (
                  <Button
                    variant="contained"
                    startIcon={<SportsEsportsIcon />}
                    href={project.gameLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(122, 162, 247, 0.1)',
                      color: '#7dcfff',
                      border: '1px solid rgba(122, 162, 247, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(122, 162, 247, 0.2)',
                        borderColor: '#7dcfff',
                      },
                    }}
                  >
                    Play Flappy Cat
                  </Button>
                )}
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects; 