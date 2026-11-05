import { Route, Routes } from 'react-router-dom'
import BlackFriday from './pages/BlackFriday'
import BlackFridayPromo from './pages/BlackFridayPromo'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Página 1: captação de leads para a abertura da Black Friday */}
      <Route path="/black-friday" element={<BlackFriday />} />
      {/* Página 2: oferta / planos da Black Friday */}
      <Route path="/black-friday/promo" element={<BlackFridayPromo />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
