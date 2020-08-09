import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
    
    <style jsx>{`
      .container {
        margin: 0 auto;
        width: 100%;
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
