import React, { useState, useEffect} from 'react';
import {fetchDailyData} from '../../API';

// import charts
import {Line, Bar} from 'react-chartjs-2';

// importing stylesheet
import styles from './Charts.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    // console.log(country);
    
    const [dailyData, setDailyData]  = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            // const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        };
        // console.log(dailyData);
        

        fetchAPI();
    },[]);


    const barChart = ( 
        confirmed ?
         (                         
            <Bar 
                data = {{  
                        labels : ['Infected', 'Recovered', 'Deaths'],
                        datasets : [{
                            label: 'People',
                            backgroundColor:[
                                'rgba(0,0,255,0.5)',
                                'rgba(255,0,0,0.5)',
                                'rgba(0,255,0,0.5)'
                            ],
                            data :[confirmed.value, recovered.value, deaths.value]
                        },
                        ],
                }}
                options = {{
                    legend: {display: false},
                    title : {display: true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    );

    const lineChart = (
        dailyData[0] ? (
        <Line 
            data ={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map((data) => data.confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map((data) => data.deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill:true,
                }],

            }}
        />) : null
    );

    
    
    return(
       <div className ={styles.container}>
       
           {country ? barChart : lineChart}
       </div>
    )
}

export default Chart;