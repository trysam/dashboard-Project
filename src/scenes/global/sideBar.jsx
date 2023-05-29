import { Box, IconButton, Typography, colors, useTheme } from "@mui/material"
import { useState } from "react"
import {Sidebar, Menu, MenuItem, menuClasses} from "react-pro-sidebar"
import { tokens } from "../../theme"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const Colors = tokens(theme.palette.mode);

  return (
    <MenuItem 
      active={selected === title}
      style={{color:Colors.grey[100]}}
      onClick ={() => setSelected(title)}
      icon = {icon} 
      href={to}          
    >
      <Typography sx={{":hover":{color:"#6870fa"}}}>{title}</Typography>
    </MenuItem>
  )  
}

const SideBarComponent = () => {
  const theme = useTheme()
  const Colors = tokens(theme.palette.mode)

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Box style={{ display: 'flex', height: '100%', minHeight: '100vh' }}>
      <Sidebar collapsed={isCollapsed} backgroundColor={Colors.primary[400]}  >
        <Menu 
          iconShape="square"  
          rootStyles={{
            [`.${menuClasses.button}:hover`]: {    
              backgroundColor:`${Colors.primary[400]}`,                               
            },
            
            [`.${menuClasses.icon}:hover`]: {    
              color:"#6870fa"    
            },          
                           
            [`.${menuClasses.active}`]: {  
              color:"#6870fa",         
            },                      
          }}
        >
          {/*LOGO and MENU ICON*/}
          <MenuItem             
            icon={isCollapsed 
              ? <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon sx={{":hover":{color:"#868dfb"}}}/>
                </IconButton> 
              : undefined}
            style={{margin:"10px 0 20px 0"}}          
          >
            {!isCollapsed && (
              <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center" 
                ml="15px">
                  <Typography variant="h4" color={Colors.grey[100]}>ADMINS</Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                    <MenuOutlinedIcon sx={{":hover":{color:"#868dfb"}}}/>
                  </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" >
                <img 
                  alt="Profile Photography"
                  width="100px"
                  height="100px"                  
                  src="../../assets/my picture.jpg"
                  style={{cursor:"pointer", borderRadius:"50%"}}
                />
              </Box>
              <Box >
                <Typography
                  variant="h3" 
                  textAlign="center" 
                  color={colors.grey[400]} 
                  fontWeight="bold"
                  sx={{m: "10px 0 0 0"}} 
                >
                  Samson O.
                </Typography>
                <Typography 
                  textAlign="center"
                  variant="h6"
                  color={Colors.greenAccent[500]}
                >
                    Network Performance
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          {<Box paddingLeft={isCollapsed? undefined: "10%"} >
              <Item 
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}          
              />
              <Typography 
                variant="h6"
                sx={{m:"15px 0 5px 20px ", color:Colors.grey[300]}}
              >
                Data
              </Typography>
              <Item 
                title="Manage People"
                to="/team"
                icon={<PeopleOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Typography 
                variant="h6"
                sx={{m:"15px 0 5px 20px ", color:Colors.grey[300]}}
              >
                Pages
              </Typography>
              <Item 
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Calendar"
                to="/form"
                icon={<CalendarTodayOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Typography 
                variant="h6"
                sx={{m:"15px 0 5px 20px ", color:Colors.grey[300]}}
              >
                Charts
              </Typography>
              <Item 
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              <Item 
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon/>} 
                selected={selected}
                setSelected={setSelected}   
              />
              
            </Box>}

        </Menu>

      </Sidebar>
    </Box>
  )
}

export default SideBarComponent
