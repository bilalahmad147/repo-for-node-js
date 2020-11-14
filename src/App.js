import React from 'react'
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useRef, useLayoutEffect } from 'react'
am4core.useTheme(am4themes_animated);

function App(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    // ...

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  // When the paddingRight prop changes it will update the chart
  useLayoutEffect(() => {
    chart.current.paddingRight = props.paddingRight;
  }, [props.paddingRight]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

export default App;
