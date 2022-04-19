import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
