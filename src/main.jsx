import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter} from 'react-router'
import { About } from './components/about/About.jsx'
import { RouterProvider } from 'react-router/dom'
import { Password } from './components/passwrod-generator/Password.jsx' 
import { Home } from './components/Home/Home.jsx'
import { PrivateRoute } from './routes/privateroute.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { Todo } from './components/todo/Todo.jsx'
import { GetGitHubData } from './components/github/Github.jsx'
import { Detail } from './components/detail/MyDetail.jsx'
import { Signup } from './components/signup/Signup.jsx'
import { Login } from './components/login/Login.jsx'
import { Currency } from './components/currency/Currency.jsx'


const Github = lazy(() => import('./components/github/Github.jsx'))
function ErrorFallback({ error }) {
  console.log("Error -->>>>>>>>>",error)
  return <div role="alert">Oops!! Something went wrong</div>;
}

let router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'github',
        loader: GetGitHubData,
        errorElement: <ErrorFallback />,
        element: 
          <PrivateRoute>
            <Suspense fallback={<div>Loading product data...</div>}>
                <Github/>
            </Suspense>
          </PrivateRoute>
      },
      {
        path: 'about',
        element: <About/>,
        children: [
          {
            path: '',
            element: <Detail/>
          },
          {
            path: 'todo',
            element: <Todo/>,
          }
        ]
      },
      {
        path: 'password',
        element:  
          <PrivateRoute>
            <Password/>
          </PrivateRoute>,
      },
      {
        path: 'todo',
        element: 
          <PrivateRoute>
            <Todo/>
          </PrivateRoute>,
      },
      {
        path: 'currency',
        errorElement: <ErrorFallback />,
        element: 
          <PrivateRoute>
            <Currency/>
          </PrivateRoute>,
      }
    ]
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'signup',
    element: <Signup/>
  }
])

//let router_ = createBrowserRouter(
//  createRoutesFromElements(
  //  <Routes>
    // <Route path= '/' element= {<App/>}>
       
    // </Route>
     
      //   <Route path= '/' element= {<App/>}>
      //     <Route path= 'password' element= {<Password/>}></Route>
      //     <Route loader={GetGitHubData} path= 'github' element= {<Github/>} ></Route>
      //      <Route path= 'home' element= {<Home/>}></Route>
      //     <Route path= 'about' element= {<About/>}></Route>
        
      // </Route>
      

    
    
 // )
//)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
)
