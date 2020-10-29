import React, {useState} from 'react';

import { RadialChart, Hint } from 'react-vis';


import './LogChart.css'

const SimpleRadialChart = (props) => {
      
    const [state] = useState(false);
    const value = state;
   
    return (
        <>
        <RadialChart
        className={'donut-chart-example'} innerRadius={90} radius={120}
            getAngle={d => d.theta}
            data={[
          {theta: 3, style:{ fill: '#E0AD0F', stroke: 'none'}, className: 'custom-class'},
          {theta: 3,  style:{ fill: '#E00F0F',stroke: 'none'}},
                { theta: 5, style:{ fill: '#022E64', stroke: 'none'} },        
        ]}
        // onValueMouseOver={v => setState(v)}
        // onSeriesMouseOut={v => setState(false)}
        width={260}
        height={260}
        >
        {value !== false && <Hint value={value} />}
            </RadialChart>
        
       </> 
    );

}

export default SimpleRadialChart