import Layout from '../components/MyLayout';
import ShowArea from '../components/ShowArea';
import ShikokuRegion from '../area/ShikokuRegion';
import Link from 'next/link';
import Head from 'next/head';
import {FC} from 'react';

interface TypeKanto {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}

const Weather: FC = () => (
  <Layout>

    <Head>
      <title key="title"> 四国の気象情報 </title>
    </Head>

    <h1>四国の気象情報</h1>

    <div className="map">
      <img src="/map-shikoku.png" width="300px" height="300px" />
      <ul>
        {ShikokuRegion.map((city)=>(
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
        list-style-type: none;
      }
      .Tokushima {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 90px;
        left: 340px;
      }
      .Kochi {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 160px;
        left: 215px;
      }
      .Takamatsu {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50px;
        left: 290px;
      }
      .Matsuyama {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 130px;
        left: 135px;
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

export default Weather;