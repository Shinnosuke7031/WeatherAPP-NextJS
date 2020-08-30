import Link from 'next/link';
import {FC} from 'react'

const Nav: FC = () => {
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/hokkaido"><a>北海道</a></Link>
      <Link href="/ja-weather"><a>全国</a></Link>
      <Link href="/touhoku"><a>東北</a></Link>
      <Link href="/chubu"><a>中部</a></Link>
      <Link href="/kanto"><a>関東</a></Link>
      <Link href="/kinki"><a>近畿</a></Link>
      <Link href="/chugoku"><a>中国</a></Link>
      <Link href="/kyushu"><a>九州</a></Link>
      <Link href="/okinawa"><a>沖縄</a></Link>
      

      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        a {
          margin: 0 20px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #05c;
        }
      `}</style>
    </div>
  );
};

export default Nav;