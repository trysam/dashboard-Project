import Header from "../../components/header";
import { Box } from "@mui/material"
import GeographyChart from "../../components/geographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geography = () => {
    const theme = useTheme()
    const Colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title="GEOGRAPHY CHART" subTitle="Remember to validate the input data"/>
        <Box height="73vh" border={`1px solid ${Colors.grey[100]}`} borderRadius="4px">
            <GeographyChart />
        </Box>
    </Box>
  )
}

export default Geography
