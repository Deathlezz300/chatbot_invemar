import {Routes,Route,Navigate} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { EditPage } from './pages/EditPage'

export const App = () => {
  return (
    <Routes>

      <Route path='/' element={<MainPage/>}/>

      <Route path='edit' element={<EditPage/>}/>
      <Route path='/*' element={<Navigate to='/'/>}/>

    </Routes>
  )
}

