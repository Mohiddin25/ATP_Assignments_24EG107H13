import {createBrowserRouter,RouterProvider} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmp from './components/CreateEmp'
import ListOfEmp from './components/ListOfEmp'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'

function App() {
  const routerObj=createBrowserRouter([
        {
          path:"/",
          element:<RootLayout/>,
          children:[
            {path: "",element:<Home/>},
            {path: "create-emp",element:<CreateEmp/>},
            {path: "list",element:<ListOfEmp/>},
            {path: "emp",element:<Employee/>},
            {path: "emp-edit",element:<EditEmployee/>},
          ],
        },
      ])
  return (
      <RouterProvider router={routerObj}/>

      // <div className='grid lg:grid-cols-2'>
      //   <EditCounter1/>
      //   <EditCounter2/>
      //   <EditCounter3/>
      //   <EditCounter4/>
      // </div>
  )
}

export default App