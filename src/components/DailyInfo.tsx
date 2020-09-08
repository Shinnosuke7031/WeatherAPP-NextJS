import React from 'react';

type TypeDailyInfo = {
  MaxTemp: number;
  MinTemp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: number;
  speed: number;
  dt: string[];
  pop: number;
}

interface TypeProps {
  dailyInfo: TypeDailyInfo[];
};

const ShowDailyInfo: React.FC<TypeProps> = (props) => {
  
  return (
    <div className="container">
      <h1　className="hourly-title">週間天気</h1>
      <div className="wrap">
        <div className="nav">
          <p><span className="color_Red">最高気温</span></p>
          <p><span className="color_Blue">最低気温</span></p>
          <p>湿度</p>
          <p>降水確率</p>
          <p>天気</p>
        </div>
        {props.dailyInfo.map((info: TypeDailyInfo, index)=>{
          if (index != 0) return (
          <div className="boxs" key={index}>
            <h1>{`${info.dt[1]}/${info.dt[2]}`}</h1>
            <p> {info.MaxTemp}℃ </p>
            <p> {info.MinTemp}℃ </p>
            <p> {info.humidity}% </p>
            <p> {info.pop}%</p>
            <div className="weather-info">
              <p> {info.weather} </p>
              <div>
                <img src={`https://openweathermap.org/img/w/`+ info.icon + `.png` } />
              </div>
            </div>
          </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          margin: 40px auto 70px;
          width: 100%;
        }
        .hourly-title {
          margin: 0 auto;
          width: 100%;
          font-size: 30px;
          text-align: center;
        }
        .wrap {
          margin: 10px auto 0;
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
        .color_Red {
          color: red;
        }
        .color_Blue {
          color: #05c;
        }
      `}</style>
    </div>
  );

};

export default ShowDailyInfo;