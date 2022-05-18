// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Playground from '../pages/Playground/Playground'
import Tutorial from '../pages/Tutorial/Tutorial'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Tutorial />} />
          <Route path='/playground' element={<Playground />} />
        </Routes>
      </Router>
    </>
  )
}
