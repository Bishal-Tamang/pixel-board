import React from "react";
import {Chart} from 'react-google-charts';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    // <SparklineComponent
    //   id={id}
    //   height={height}
    //   width={width}
    //   lineWidth={1}
    //   valueType="Numeric"
    //   fill={color}
    //   border={{ color: currentColor, width: 2 }}
    //   dataSource={data}
    //   xName="x"
    //   yName="y"
    //   type={type}
    // >
    //   <Inject services={[SparklineTooltip]}/>
    // </SparklineComponent>
    <Chart 
      chartType={type}
      width={width}
      height={height}
      data={data}
    />
  );
};

export default SparkLine;
