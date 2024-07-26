import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Container, Divider, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

function Feed() {
  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem("vikashDetails") || '{}')
  const userName = JSON.parse(localStorage.getItem("useryoutube") || '{}')

  console.log(userData, "userData");

  const handleOpen = () => {

    navigate("/form")
  }
  return (
    <>


      <Box Box sx={{ width: "100rem" }}>
        <Paper sx={{ margin: "60px", height: "100px" }}>
          <Box marginLeft="150px" display="flex" flexDirection="row" alignItems="center">
            <Box display="flex" alignItems="center">
              <Avatar
                src="/static/images/avatar/1.jpg"
                sx={{ width: 76, height: 76 }}
              />
              <Box ml={2}>
                <Typography variant="h5" component="div">
                  Name: {userName[0]?.name}
                </Typography>
                <Typography variant="body1" component="div">
                  Email: {userData?.email}
                </Typography>
              </Box>
            </Box>
            <Box marginLeft="20rem">
              <Typography variant="body1" component="div">
                Contact: 8877996677
              </Typography>
              <Typography variant="body1" component="div">
                Location:Jaipur
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "170px", border: "1px solid black " }}>
              <Button onClick={handleOpen}>Add Form</Button>
            </Box>
          </Box>
        </Paper>


        <Box sx={{ marginLeft: "10%", width: "1200px", height: "300px", marginTop: "60px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>



          <Typography variant="h6" >
            Title
            <Typography variant='subtitle2'>
              I know the author’s name but I can’t remember the title of the book.</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            Project Name
            <Typography variant='subtitle2'> Deeporon </Typography>
          </Typography>
          <Typography variant="h6" component="div">
            MR Link
            <Typography variant='subtitle2'>I know the author</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            Block
            <Typography variant="subtitle2" >
              I know the author’s name but I can’t remember the title of the book.
            </Typography>
          </Typography>


          <Typography variant="h6" component="div" mt={2}>
            Ticket ID
            <Typography variant='subtitle2'>2345</Typography>
          </Typography>


          <Typography variant="h6" component="div">
            Manager Name
            <Typography variant='subtitle2'> Hemraj</Typography>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "10%", }}>
          <Typography variant="h6" component="div">
            Description
            <Typography sx={{ width: "100%", height: "80px", }} variant='subtitle2'>I know the authors name but I cant remember the title of the bookI know e authors name but I cant remember the title of the book the authors name but I cant remember the title of the bookI know the authors name but I cant remember the title of the bookI know e authors name but I cant remember the title of the book the authors name but I cant remember the title of the bookI know the authors name but I cant remember the title of the bookI know e authors name but I cant remember the title of the book the authors name but I cant remember the title of the book</Typography>
          </Typography>
          <Typography variant="h6" component="div" mt={2}>
            Attachment </Typography>
          <Box display="flex">


            <img style={{ width: "50px", height: "50px" }} src='https://as1.ftcdn.net/v2/jpg/04/97/97/70/1000_F_497977062_Bv62EOULQ8ms2YvRQK3lzSvjRYCAGI7B.jpg' />
            <Typography variant='subtitle2'>
              Screenshot 2024-06-12 214524.png </Typography>

          </Box>
        </Box>
      </Box>

    </>
  );
}

export default Feed;

