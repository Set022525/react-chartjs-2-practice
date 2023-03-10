import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useState } from 'react';

type Props = {
  graphTitle: String
  label: String
}

const LineGraph = ({graphTitle, label}: Props) => {

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: graphTitle,
          },
        },
      };
    

    const labelLength = 1000;
    const xLabels = [...Array(labelLength)].map((_:undefined, idx:number) => String(idx))
    const [labels, setLabels] = useState(xLabels);

    const yLabels = [1, 2, 3];
    const [data, setData] = useState(yLabels);

    const graphData = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
                borderColor: "rgb(75, 192, 192)"
            }
        ]
    }
    return (
        <div>
            <Line 
              height={300}
              width={300}
              options={options}
              data={graphData}
            />
        </div>
    )
}

export default LineGraph;