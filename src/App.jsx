import Header from "./Component/Header"
import Body from "./Component/Body"
import Footer from "./Component/Footer"

function App() {

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-8 lg:overflow-hidden">
       <Header/>
       <Body/>
       <Footer/>
      </div>
    </>
  )
}

export default App
