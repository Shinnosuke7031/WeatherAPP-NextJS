import React from 'react';

type TypeHourlyInfo = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: number;
  speed: number;
  dt: string[];
  pop: number;
};

interface TypeProps {
  hourlyInfo: TypeHourlyInfo[];
};

const HourlyInfo: React.FC<TypeProps> = (props) => {
  
  return (
    <div className="container">
      <h1　className="hourly-title">3時間ごとの天気</h1>
      <div className="wrap">
        <div className="nav">
          <p>温度</p>
          <p>湿度</p>
          <p>降水確率</p>
          <p>天気</p>
        </div>
        {props.hourlyInfo.map((info: TypeHourlyInfo, index)=>(
          <div className="boxs" key={index}>
            <h1>{`${info.dt[3]}:${info.dt[4]}`}</h1>
            <p> {info.temp}℃ </p>
            <p> {info.humidity}% </p>
            <p> {info.pop}%</p>
            <div className="weather-info">
              <p> {info.weather} </p>
              <div>
                <img src={`https://openweathermap.org/img/w/`+ info.icon + `.png` } />
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          margin: 30px 0 0 0;
        }
        .hourly-title {
          margin: 0 auto;
          font-size: 30px;
          text-align: center;
        }
        .wrap {
          margin: 10px 0 0 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          text-align: center;
        }
        .nav {
          padding-top: 28px;
          font-size: 15px;
          border-bottom: 1px dotted black;
          border-top: 1px dotted black;
        }
        .boxs {
          width: 80px;
          font-size: 15px;
          border-top: 1px dotted black;
          border-bottom: 1px dotted black;
        }
        .weather-info {
          margin: 0 auto;
        }
        h1 {
          font-size: 15px;
        }
        p {
          padding: 0;
          height: 23px;
          border-bottom: 1px dotted black;
          border-top: 1px dotted black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );

};

export default HourlyInfo;