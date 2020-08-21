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
      <Link href="/ja-weather"><a><span>全国</span></a></Link>
      <Link href="/weather"><a><span>関東</span></a></Link>
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

/*Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}*/

export default Index;