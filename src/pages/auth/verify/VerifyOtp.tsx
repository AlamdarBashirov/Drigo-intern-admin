import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../redux/store';
import { GetCurrentUserThunk, VerifyOtpThunk } from '../../../redux/reducers/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetMyPermissionsThunk } from '../../../redux/reducers/permissionsSlice';

const VerifyOtp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation()
    const username = location.state?.username

    const {error} = useSelector((state:RootState) => state.auth)

    const formik = useFormik({
        initialValues: {
            code: '',
            username
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                await dispatch(VerifyOtpThunk(values)).unwrap()
                console.log("ugurludur");
                await dispatch(GetCurrentUserThunk()).unwrap()
                await dispatch(GetMyPermissionsThunk()).unwrap();
                navigate("/")
            } catch (error) {
                console.log(error);
                
            }
        },
    });
    return (
        <>
            <div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="code">Otp Code</label>
                        <input
                            id="code"
                            name="code"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.code}
                        />
                        <button type="submit">Verify</button>
                    </form>
                    {error && <span>{error}</span>}
                </div>
            </div>
        </>
    )
}

export default VerifyOtp