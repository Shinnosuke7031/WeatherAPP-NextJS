import Layout from '../components/MyLayout';
import ShowArea from '../components/ShowArea';
import JapanArea from '../area/JapanArea';
import Link from 'next/link';
import Head from 'next/head';
import {FC} from 'react';

interface TypeJa {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}

const CurrentWeather: FC = () => (
  <Layout>

    <Head>
      <title key="title"> 全国の気象情報 </title>
    </Head>

    <h1>全国の気象情報</h1>

    <div className="map">
      <img src="/map-japan.png" width="300px" height="300px"/>
      <ul>
        {JapanArea.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
    </div>

    <Link href="/"><a className="back">戻る</a></Link>

    <ShowArea />
    
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
        text-align: center;
      }
      div {
        margin: 0 auto;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        width: 50px;
        color: black;
      }
      img {
        position: absolute;
        left: 100px;
      }
      .map {
        margin: 30px auto;
        width: 500px;
        height: 300px;
        position: relative;
      }
      .map ul {
        list-style-type: none
      }
      .Tokyo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 190px;
        left: 280px;
      }
      .Nagoya {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 215px;
        left: 250px;
      }
      .Osaka {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 230px;
        left: 205px;
      }
      .Kouchi {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 245px;
        left: 160px;
      }
      .Naha {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 280px;
        left: 300px;
      }
      .Fukuoka {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 210px;
        left: 90px;
      }
      .Hiroshima {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 190px;
        left: 130px;
      }
      .Kanazawa {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 160px;
        left: 190px;
      }
      .Niigata {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 140px;
        left: 220px;
      }
      .Sendai {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 130px;
        left: 300px;
      }
      .Sapporo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40px;
        left: 240px;
      }
      .Kagoshima {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 270px;
        left: 80px;
      }
      .Akita {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 110px;
        left: 240px;
      }
      .back {
        font-size: 16px;
        color: black;
        margin: 50px auto;
        width: 80px;
        height: line-height;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Layout>
)

/*Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}*/

export default CurrentWeather;