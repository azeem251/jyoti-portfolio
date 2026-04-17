

import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Partical } from './components/Partical';
import Sidebar from './components/Sidebar/Sidebar';
import './responsive.css';
function App() {
// scroll to top functionality


  return (
    <>

      <div className='___wrapper'>
        <Header />
        <Sidebar />
        <Main />
        <Partical />
        <Footer/>
      </div>
    </>
  )
}

export default App
