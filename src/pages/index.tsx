import Layout from '../components/MyLayout';
import ShowArea from '../components/ShowArea';
import NarrowDown from '../components/NarrowDown';

import Head from 'next/head';

//const KantoRegion = [Tokyo, Tochigi];

const Index = () => (
  <Layout>
    <Head>
      <title key="title">Weather Information</title>
    </Head>
    <h1>Weather Information</h1>
    <NarrowDown />
    <p>このサイトは、Next.jsのアウトプットとして作成しています。</p>
    <p>今後も改善、および対応エリアやコンテンツの追加を行います。</p>

    <ShowArea />

    
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
        text-align: center;
      }
      p {
        text-align: center;
      }
      div {
        color: black;
        margin: 80px auto;
        display: flex;
        justify-content: center;
      }
      a {
        margin: 0 10px 0 10px;
        font-size: 20px;
        color: black;
      }
      .subtitle {
        margin: 0 10px 0 10px;
        font-weight: bold;
        font-size: 20px;
      }
    `}</style>
  </Layout>
)

export default Index;