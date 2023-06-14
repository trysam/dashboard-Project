import Header from "../../components/header"
import { Box, Button, IconButton, Typography, useTheme} from "@mui/material"
import { tokens } from "../../theme"
import {mockTransactions} from "../../data/mockData"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from "../../components/lineChart"
import BarChart from "../../components/barChart"
import GeographyChart from "../../components/geographyChart"
import StatChart from "../../components/statBox"
import ProgressCircle from "../../components/progressCircle";


const Dashboard = () => {
  const theme = useTheme()
  const Colors = tokens(theme.palette.mode)

  /* Time of the day */
  const today = new Date()
  const  curHr = today.getHours()
  const time = curHr < 12 ?"Morning" : curHr < 18 ? "Afternoon": "Evening"     

  return (
    <Box m="20px"> 
        <Box display='flex' justifyContent="space-between" flexWrap="wrap">
          <Header title="Dashboard"  subTitle={`Good ${time}, you are welcome.`} date=""/>           
          <Box>
            <Button 
              sx={{
                  backgroundColor:Colors.blueAccent[700],
                  ":hover":{backgroundColor:Colors.blueAccent[600]}, 
                  color:Colors.grey[100], 
                  p:"10px 20px", 
                  fontSize:"14px", 
                  fontWeight:"bold" 
                }}
            >
              <DownloadOutlinedIcon sx={{mr:"10px"}}/>
              Download Report
            </Button>
          </Box> 
        </Box>
        {/*GRID & CHARTS*/}      
        <Box 
          display="grid" 
          gridTemplateColumns="repeat(12, 1fr)" 
          gridAutoRows="140px" 
          gap="20px"
        >
          {/*Row 1*/}
          <Box 
            gridColumn="span 3" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor={Colors.primary[400]}            
          >
            
            <StatChart 
              title="12,361" 
              subtitle="Emails Sent" 
              progress="0.75" 
              increase="+17%" 
              icon={<EmailIcon sx={{color:Colors.greenAccent[600], fontSize:"26px"}}/>} />           
            
          </Box>
          <Box 
            gridColumn="span 3" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor={Colors.primary[400]}  
          >
           
            <StatChart 
              title="431,225" 
              subtitle="Sales Obtained" 
              progress="0.5" 
              increase="+21%" 
              icon={<PointOfSaleIcon sx={{color:Colors.greenAccent[600], fontSize:"26px"}}/>} 
            />
          
            
          </Box>
          <Box 
            gridColumn="span 3" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{backgroundColor:Colors.primary[400]}}
          >
            
            <StatChart 
              title="32,441" 
              subtitle="New Clients" 
              progress="0.3" 
              increase="+5%" 
              icon={< PersonAddIcon sx={{color:Colors.greenAccent[600], fontSize:"26px"}}/>} 
            />
          </Box>          
          <Box 
            gridColumn="span 3" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{backgroundColor:Colors.primary[400]}}
          >            
              <StatChart 
                title="1,345,234" 
                subtitle="Traffic OutBound" 
                progress="0.8" 
                increase="+43%" 
                icon={<TrafficIcon sx={{color:Colors.greenAccent[600], fontSize:"26px"}}/>} 
              />
          </Box>
                  {/*Row 2 */}  
          <Box 
            gridColumn="span 8" 
            gridRow="span 2"
            backgroundColor={Colors.primary[400]}
          >
            <Box mt="2px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h5" fontWeight="600" color={Colors.grey[100]}>
                    Revenue Generated
                </Typography>
                <Typography variant="h5" fontWeight="bold" color={Colors.greenAccent[500]}>
                    $59,342.32
                </Typography>
              </Box>
              <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{fontSize:"26px",color:Colors.greenAccent[500]}}/>
              </IconButton>
              </Box>
            </Box>
            <Box height="250px" ml="-20px">
              <LineChart isDashBoard={true}/>
            </Box>
          </Box>
          {/*Transactions */}
          <Box
            gridColumn="span 4" 
            gridRow="span 2" 
            backgroundColor={Colors.primary[400]} 
            overflow="auto"
          >
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center" 
              borderBottom={`4px solid ${Colors.primary[500]}`}
              color={Colors.grey[100]}
              p="15px"
            >
              <Typography color={Colors.grey[100]} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
                <Box 
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${Colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography color={Colors.greenAccent[500]} variant="h5" fontWeight="500">
                      {transaction.txId}
                    </Typography>
                    <Typography color={Colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={Colors.grey[100]}>
                    {transaction.date}
                  </Box>
                  <Box backgroundColor={Colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                    {transaction.cost}
                  </Box>
                </Box>
              ))} 
          
          </Box>
          {/* Row 3- Campaign section*/}
          <Box 
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={Colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size="125"/>
              <Typography variant="h5" color={Colors.greenAccent[500]} mt="15px">
                $48,352 revenue generated
              </Typography>
              <Typography>Includes extra misc expenditure and costs</Typography>
            </Box>             
          </Box>

          {/* Row 3 - Sales Section*/}
          <Box 
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={Colors.primary[400]}
            
          >
            <Typography variant="h5" fontWeight="600" p="30px 30px 0 30px">
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashBoard={true}/>
            </Box>             
          </Box>

          {/* Row 3 - Geography*/}
          <Box 
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={Colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" mb="15px">
              Geography Based Sales Traffic
            </Typography>
            <Box height="200px" >
              <GeographyChart isDashBoard={true}/>
            </Box>             
          </Box>


        </Box> 
        
    </Box>   
  )
}

export default Dashboard