import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';
import {FC} from 'react';

interface TypeJa {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}

const KantoRegion: TypeJa[] = [
                                  {id: 1850147, name: 'Tokyo', show: '東京', lat_lon: '&lat=35.681236&lon=139.767125'},
                                  {id: 2128295, name: 'Sapporo', show: '札幌', lat_lon: '&lat=43.064171&lon=141.346939'},
                                  {id: 1855431, name: 'Niigata', show: '新潟', lat_lon: '&lat=37.902222&lon=139.023605'},
                                  {id: 2111149, name: 'Sendai', show: '仙台', lat_lon: '&lat=38.26889&lon=140.871933'},
                                  {id: 1860243, name: 'Kanazawa', show: '金沢', lat_lon: '&lat=36.59444&lon=136.625565'},
                                  {id: 1862415, name: 'Hiroshima', show: '広島', lat_lon: '&lat=34.396271&lon=132.459366'},
                                  {id: 1856035, name: 'Naha', show: '那覇', lat_lon: '&lat=26.2125&lon=127.681107'},
                                  {id: 1859146, name: 'Kouchi', show: '高知', lat_lon: '&lat=33.559719&lon=133.531113'},
                                  {id: 1853908, name: 'Osaka', show: '大阪', lat_lon: '&lat=35.950001&lon=137.266663'},
                                  {id: 1856057, name: 'Nagoya', show: '名古屋', lat_lon: '&lat=35.181469&lon=136.906403'},
                                  {id: 1863967, name: 'Fukuoka', show: '福岡', lat_lon: '&lat=33.606392&lon=130.41806'},
                                  {id: 1860827, name: 'Kagoshima', show: '鹿児島', lat_lon: '&lat=31.560181&lon=130.558136'},
                                  {id: 2113126, name: 'Akita', show: '秋田', lat_lon: '&lat=39.716671&lon=140.116669'},
                                ];

const CurrentWeather: FC = () => (
  <Layout>

    <Head>
      <title key="title"> 全国の気象情報 </title>
    </Head>

    <h1>全国の気象情報</h1>

    <div className="map">
      <img src="/map-japan.png" width="300px" height="300px"/>
      <ul>
        {KantoRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
    </div>

    <Link href="/"><a className="back">戻る</a></Link>
    
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
        margin: 0 auto;
        margin-top: 50px;
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