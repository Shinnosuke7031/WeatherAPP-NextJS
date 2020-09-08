import Layout from '../components/MyLayout';
import ShowArea from '../components/ShowArea';
import KantoRegion from '../area/KantoRegion';
import Link from 'next/link';
import Head from 'next/head';
import {FC} from 'react';

interface TypeKanto {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}

const CurrentWeather: FC = () => (
  <Layout>

    <Head>
      <title key="title"> 関東の気象情報 </title>
    </Head>

    <h1>関東の気象情報</h1>

    <div className="map">
      <img src="/map-kanto.png" width="300px" height="300px"/>
      <ul>
        {KantoRegion.map((city)=>(
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
      .Tokyo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 180px;
        left: 200px;
      }
      .Utsunomiya {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 245px;
      }
      .Mito {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 89px;
        left: 305px;
      }
      .Maebashi {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 80px;
        left: 158px;
      }
      .Saitama {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 145px;
        left: 200px;
        width: 70px;
      }
      .Yokohama {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 220px;
        left: 208px;
      }
      .Chiba {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 190px;
        left: 300px;
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