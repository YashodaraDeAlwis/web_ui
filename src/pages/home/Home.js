import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget  from "../../components/widget/Widget";
//import Featured from "../../components/featured/Featured";
//import Chart from "../../components/chart/Chart";
//import Table from "../../components/table/Table";
//import ChartViewer from "../../components/graph";
//import React, { useEffect, useState } from 'react';
//import Graph from "../../components/Graph"
//import { Chart } from "chart.js";
//mport ChartSample02 from './components/chartsample02';
//import ScatterPlot from "../../components/scatterplot/Scatterplot";



const Home = () => {


  
 // pass the data as a dependency (because you are using it inside the effect)


  return(
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="info-tab"> </div>
          <div className="widgets"> 
             <Widget/>
             
          {/* </div>
          <div className="visuals">
          <ScatterPlot/> 
          <div className="charts"> */}
          
        
           {/* <Featured/> */}
            {/* <ChartViewer data={data} title="Product Trends by Month" /> */}
            {/* <chart/> 
          </div>  
          </div> */}
          {/* <div className="listContainer">
            <div className="listTitle">Latest Update</div>
            <Table/> */}
          </div>
        </div>
      </div>
  )

}

export default Home