import { Typography, Box, useTheme } from "@mui/material"
import { tokens } from "../theme"
  
const Header = ({title, subTitle , date=new Date().toDateString()}) => {
    const theme = useTheme();
    const Colors = tokens(theme.palette.mode);

  return (
    <Box sx={{mb:"30px"}}>
        <Box sx={{mb:"5px"}} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography 
                variant="h2" 
                color={Colors.grey[100]} 
                fontWeight="bold" 
            >
                {title}
            </Typography>
            <Typography 
                variant="h5" 
                color={Colors.grey[100]} 
                mr="15px"             
            >
                {date}
            </Typography>

        </Box>    
 
        <Typography variant="h5" color={Colors.greenAccent[400]}>{subTitle} </Typography>
    </Box>
  )
}

export default Header