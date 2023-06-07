import Header from "../../components/header";
import { Box } from "@mui/material";
import BarChart from "../../components/barChart";

import React from 'react'

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Data requires validation"/>
      <Box height="75vh">
         <BarChart />
      </Box>
    </Box>
  )
}

export default Bar;