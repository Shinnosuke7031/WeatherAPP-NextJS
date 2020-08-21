import Layout from '../../../components/MyLayout';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import {FC} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import useSWR from 'swr';

import ShowHourlyInfo from '../../../components/HourlyInfo';

type TypeInfo = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: string;
  speed: number;
  date: string[];
}

type TypeHourlyInfo = {
  temp: number;
  humidity: number;
  icon: string;
  weather: string;
  deg: number;
  speed: number;
  dt: string[];
  pop: number;
}

interface TypeProps {
  CurrentInfo: TypeInfo;
  HourlyInfo: TypeHourlyInfo[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const CurrentWeatherEachCity: FC = () => {
  
  const router = useRouter();
  const ShowName = router.query.name;
  
  
  const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/onecall?APPID= + ${process.env.WEATHER_API_KEY} + &units=metric${router.query.lat_lon}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const CurrentInfo: TypeInfo = setCurrentData(data.current);
  const HourlyInfo: TypeHourlyInfo[] = setHourlyInfo(data.hourly);
  
  return (
    <Layout>
        <Head>
          <title key="title"> {ShowName}の気象情報 </title>
        </Head>

      <div className="container">
        <h1>現在の気象情報 </h1>
        <p>({`${CurrentInfo.date[0]} ${CurrentInfo.date[1]}時${CurrentInfo.date[2]}分`})</p>
        
        <div className="box">

          <h2>{ShowName}</h2>

          <div className="current-info">
            <p className="current-text">温度</p> <p className="center-sig">：</p> <p className="current-text"> {CurrentInfo.temp}℃ </p>
          </div>
          <div className="current-info">
            <p className="current-text">湿度 </p> <p className="center-sig">：</p> <p className="current-text"> {CurrentInfo.humidity}% </p>
          </div>
          <div className="current-info">
            <p className="current-text">{CurrentInfo.deg} </p> <p className="center-sig">：</p> <p className="current-text"> {CurrentInfo.speed} m/s</p>
          </div>

          <div className="weather-info">
            <p> {CurrentInfo.weather} </p>
            <div>
              <img src={`https://openweathermap.org/img/w/`+ CurrentInfo.icon + `.png` } />
            </div>
          </div>

        </div>       
      </div>
      
      <ShowHourlyInfo hourlyInfo={HourlyInfo} />
  
      <Link href="/weather"><a className="back">戻る</a></Link>
      <style jsx>{`
        p {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin: 10px auto;
          width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
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
          width: 60%;
          text-align: center;
          font-size: 15px;
        }
        .box {
          border-top: 1px dotted silver;
          border-bottom: 1px dotted silver;
          width: 200px;
          margin: 0 auto;
        }
        .back {
          font-size: 16px;
          color: black;
          margin: 20px auto;
          width: 80px;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
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
          height: 100%;
        }
      `}</style>

    </Layout>
  )
};

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
  const HourlyInfo0: TypeHourlyInfo[] = hourlyData24h.map((info: any, index: number)=>{
    //24時間分の年月日時間を取得, [0]:Year, [1]:Month, [2]:Date, ([3]時:[4]m:[5]s)
    const dt = new Date(info.dt * 1000);//Dateがミリ秒なので1000倍が必要
    const dateStr: string = dt.toLocaleDateString('ja-JP');
    const date = dateStr.split('-');
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

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  const lat_lon = context.query.lat_lon;
  //const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?APPID=` + process.env.API_KEY + `&units=metric${lat_lon}`);
  
  const data = await res.json();

  //----------- CurrentInfo -----------//
  //date time
  const dt = new Date(data.current.dt * 1000);//Dateがミリ秒なので1000倍が必要
  const dateStr = dt.toLocaleDateString('ja-JP');
  const date = dateStr.split('-');//[0]:Year, [1]:Month, [2]:Date
  const t = dt.toLocaleTimeString('ja-JP');
  const time = t.split(':');
  const DateTime: string[] = [...date, ...time];
  
  //天気アイコン
  const icon: string = data.current.weather[0].icon;
  //to int
  const temp: number = Math.round(data.current.temp);
  const humidity: number = Math.round(data.current.humidity);
  //天気のテキスト
  const weather: string = get_weather_string(icon);
  //風向きと風速
  const deg: string = get_deg_string(data.current.wind_deg);
  const speed: number = Math.round(data.current.wind_speed);
  
  const CurrentInfo: TypeInfo = { temp: temp, humidity: humidity, icon: icon, weather: weather, deg: deg, speed: speed, date: DateTime };

  //----------- HourlyInfo -----------//
  const hourlyData0 = data.hourly;
  const hourlyData24h = hourlyData0.slice(1, 25);
  const HourlyInfo0: TypeHourlyInfo[] = hourlyData24h.map((info: any, index: number)=>{
    //24時間分の年月日時間を取得, [0]:Year, [1]:Month, [2]:Date, ([3]時:[4]m:[5]s)
    const dt = new Date(info.dt * 1000);//Dateがミリ秒なので1000倍が必要
    const dateStr: string = dt.toLocaleDateString('ja-JP');
    const date = dateStr.split('-');
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
  });
  const HourlyInfo =  HourlyInfo0.filter(n => n !== undefined);
  
  return {  { CurrentInfo, HourlyInfo } };
};*/

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

export default CurrentWeatherEachCity;

/*const CurrentInfo = { ...data, coord: { ...data.coord }, 
                weather: {...data.weather}, main: {...data.main ,temp: celsius, humidity: NewHumidity}, 
                wind:{...data.wind},  clouds: {...data.clouds}, sys: {...data.sys} };*/