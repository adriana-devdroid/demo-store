
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './pages/NavigationBar/components/NavigationBar.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <NavigationBar/>
    <div id="detail">
      <Outlet/>
    </div>
      
    </>
  )
}

export default App
