import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Weather Information</a>
        </Link>
        <style jsx>{`
        div {
          width: 100vw;
          height: 80px;
          background-image: url(/sky.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          display: inline-block;
          text-align: center;
          font-size: 40px;
          width: 400px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
        }
        `}</style>
    </div>
)

export default Header
