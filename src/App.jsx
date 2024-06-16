import Navbar from "./components/Navbar/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"
import Footer from "./components/Footer/Footer"
import Features from "./pages/Features/Features"
import Pricing from "./pages/Pricing/Pricing"
import Blog from "./pages/Blog/Blog"
import LearnCrypto from "./components/LearnCrypto/LearnCrypto"
const App=()=>{
  return(
    <div className="app">
            <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/learn-crypto" element={<LearnCrypto/>} />




      </Routes>
      <Footer/>
    </div>
  )
}
export default App