import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { LoginThunk } from '../../../redux/reducers/authSlice';
import type { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>(); 
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
           try {
            await dispatch(LoginThunk(values)).unwrap()
            navigate("/verify-otp",{
                state:{
                    username: values.username
                }
            })
           } catch (error) {
            console.log(error);
           }
        },
    });
    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage