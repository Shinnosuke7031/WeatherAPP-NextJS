import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a><span>Weather Information</span></a>
        </Link>
        <style jsx>{`
        div {
          width: 100%;
          height: 100px;
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
          color: black;
          display: inline-block;
          text-align: center;
          font-size: 40px;
          width: 400px;
          height: 100%;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        `}</style>
    </div>
)

export default Header
