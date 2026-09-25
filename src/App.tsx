import { useDispatch } from 'react-redux'
import './App.css'
import Router from './router/Router'
import { useEffect } from 'react'
import { GetCurrentUserThunk } from './redux/reducers/authSlice'
import type { AppDispatch } from './redux/store'
import { GetMyPermissionsThunk } from './redux/reducers/permissionsSlice'
import { GetCars } from './api/carsApi'

function App() {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(GetCurrentUserThunk())
    dispatch(GetMyPermissionsThunk())
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default App
