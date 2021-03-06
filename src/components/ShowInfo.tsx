import React from 'react';
import { useRouter } from 'next/router';

import CurrentInfo from './CurrentInfo';
import ShowHourlyInfo from './HourlyInfo';
import ShowDailyInfo from './DailyInfo';

import FetchData from './FetchData';

type TypeInfo = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: string;
  speed: number;
  date: string[];
}

type TypeInfo2 = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: number;
  speed: number;
  dt: string[];
  pop: number;
}

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

type TypeProps = {
  posi: string | string[];
  name: string | string[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const ShowInfo: React.FC<TypeProps> = (props) => {
  const router = useRouter();
  const ShowName = props.name;
  
  const data = FetchData(props.posi);
  if (data.isError) {
    return (
      <div>{data.isError.message}</div>
    );
  }
  else if (data.isLoading) {
    return (
      <div style={{textAlign: "center" ,margin: "20px auto", height: "100%", backgroundColor: "#EEEEEE"}}>
        <p style={{fontSize: "20px"}}>Loading...</p>
        <p>表示されない場合は、<span style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => router.reload()}>こちら</span>をクリック</p>
      </div>
      );
    }
  const CurrentInfo_: TypeInfo = setCurrentData(data.data.current);
  const HourlyInfo: TypeInfo2[] = setHourlyInfo(data.data.hourly);
  const DailyInfo: TypeDailyInfo[] = setDailyInfo(data.data.daily);
  return (
    <div>
      <div className="container">
        <h2>{ShowName}</h2>

        <CurrentInfo currentInfo={CurrentInfo_} />
        <ShowHourlyInfo hourlyInfo={HourlyInfo} />
        <ShowDailyInfo dailyInfo={DailyInfo} />

        <p className="back" onClick={() => router.back()}>戻る</p>

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
          padding: 0 0 30px 0;
          font-size: 30px;
          color: rgb(0, 32, 214);
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

const setCurrentData = (data: any) => {
  //----------- CurrentInfo -----------//
  //date time
  const dt = new Date(data.dt * 1000);//Dateがミリ秒なので1000倍が必要
  const dateStr = dt.toLocaleDateString('ja-JP');
  const date = dateStr.split('-');//[0]:Year, [1]:Month, [2]:Date
  const t = dt.toLocaleTimeString('ja-JP');
  const time = t.split(':');
  const DateTime: string[] = [...date, ...time];
  
  //天気アイコン
  const icon: string = data.weather[0].icon;
  //to int
  const temp: number = Math.round(data.temp);
  const humidity: number = Math.round(data.humidity);
  //天気のテキスト
  const weather: string = get_weather_string(icon);
  //風向きと風速
  const deg: string = get_deg_string(data.wind_deg);
  const speed: number = Math.round(data.wind_speed);
  
  const CurrentInfo: TypeInfo = { temp: temp, humidity: humidity, icon: icon, weather: weather, deg: deg, speed: speed, date: DateTime };

  return CurrentInfo;
}

const setHourlyInfo = (data: any) => {
  const hourlyData24h = data.slice(1, 25);
  const HourlyInfo0: TypeInfo2[] = hourlyData24h.map((info: any, index: number)=>{
    //24時間分の年月日時間を取得, [0]:Year, [1]:Month, [2]:Date, ([3]時:[4]m:[5]s)
    const dt = new Date(info.dt * 1000);//Dateがミリ秒なので1000倍が必要
    const dateStr: string = dt.toLocaleDateString('ja-JP');
    const date = dateStr.split('/');
    const t: string = dt.toLocaleTimeString('ja-JP');
    const time = t.split(':');
    const DateTime: string[] = [...date, ...time];
    //24時間分の温度を取得
    const hourlyTemp: number = Math.round(info.temp);
    const hourlyHumidity: number = Math.round(info.humidity);
    //24時間分の天気(& icon)
    const hourlyWeatherIcon: string = info.weather[0].icon;
    const hourlyWeather: string = get_weather_string(hourlyWeatherIcon);
    //風向きと風速
    const deg: string = get_deg_string(info.wind_deg);
    const speed: number = Math.round(info.wind_speed);
    //降水確率
    const pop: number = Math.round(info.pop * 100);
    if ((index+1)%3 == 0) {
      return ({ temp: hourlyTemp, humidity: hourlyHumidity , icon: hourlyWeatherIcon, weather: hourlyWeather, deg: deg, speed: speed, dt: DateTime, pop: pop });
    }
  })
  const HourlyInfo =  HourlyInfo0.filter(n => n !== undefined);
  return HourlyInfo;
};

const setDailyInfo = (data: any) => {
  const DailyData = data;
  const DailyInfo0: TypeDailyInfo[] = DailyData.map((info: any, index: number)=>{
    //24時間分の年月日時間を取得, [0]:Year, [1]:Month, [2]:Date, ([3]時:[4]m:[5]s)
    const dt = new Date(info.dt * 1000);//Dateがミリ秒なので1000倍が必要
    const dateStr: string = dt.toLocaleDateString('ja-JP');
    const date = dateStr.split('/');
    const t: string = dt.toLocaleTimeString('ja-JP');
    const time = t.split(':');
    const DateTime: string[] = [...date, ...time];
    //24時間分の温度を取得
    const MaxTemp: number = Math.round(info.temp.max);
    const MinTemp: number = Math.round(info.temp.min);
    const hourlyHumidity: number = Math.round(info.humidity);
    //24時間分の天気(& icon)
    const hourlyWeatherIcon: string = info.weather[0].icon;
    const hourlyWeather: string = get_weather_string(hourlyWeatherIcon);
    //風向きと風速
    const deg: string = get_deg_string(info.wind_deg);
    const speed: number = Math.round(info.wind_speed);
    //降水確率
    const pop: number = Math.round(info.pop * 100);
    return ({ MaxTemp: MaxTemp, MinTemp: MinTemp, humidity: hourlyHumidity , icon: hourlyWeatherIcon, weather: hourlyWeather, deg: deg, speed: speed, dt: DateTime, pop: pop });
  })
  const DailyInfo =  DailyInfo0.filter(n => n !== undefined);
  return DailyInfo;
};

const get_weather_string = (s: string) => {
  if (s.includes('01')) return '晴れ';
  if (['02', '03', '04'].some(element => s.includes(element))) return '曇り';
  if (['09', '10'].some(element => s.includes(element))) return '雨';
  if (s.includes('13')) return '雪';
  if (s.includes('11')) return '雷';
  if (s.includes('50')) return '霧';
  return '';
};

const get_deg_string = (deg: number) => {
  let r = '北';
  if (deg>=11.25) r = '北北東';
  if (deg>=33.75) r = '北東';
  if (deg>=56.25) r = '東北東';
  if (deg>=78.75) r = '東';
  if (deg>=101.25) r = '東南東';
  if (deg>=123.75) r = '南東';
  if (deg>=146.25) r = '南南東';
  if (deg>=168.75) r = '南';
  if (deg>=191.25) r = '南南西';
  if (deg>=213.75) r = '南西';
  if (deg>=236.25) r = '西南西';
  if (deg>=258.75) r = '西';
  if (deg>=281.25) r = '西北西';
  if (deg>=303.75) r = '北西';
  if (deg>=326.25) r = '北北西';
  return r+'の風';
};

export default ShowInfo;