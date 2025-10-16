import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Main } from './components/main'
import { Articals } from './components/acrticals'

const local = false
const prefix = local ? "" : "ha_cicd"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={`${prefix}/`}>Main</Link></li>
          <li><Link to={`${prefix}/articals`}>Articals</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="articals" element={<Articals />} />
      </Routes>
    </>
  )
}

export default App
