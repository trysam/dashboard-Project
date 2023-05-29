import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/header";


const Team = () => {
    const team = useTheme()
    const Colors = tokens(team.palette.mode)
    
    //Define the table columns
    const columns = [
        {field:"id", headerName:"ID"},
        {field:"name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        {field:"age", headerName:"Age", type:"number", headerAlign:"left", align:"left", editable:true},
        {field:"phone", headerName:"Phone Number", flex:1},
        {field:"email", headerName:"Email", flex:1},
        {filed:"access", headerName:"Access", flex:1, headerAlign:"center", renderCell:({row: {access}}) => {
          return(
            <Box 
            display="flex" 
            width="60%"
            m="0 auto"
            p="5px"
            justifyContent="center"
            backgroundColor={
              access === "admin" ? Colors.greenAccent[600] : Colors.greenAccent[700]
            }
            borderRadius="7px"          
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
              {access === "manager" && <SecurityOutlinedIcon/>}
              {access === "user" && <LockOpenOutlinedIcon/>}
              <Typography color={Colors.grey[100]} sx={{ml:"5px"}}>{access}</Typography>
            </Box>
          )
        }}
    ]

  return (
    <Box sx={{m:"20px"}}>
        <Header title="TEAM" subTitle="Managing the Team Members" />
        <Box 
          mt="40px" 
          height="75vh"
          sx={{
            "& .MuiDataGrid-root":{
              border:"none"  
            },
            "& .MuiDataGrid-cell":{
              border:"none"
            },
            "& .name-column--cell":{
              color:Colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
              backgroundColor: Colors.blueAccent[700],
              borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller":{
              backgroundColor: Colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
              borderTop:"none",
              backgroundColor: Colors.blueAccent[700]
            }

          }}
        >
            <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
        </Box>
    </Box>
    
   

  )
}

export default Team;

