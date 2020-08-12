import Layout from '../components/MyLayout';
import Link from 'next/link';
import {FC} from 'react';

interface TypeKanto {
  id: number;
  name: string;
  show: string;
}

const KantoRegion: TypeKanto[] = [
                                  {id: 1850147, name: 'Tokyo', show: '東京'},
                                  {id: 1849053, name: 'Utsunomiya', show: '宇都宮'},
                                  {id: 2111901, name: 'Mito', show: '水戸'},
                                  {id: 1857843, name: 'Maebashi', show: '前橋'},
                                  {id: 6940394, name: 'Saitama', show: 'さいたま'},
                                  {id: 1848354, name: 'Yokohama', show: '横浜'},
                                  {id: 2113015, name: 'Chiba', show: '千葉'},
                                ];

const CurrentWeather: FC = () => (
  <Layout>
    <h1>現在の気象情報</h1>

    <div className="map">
      <img src="/map-kanto.png" width="300px" height="300px"/>
      <ul>
        {KantoRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[id]" as={`/posts/${city.show}/${city.id}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
    </div>
    
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