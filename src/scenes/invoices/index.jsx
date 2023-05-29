import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/header";


const Invoices = () => {
    const team = useTheme()
    const Colors = tokens(team.palette.mode)
    
    //Define the table columns
    const columns = [
        {field:"id", headerName:"ID"},
        {field:"name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        {field:"email", headerName:"Email", flex:1},
        {filed:"cost", headerName:"Cost", flex:1, align:"center", renderCell:(params) => {
          return(
              <Typography color={Colors.greenAccent[500]} >
                ${params.row.cost}
              </Typography>          
          )
        }},
        {field:"date", headerName:"Date", flex:1},
    ]

  return (
    <Box sx={{m:"20px"}}>
        <Header title="INVOICES" subTitle="List of Invoice Balance" />
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
              },  
            "& .MuiCheckbox-root":{
              color: Colors.greenAccent[200]
            }

          }}
        >
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}></DataGrid>
        </Box>
    </Box>
    
   

  )
}

export default Invoices;

