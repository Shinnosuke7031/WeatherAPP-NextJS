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
      }
      .box {
        border: 1px solid black;
        padding: 10px;
        margin: 0 10px;
        height: 100%;
      }
      .nav {
        border: 1px solid black;
        padding: 10px;
        margin: 3px 10px;
        height: 30px;
      }
    `}</style>
    <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
                       "Hiragino Sans", Meiryo, sans-serif; 
        }
      `}</style>

  </div>
)

export default Layout;
