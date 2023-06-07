import PieChart from "../../components/pieChart";
import Header from "../../components/header";
import { Box } from "@mui/material";

import React from 'react'

const Pie = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subTitle="Validation of the library required"/>
        <Box height="73vh">
            <PieChart isDashBoard={true} />
        </Box>
    </Box>
  )
}

export default Pie