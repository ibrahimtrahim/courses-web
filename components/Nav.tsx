import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import NavElement from "./NavElement"
import Link from "next/link"

const Nav = () => {
  return (
    <Box sx={{padding:'1rem 0', display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <Typography>//Devlab</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Link href='/program'>
                <NavElement>Program</NavElement>
            </Link>
            <NavElement>price</NavElement>
            <NavElement>about</NavElement>
        </Box>
        <Button variant="outlined">
            <Typography>log in</Typography>
        </Button>
    </Box>
  )
}

export default Nav