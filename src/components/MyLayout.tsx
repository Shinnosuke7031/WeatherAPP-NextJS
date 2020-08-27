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
        width: 100vw;
      }
      .main {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100%;
        background-color: #EEEEEE;
      }
      .box {
        padding: 10px;
        margin: 20px 10px;
        height: 100%;
      }
      .nav {
        position: relative;
        width: 100%;
        margin: 0 auto;
        text-align: left;
        line-height: 1.22;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 10px 0 10px 0;
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
        div {
          margin: 0;
        }
        input, button, textarea, select {
          -webkit-appearance: none;
          -moz-appearance: none;
      }
      `}</style>

  </div>
)

export default Layout;
