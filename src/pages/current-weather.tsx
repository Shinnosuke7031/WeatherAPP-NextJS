import Layout from '../components/MyLayout'
import Link from 'next/link'

//const KantoRegion = [Tokyo, Tochigi];

const CurrentWeather = (props) => (
  <Layout>
    <h1>現在の気象情報</h1>

    <div>
      <Link href="/weather">
        <a>東京</a>
      </Link>
    </div>
    
    <style jsx>{`
      h1 {
        margin: 30px auto;
        width: 500px;
        text-align: center;
      }
      div {
        margin: 0 auto;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        width: 50px;
        text-decoration: none;
        color: black;
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

export default CurrentWeather;