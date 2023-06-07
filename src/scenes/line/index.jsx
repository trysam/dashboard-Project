import { Box } from "@mui/material"
import LineChart from "../../components/lineChart"
import Header from "../../components/header"

const Line = () => {
  return (
    <Box m="20px">
        <Header title="LINE CHART" subTitle="Need to review the data points"/>
        <Box height="72vh">
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line