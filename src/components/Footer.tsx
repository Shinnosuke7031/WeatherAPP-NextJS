import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Footer = () => (
    <div>
      <a href="https://shinnosuke7031.github.io/Portfolio_with_React/" target="_blank" rel="noopener noreferrer">My Portfolio Site</a>

      <style jsx>{`
        div {
          width: 100%;
          height: 50px;
          margin: 0 auto;
          padding: 10px 0;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 5px black double;
        }
        a {
          color: black;
        }
      `}</style>
    </div>
);

export default Footer;
