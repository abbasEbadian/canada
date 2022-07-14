import { useState } from 'react'

import Router from './pages';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/components/header.css';
import './styles/components/home.css';
import './styles/components/footer.css';
import './styles/components/centralized.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router></Router>
    </div>
  )
}

export default App
