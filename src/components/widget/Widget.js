import "./widget.scss" 
import React, { useEffect, useState } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
//import { red } from "@mui/material/colors";
//import { style } from "@mui/system";
//import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from "react-circular-progressbar";
//import MoreVertIcon from "@mui/icons-material/MoreVert";
import ApexCharts from "apexcharts";
import Graph from "../../components/Graph"



const Widget =() =>{
  const [accelration_x, set_accelation_x] = useState(15.45678);
  const [accelration_y, set_accelation_y] = useState(15.45678);
  const [accelration_z, set_accelation_z] = useState(15.45678);
  const [gyro_x, set_gyro_x] = useState(15.45678);
  const [gyro_y, set_gyro_y] = useState(15.45678);
  const [gyro_z, set_gyro_z] = useState(15.45678);
  const [predicted_rate, set_predicted_rate]=useState(23.3232);
  const [model_knn_accuracy, set_model_knn_accuracy]=useState(30.3232);
  const [status, set_status]=useState(30);
  const [rated_prediction, set_rated_prediction] = useState(30);
  const [current_prediction, set_current_prediction] = useState(30)

  


 function onoffstate(){
  if(status==="counting"){
    return <div className="running"> Monitoring on Going</div>;
  }
  else {
    return <div className="running"> Monitoring stops</div>;
    
  }
 }


 function machinestatus(){
  if(rated_prediction===1){
    return <div className="healthy"> Healthy</div>;
  }
  else {
    return <div className="unhealthy"> Unhealthy</div>;
  }
 }

 function currentstatus(){
  if(current_prediction===1){
    return <div className="healthy"> Healthy</div>;
  }
  else {
    return <div className="unhealthy"> Unhealthy</div>;
  }
 }




  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 5 seconds');
      
    let headers = new Headers();

    console.log("here to update current dtata")
    
    fetch('http://ec2-52-87-214-88.compute-1.amazonaws.com:3000/dataset_1/predicted_val')
    .then(res =>{
      if(!res.ok){
        throw Error('clound not fetch the data from the server')
      }
      return res.json();
    })
    .then(data =>{
        
        console.log(data)
        
        set_accelation_x( (0 | (parseFloat(data.acceleration_x) *10000)) /10000);
        set_accelation_y( (0 | (parseFloat(data.acceleration_y) *10000)) /10000);
        set_accelation_z( (0 | (parseFloat(data.acceleration_z) *10000)) /10000);
        set_gyro_x( (0 | (parseFloat(data.gyro_x) *10000)) /10000);
        set_gyro_y( (0 | (parseFloat(data.gyro_y) *10000)) /10000);
        set_gyro_z( (0 | (parseFloat(data.gyro_z) *10000)) /10000);
        set_predicted_rate(data.predicted_rate);
        set_model_knn_accuracy(data.model_knn_accuracy);
        set_status(data.status);
        set_rated_prediction(data.rated_prediction);
        set_current_prediction(data.current_prediction);

       
    })
    .catch(err => {
      console.log(err);
  
    })
   
    
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
    

  return(
      <div className="widget">
      <div className="info-tab">
        <div className="info-box">
          <div className="topic-info">Real Time Data </div>
            
          <div className="info-values">
          <p className="info"> {onoffstate()}</p>
               <div className="val">Acceleration X : {accelration_x}</div>
               <div className="val">Acceleration Y : {accelration_y}</div>
               <div className="val">Acceleration Z : {accelration_z}</div>
               <div className="val">Gyroscope    X : {gyro_x}</div>
               <div className="val">Gyroscope    Y : {gyro_y}</div>
               <div className="val">Gyroscope    Z : {gyro_z}</div>
              
          <div className="icon"> <TimelineIcon 
           style={{
            color: "#FFFFE0",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
           }}
           /> </div>      
              
          </div>

</div>
        <div className="info-box">
        <div className="topic-info">Accuracy of the Trained Model </div>
        <div className="bottom">
               <div className="featuredChart">
                   <CircularProgressbar value={model_knn_accuracy*100} text={(model_knn_accuracy*100).toString()} strokeWidth={10} />
               </div>
               <p className="discription">KNN Model: {model_knn_accuracy*100} %</p>
        <div className="icon"> <AlignHorizontalLeftIcon 

         style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
         }}
         /> 
         </div> 
        </div>
        </div>
           {/* <div className="info-percentage"> */}
               {/* <div className="val">95%  {}</div> */}
           {/* </div> */}
        <div className="info-box">
        <div className="topic-info">Real Time Prediction Accuracy</div>
        <div className="bottom">
               <div className="featuredChart">
                   <CircularProgressbar value={predicted_rate*100} text={(predicted_rate*100).toString()}  strokeWidth={10} />
                   {/* <div className="val">Percentage : {set_predicted_rate*100}</div> */}
               </div>
               <p className="discription">Percentage : {predicted_rate*100} %</p>
        <div className="icon"> <AlignHorizontalLeftIcon 

         style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
         }}
         /> 
         </div> 
        </div>
           {/* <div className="info-percentage"> */}
               {/* <div className="val">90%  {}</div> */}
           {/* </div>    */}
       
        </div>
        <div className="info-box">
        <div className="topic-info">Accuracy Deviation</div>
        
           <div className="info-percentage">
               <div className="variance">{95-(predicted_rate*100)} %</div>
           </div>   
           <p className="margin"> Tolerance: +-35%</p>
        <div className="icon"> <AlignHorizontalLeftIcon 
         style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        /> </div> 
        </div>
        
      </div>

      <div className="prediction-info">
      <div className="status">
         <div className="topic-info">Condition of the Machine</div>
         <p className="currentstatus">Current status : {currentstatus()}</p>
         <div className="condition">{machinestatus()}
         <p className="overall">Overall Condition of the Machine</p>
         </div>

         <div className="icon"> <SettingsSuggestIcon
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
            alignContent:"right",
          }}
          
      /> </div>
        </div>
         <div className="chart-info">
          <div className="topic-info">Graph comes here</div>
           {/* <Graph/>  */}

      </div> 
      </div>

      <div className="scatter">
        scatter plot
      </div>


      </div>
    )

   }
export default Widget


