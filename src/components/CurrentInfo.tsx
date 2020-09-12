import React from 'react';

type TypeProps = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: string;
  speed: number;
  date: string[];
}

interface Props {
  currentInfo: TypeProps;
}

const CurrentInfo: React.FC<Props> = (props) => {

  return (
    <div className="box">
      <h1>現在の天気 </h1>
      <div style={{borderTop: "1px dotted black"}}></div>
      <p>({`${props.currentInfo.date[0]} ${props.currentInfo.date[1]}時${props.currentInfo.date[2]}分`})</p>

      <div className="current-info">
        <p className="current-text">気温</p> <p className="center-sig">：</p> <p className="current-text"> {props.currentInfo.temp}℃ </p>
      </div>
      <div className="current-info">
        <p className="current-text">湿度 </p> <p className="center-sig">：</p> <p className="current-text"> {props.currentInfo.humidity}% </p>
      </div>
      <div className="current-info">
        <p className="current-text">{props.currentInfo.deg} </p> <p className="center-sig">：</p> <p className="current-text"> {props.currentInfo.speed} m/s</p>
      </div>

      <div className="weather-info">
        <p> {props.currentInfo.weather} </p>
        <div>
          <img src={`https://openweathermap.org/img/w/`+ props.currentInfo.icon + `.png` } />
        </div>
      </div>

      <style jsx>{`
        p {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin: 0 0 10px 0;
          font-size: 30px;
          text-align: center;
        }
        h2 {
          margin: 0 auto;
          padding: 5px 0 0 0;
        }
        .current-info {
          display: flex;
          justify-content: center;
        }
        .current-text {
          width: 90px;
          height: 20px;
          margin: 5px 0;
        }
        .center-sig {
          width: 10px;
          height: 20px;
          margin: 5px 0;
        }
        .container {
          margin: 0 auto;
          width: 100%;
          text-align: center;
          font-size: 15px;
        }
        .box {
          border-bottom: 1px dotted black;
          width: 250px;
          margin: 0 auto;
        }
        .back {
          font-size: 16px;
          color: black;
          margin: 0 auto;
          margin: 50px auto;         
          width: 80px;
          height: line-height;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          text-decoration: underline;
        }
        .weather-info {
          margin: 0 auto;
          width: 100px;
          height: 50px;
          display: flex;
          justify-content: center;
        }
        .weather-info p {
          margin: 0;
          width: 40px;
          height: 100%;
          
        }
        .weather-info div {
          margin: 0;
          height: 100%;
        }
      `}</style>

    </div>
  );
}

export default CurrentInfo;