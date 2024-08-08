import Box from "@mui/material/Box"
import NavElement from "./NavElement"
import EnrollButton from "../shared/EnrollButton"
import Logo from "./Logo"

const Nav = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <Logo/>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <NavElement href="/program">Program</NavElement>
            <NavElement href="/price">price</NavElement>
            <NavElement href="/about">about</NavElement>
        </Box>
        <EnrollButton />
    </Box>
  )
}

export default Nav