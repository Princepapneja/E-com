import Header from "../components/header-footer/header"
import Footer from "../components/header-footer/footer";

const Theme = ({pageContent}) => {
  return (
    <>
      <Header/>
      <main className="specical_margin">
        {pageContent}
      </main>
      <Footer/>
    </>
  )
}

export default Theme;