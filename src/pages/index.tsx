import Layout from '../components/MyLayout'
import Link from 'next/link'

//const KantoRegion = [Tokyo, Tochigi];

const Index = (props) => (
  <Layout>
    <h1>現在の気象情報</h1>
    <Link href="/weather">
      <a>Tokyo</a>
    </Link>
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
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