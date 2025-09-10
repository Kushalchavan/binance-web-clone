import Accordian from "./components/Accordian"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-3 md:px-22 lg:px-38 dark:bg-gray-900">
        <Hero/>
        <Download/>
        <Accordian/>
        <Footer/>
      </div>
    </>
  )
}
export default App