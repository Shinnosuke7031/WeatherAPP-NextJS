import Link from 'next/link';
import {FC} from 'react'

const Nav: FC = () => {
  return (
    <div>
      <Link href="/"><a><span>Home</span></a></Link>
      <Link href="/ja-weather"><a><span>全国</span></a></Link>
      <Link href="/weather"><a><span>関東</span></a></Link>
      

      <style jsx>{`
        div {
          display: flex;
        }
        a {
          margin: 0 10px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Nav;