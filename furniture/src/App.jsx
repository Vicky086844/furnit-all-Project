import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import Test from './component/Test'
function App() {

  return (
    <>
      <Header/>
      {/* <Test/> */}
      <Outlet/>
      <Footer/>     
    </>
  )
}

export default App
