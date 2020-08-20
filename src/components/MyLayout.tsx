import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    <div className="container">
      <Header />
      <div className="main">
        <div className="nav">
          <Nav />
        </div>
        <div className="box">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
    
    <style jsx>{`
      .container {
        margin: 0 auto;
        width: 100%;
      }
      .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #EEEEEE;
      }
      .box {
        border: 1px solid black;
        padding: 10px;
        margin: 20px 10px;
        height: 100%;
      }
      .nav {
        border: 1px solid black;
        padding: 10px;
        margin: 20px 10px 0 10px;
        height: 30px;
      }
    `}</style>
    <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
                       "Hiragino Sans", Meiryo, sans-serif;
          background-color: #EEEEEE;
        }
        .box17{
          margin:2em 0;
          position: relative;
          padding: 0.5em 1.5em;
          border-top: solid 2px black;
          border-bottom: solid 2px black;
        }
        .box17:before, .box17:after{
          content: '';
          position: absolute;
          top: -10px;
          width: 2px;
          height: -webkit-calc(100% + 20px);
          height: calc(100% + 20px);
          background-color: black;
        }
        .box17:before {left: 10px;}
        .box17:after {right: 10px;}
        .box17 p {
          margin: 0; 
          padding: 0;
        }
        div {
          margin: 0;
        }
      `}</style>

  </div>
)

export default Layout;
