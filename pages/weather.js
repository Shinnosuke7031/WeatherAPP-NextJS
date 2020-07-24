import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import API_KEY from './keys';

const Weather = (props) => (
    <Layout>
        <h1>Weather Information </h1>
        <div>
            <h2>現在の気象情報</h2>
            <p>温度 : {props.show.main.temp}℃ </p>
            <p>湿度 : {props.show.main.humidity}% </p>
        </div>
       
    </Layout>
);

Weather.getInitialProps = async function() {
    const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=" + API_KEY);
    const data = await res.json();
    const celsius = (data.main.temp - 273.15).toFixed(1); //ケルビンを摂氏に変換 //小数1桁
    const NewHumidity = data.main.humidity.toFixed(1); //小数1桁
    const show = { ...data, coord: { ...data.coord }, 
                    weather: {...data.weather}, main: {...data.main ,temp: celsius, humidity: NewHumidity}, 
                    wind:{...data.wind},  clouds: {...data.clouds}, sys: {...data.sys} };
    //console.log(show);
    return { show };
  }

export default Weather;
