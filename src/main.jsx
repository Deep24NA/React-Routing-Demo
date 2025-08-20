import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, ContactUs, Github, Home ,User  , gitInfoProvider} from './components/index.js'


// how to create a router ? 
// there is a 2 ways to create a router
//1. Createbrowserrouter method by only passing an array

// const router = createBrowserRouter([ // this router were create a routing paths and tree like structure
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<ContactUs/>
//       }
//     ]
//   }
// ]) // it always took a array and we pass objects where to render


// 2nd method passing the method of createRoutesFromElement

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<ContactUs/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route path='github' element = {<Github/>} loader={gitInfoProvider} />
      {/* the loader is use to handles the api in smooth manner when it use api and behind the scence it work to fetch the data */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> {/* Whenever the React Router has been use we always sety a Router Provider anad also this Router Provider took a Prop which "router={router }" */}
  </StrictMode>,
)
