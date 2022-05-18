// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Playground from '../pages/Playground'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Playground />} />
        </Routes>
      </Router>
    </>
  )
}
