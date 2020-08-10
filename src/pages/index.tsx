import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';

//const KantoRegion = [Tokyo, Tochigi];

const Index = (props) => (
  <Layout>
    <Head>
      <title key="title">Weather Information</title>
    </Head>
    <h1>Weather Information</h1>
    <p>このサイトは、Next.jsのアウトプットとして作成しました。</p>
    
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
        text-align: center;
      }
      p {
        text-align: center;
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