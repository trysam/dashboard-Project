
import { ResponsiveChoropleth } from "@nivo/geo"
import { mockGeographyData as data } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import {geoFeatures} from "../data/mockGeoFeature"

const GeographyChart = ({isDashBoard = false}) => {
    const theme = useTheme()
    const Colors = tokens(theme.palette.mode)

  return (
    <ResponsiveChoropleth
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

        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
       
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashBoard ? 40 : 150}
        projectionTranslation={isDashBoard ? [0.49, 0.6]: [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor="#152538"
        legends={
            isDashBoard 
            ? undefined
            :[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: Colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: Colors.grey[100],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default GeographyChart;