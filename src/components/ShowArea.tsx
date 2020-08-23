import React from 'react';
import Link from 'next/link';

import JapanArea from '../api/JapanArea';
import KantoRegion from '../api/KantoRegion';
import TouhokuRegion from  '../api/TouhokuRegion';


const ShowArea: React.FC = () => {

  return (
    <div className="container">      
      <ul>
        <li className="region"><Link href="/ja-weather"><a>全国</a></Link></li>
        {JapanArea.map((city)=>(
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