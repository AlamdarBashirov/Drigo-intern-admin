import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../redux/store"
import { LogoutThunk } from "../../redux/reducers/authSlice"

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const logout = async () => {
        await dispatch(LogoutThunk()).unwrap()
    }
    return (
        <>
            <div>
                <h1>Home</h1>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default Home