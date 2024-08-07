import Typography from "@mui/material/Typography"

interface NavElProps {
    children: React.ReactNode;
}
const NavElement = ({children}: NavElProps) => {
    return(
        <Typography sx={{ marginLeft:'1rem'}}>{children}</Typography>
    )
}

export default NavElement