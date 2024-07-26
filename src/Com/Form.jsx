
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Divider, TextField, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Form() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const [formData, setFormData] = useState({
    title: '',
    projectName: '',
    managerName: '',
    mrLink: '',
    description: '',
    ticketId: '',
    block: '',
    attachments: null,
  });


  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'file' ? files[0] : value,
    });
  };


  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(formData);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '94vh',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Container
        sx={{
          border: '2px solid black',
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          marginTop: theme.spacing(2),
        }}
      >
        <Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h4" gutterBottom>
              Details
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: 'darkblue', mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Title</Typography>
              <TextField
                id="title"
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Project Name</Typography>
              <TextField
                id="projectName"
                fullWidth
                variant="outlined"
                required
                value={formData.projectName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Manager Name</Typography>
              <TextField
                id="managerName"
                fullWidth
                variant="outlined"
                value={formData.managerName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">MR Link</Typography>
              <TextField
                id="mrLink"
                fullWidth
                variant="outlined"
                value={formData.mrLink}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Description</Typography>
              <TextField
                id="description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Ticket ID</Typography>
              <TextField
                id="ticketId"
                fullWidth
                variant="outlined"
                value={formData.ticketId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Block</Typography>
              <TextField
                id="block"
                fullWidth
                variant="outlined"
                value={formData.block}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Attachments</Typography>
              <TextField
                id="attachments"
                fullWidth
                type="file"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth={isMobile} onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Form;
