import React from 'react';
import Link from 'next/link';

import KantoRegion from '../api/KantoRegion';
import TouhokuRegion from  '../api/TouhokuRegion';
import ChubuRegion from '../api/ChubuRegion';
import KinkiRegion from '../api/KinkiRegion';
import ChugokuRegion from '../api/ChugokuRegion';
import ShikokuRegion from '../api/ShikokuRegion';
import KyushuRegion from '../api/KyushuRegion';
import Hokkaido from '../api/Hokkaido';
import Okinawa from '../api/Okinawa';


const ShowArea: React.FC = () => {

  return (
    <div className="container">      
      <ul>
        <li className="region" style={{padding: "0 10px 0 0", margin: "0 10px 0 1.5px"}}><Link href="/kanto"><a>北海道</a></Link></li>
        {Hokkaido.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>関東</a></Link></li>
        {KantoRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>東北</a></Link></li>
        {TouhokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>中部</a></Link></li>
        {ChubuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>近畿</a></Link></li>
        {KinkiRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>中国</a></Link></li>
        {ChugokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>四国</a></Link></li>
        {ShikokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>九州</a></Link></li>
        {KyushuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a>沖縄</a></Link></li>
        {Okinawa.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      
    
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 10px;
        margin: 0;
        display: flex;
      }
      a {
        display: inline-block;
        color: black;
        text-decoration: none;
      }
      li {
        margin: 0 10px 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li a {
        color: #05c;
      }
      .container {
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid black;
      }
      .region  {
        padding-right: 18px;
        border-right: 1px solid black;
      }
      
    `}</style>
    </div>
  );
};

export default ShowArea;