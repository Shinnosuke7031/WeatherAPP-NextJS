import React from 'react';
import Link from 'next/link';

import KantoRegion from '../area/KantoRegion';
import TouhokuRegion from  '../area/TouhokuRegion';
import ChubuRegion from '../area/ChubuRegion';
import KinkiRegion from '../area/KinkiRegion';
import ChugokuRegion from '../area/ChugokuRegion';
import ShikokuRegion from '../area/ShikokuRegion';
import KyushuRegion from '../area/KyushuRegion';
import Hokkaido from '../area/Hokkaido';
import Okinawa from '../area/Okinawa';


import styles from '../styles/animation.module.css';

const ShowArea: React.FC = () => {

  return (
    <div className="container">      
      <ul>
        <li className={`region`} style={{padding: "0 10px 0 0", margin: "0 10px 0 1.5px"}}><Link href="/hokkaido"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>北海道</a></Link></li>
        {Hokkaido.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kanto"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>関東</a></Link></li>
        {KantoRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/touhoku"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>東北</a></Link></li>
        {TouhokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/chubu"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>中部</a></Link></li>
        {ChubuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kinki"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>近畿</a></Link></li>
        {KinkiRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/chugoku"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>中国</a></Link></li>
        {ChugokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/shikoku"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>四国</a></Link></li>
        {ShikokuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/kyushu"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>九州</a></Link></li>
        {KyushuRegion.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      <ul style={{borderTop: "1px solid black"}}>
        <li className="region"><Link href="/okinawa"><a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`}>沖縄</a></Link></li>
        {Okinawa.map((city)=>(
          <li key={city.id}>
            <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={`${city.name} ${styles.show_line_from_left} ${styles.change_color_from_left}`}>{city.show}</a></Link>
          </li>
        ))}
      </ul>
      
    
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 10px;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
      }
      a {
        display: inline-block;
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
        width: 70%;
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