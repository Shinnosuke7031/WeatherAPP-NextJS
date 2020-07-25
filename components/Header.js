import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/weather">
          <a style={linkStyle}>Weather</a>
        </Link>
        <style jsx>{`
        div {
          width: 100%;
          height: 50px;
          background-color: beige;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }

        a {
          display: inline-block;
          text-align: center;
          font-size: 30px;
          width: 200px;
        }
        `}</style>
    </div>
)

export default Header
