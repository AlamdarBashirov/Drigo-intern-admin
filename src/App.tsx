import { useDispatch } from 'react-redux'
import './App.css'
import Router from './router/Router'
import { useEffect } from 'react'
import { GetCurrentUserThunk } from './redux/reducers/authSlice'
import type { AppDispatch } from './redux/store'

function App() {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(GetCurrentUserThunk())
  }, [])
  return (
    <>
      <Router />
    </>
  )
}

export default App
