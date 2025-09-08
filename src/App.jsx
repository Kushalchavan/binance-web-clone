import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-3 md:px-12 lg:px-18 dark:bg-gray-900">
        <Hero/>
      </div>
    </>
  )
}
export default App