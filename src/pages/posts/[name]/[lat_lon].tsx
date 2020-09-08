import Layout from '../../../components/MyLayout';
import { useRouter } from 'next/router';
import React from 'react';
import ShowInfo from '../../../components/ShowInfo'
import ShowArea from '../../../components/ShowArea';

import Head from 'next/head';

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

const fetcher = (url: string) => fetch(url).then(res => res.json());

const CurrentWeatherEachCity: React.FC = () => {
  
  const router = useRouter();
  const name = router.query.name;
  const posi = router.query.lat_lon;

  return (
    <Layout>
      <Head>
        <title key="title">Weather Information</title>
      </Head>
      <ShowInfo name={name} posi={posi} />
      <ShowArea />
    </Layout>
  );
}
  

export default CurrentWeatherEachCity;

/*const CurrentInfo = { ...data, coord: { ...data.coord }, 
                weather: {...data.weather}, main: {...data.main ,temp: celsius, humidity: NewHumidity}, 
                wind:{...data.wind},  clouds: {...data.clouds}, sys: {...data.sys} };*/