
import { Header } from './components/Header/Header.jsx' 
import { Outlet } from 'react-router'


function App() {
 

  return (
    <>
    <Header/>
    <div className='flex justify-center'>
      <Outlet/>
    </div>
    </>
  )
}

export default App
