import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';

//const KantoRegion = [Tokyo, Tochigi];

const Index = () => (
  <Layout>
    <Head>
      <title key="title">Weather Information</title>
    </Head>
    <h1>Weather Information</h1>
    <p>このサイトは、Next.jsのアウトプットとして作成しました。</p>
    
    <div>
      <p className="subtitle">気象情報</p>
      <p className="subtitle"> : </p>
      <Link href="/ja-weather"><a>全国</a></Link>
      <Link href="/kanto"><a>関東</a></Link>
    </div>
    
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