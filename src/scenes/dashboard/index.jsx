import Header from "../../components/header"
import { Box} from "@mui/material"



const Dashboard = () => {

  /* Time of the day */
  const today = new Date()
  const  curHr = today.getHours()
  const time = curHr < 12 ?"Morning" : curHr < 18 ? "Afternoon": "Evening"     

  return (
    <Box m="20px">      
        <Header title="Dashboard"  subTitle={`Good ${time}, you are welcome.`}/>      
    </Box>   
  )
}

export default Dashboard