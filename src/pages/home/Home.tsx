import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../redux/store"
import { LogoutThunk } from "../../redux/reducers/authSlice"
import Loading from "../../components/loading/Loading"
import ConfirmModal from "../../components/modals/confirmModal/ConfirmModal"
import { useState } from "react"

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const logout = async () => {
        await dispatch(LogoutThunk()).unwrap()
    }
    // const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div>
                <h1>Home</h1>
                <button onClick={logout}>Logout</button>
                {/* <ConfirmModal
                    isOpen={isOpen}
                    title="Delete Car"
                    onClose={() => setIsOpen(false)}
                    onConfirm={() => console.log("Confirmed")}
                >
                    Are you sure you want to delete this car?
                </ConfirmModal> */}
            </div>
        </>
    )
}

export default Home