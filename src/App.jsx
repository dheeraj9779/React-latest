
import { Header } from './components/Header/Header.jsx' 
import { Outlet } from 'react-router'
import ThemeProvider from './context/themeProvider.js'


function App() {
 

  return (
    <>
    <ThemeProvider>
      <Header/>
      <div className='flex justify-center'>
        <Outlet/>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
