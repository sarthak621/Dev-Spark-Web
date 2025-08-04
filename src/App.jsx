import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'

function App() {
 

  return (
    <>
      
      {/* creating the browser router > routes > route and making children */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}>
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    
    </>
  )
}

export default App
