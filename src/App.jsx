import Download from "./components/Download"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-3 md:px-18 lg:px-32 dark:bg-gray-900">
        <Hero/>
        <Download/>
      </div>
    </>
  )
}
export default App