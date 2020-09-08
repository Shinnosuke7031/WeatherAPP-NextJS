import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';
import {FC} from 'react';

const Aboutme: FC = () => (
  <Layout>

    <Head>
      <title key="title"> Weather Information </title>
    </Head>

    <h1>このサイトについて</h1>

    <div className="text">
      <p>これまで、主にフロントエンドのインプット/アウトプットをしてきました。</p>
      <p>Reactを学んでいくうちに<span style={{textDecoration: "underline"}}>Next.js</span>を知って魅力に惹かれていき、インプットを始めました。</p>
      <p>このサイトは、<span style={{textDecoration: "underline"}}>Next.js</span>を使用した<span style={{color: "red"}}>初めてのアウトプット</span>です。</p>
      <p>気象情報を表示するページには、<span style={{color: "red"}}>動的ルーティング</span>を使用しています。</p>
      <p>データ取得はフロント側で行い、キャッシュや自動で再fetchする機能をもつ<span style={{color: "red"}}>SWR</span>というhooksを利用しています。</p>
      <p>他の<a href="https://shinnosuke7031.github.io/Portfolio_with_React/" target="_blank" rel="noopener noreferrer" >アウトプット</a>も見ていただけると幸いです。</p>
    </div>



    <Link href="/"><a className="back">戻る</a></Link>
    
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
        text-align: center;
      }
      div {
        width: 50%;
        margin: 0 auto;
        text-decoration: none;
        display: flex;
        flex-direction: column;
      }
      p a {
        color: #05c;
      }
      img {
        position: absolute;
        left: 100px;
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

export default Aboutme;