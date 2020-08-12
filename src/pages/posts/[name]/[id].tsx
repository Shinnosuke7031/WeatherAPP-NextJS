import Layout from '../../../components/MyLayout';
import API_KEY from '../../../../keys/keys';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type TypeInfo = {
  temp: number;
  humidity: number;
  icon: string;
}

interface TypeProps {
  show: TypeInfo;
}

const test = (props: TypeProps) => {
  
  const router = useRouter();
  const ShowName = router.query.name;
  return (
    <Layout>
      <div className="container">
        <h1>現在の気象情報</h1>
        <div className="box">
            <h2>{ShowName}</h2>
            <div>
              <img src={`https://openweathermap.org/img/w/`+ props.show.icon + `.png` } />
            </div>
            <p>温度 : {props.show.temp}℃ </p>
            <p>湿度 : {props.show.humidity}% </p>
        </div>
        <Link href="/current-weather"><a className="back">戻る</a></Link>
      </div>
      
      <style jsx>{`
        h1 {
          margin: 30px auto;
          width: 500px;
          text-align: center;
        }
        .container {
          margin: 0 auto;
          width: 60%;
          text-align: center;
        }
        .box {
          border-top: 1px dotted silver;
          border-bottom: 1px dotted silver;
        }
        .back {
          font-size: 16px;
          color: black;
          display: inline-block;
          margin: 20px auto;
          width: 80px;
          height: line-height;
        }
      `}</style>

    </Layout>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  //const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=` + process.env.API_KEY + `&id=${id}`);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=` + API_KEY+ `&id=${id}`);
  const data = await res.json();
  const temp: number = data.main.temp - 273.15;
  const celsius: number = Math.floor((temp*100)/100); //ケルビンを摂氏に変換 //小数1桁
  const icon: string = data.weather[0].icon;
  const NewHumidity = Math.floor((data.main.humidity*100)/100); //小数1桁
  /*const show = { ...data, coord: { ...data.coord }, 
                  weather: {...data.weather}, main: {...data.main ,temp: celsius, humidity: NewHumidity}, 
                  wind:{...data.wind},  clouds: {...data.clouds}, sys: {...data.sys} };*/
  const show = { temp: celsius, humidity: NewHumidity, icon: icon};
  return { props: { show } };
}

export default test;
