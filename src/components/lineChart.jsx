
import { ResponsiveLine } from "@nivo/line"
import { mockLineData as data } from "../data/mockData"
import { tokens } from "../theme"
import {useTheme} from "@mui/material"


const LineChart = ({isDashBoard}) => {
  const theme = useTheme();
  const Colors = tokens(theme.palette.mode);
  return (
          <ResponsiveLine
            data={data}
            theme={{
              axis:{
                ticks:{
                  line:{
                   stroke: Colors.grey[100],
                   strokeWidth: 1
                  },
                text:{
                  fill: Colors.grey[100],
                },                
                },
              legend:{
                text:{
                  fill: Colors.grey[100],
                }
              },},            
              legends:{
                title:{
                  text:{
                    fill: Colors.grey[100],
                  }
                },
                text:{
                  fill: Colors.grey[100],
                },
              },
              tooltip:{
                container:{
                  color:Colors.primary[500]
                }
              }
                
              
            }}
            colors={isDashBoard? {datum:"color"} : {scheme: "nivo"}}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashBoard ? undefined : 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickValues:5,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashBoard ? undefined : 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            enablePoints={true}
            pointSize={4}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: -7,
                    translateY: -37,
                    itemsSpacing: 12,
                    itemDirection: 'left-to-right',
                    itemWidth: 78,
                    itemHeight: 24,
                    itemOpacity: 0.75,
                    symbolSize: 13,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default LineChart