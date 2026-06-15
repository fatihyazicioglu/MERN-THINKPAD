import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CreatePage } from './pages/CreatePage'
import { NoteDetailPage } from './pages/NoteDetailPage'

function App() {
  return (
    
    <div>
      <button className='btn btn-outline' onClick={() => toast.error("Congrats!")}>Button</button>
      <Routes>
      
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/note/:id' element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}

export default App