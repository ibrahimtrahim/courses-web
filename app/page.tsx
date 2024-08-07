import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import React from 'react'
import Nav from '@/components/Nav'

const Home = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
      <Container maxWidth='lg'>
        <Nav />
      </Container>
    </Box>
  )
}

export default Home