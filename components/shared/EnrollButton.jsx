import React from 'react'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Link from 'next/link'


const EnrollButton = () => {
  return (
    <Link href="/enroll">
    <Button 
      size='large'
      variant="outlined"
      sx={{
        backgroundColor: "black",
        borderRadius: "2rem",
        textTransform: "none",
        ".MuiTypography-root": {
          color: "#fff",
          fontWeight: "800",
        },
        "&:hover": {
          backgroundColor: "white",
          border: "1px solid black",
          
          ".MuiTypography-root": {
            color: "black",
          },
        },
      }}
      >
        <Typography sx={{color: "#fff"}}>Enroll Now</Typography>
    </Button>
    </Link>
  )
}

export default EnrollButton