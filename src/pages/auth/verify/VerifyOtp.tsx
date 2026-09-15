import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../redux/store';
import { GetCurrentUserThunk, VerifyOtpThunk } from '../../../redux/reducers/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation()
    const username = location.state?.username
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
                </div>
            </div>
        </>
    )
}

export default VerifyOtp