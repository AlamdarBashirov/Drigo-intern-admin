import styles from './LoginPage.module.scss'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LoginThunk } from '../../../redux/reducers/authSlice';
import type { AppDispatch, RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.auth)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                await dispatch(LoginThunk(values)).unwrap()
                navigate("/verify-otp", {
                    state: {
                        username: values.username
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <div className={styles.loginSection}>
            <div className={styles.loginContainer}>
                <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
                    <h2>Welcome</h2>
                    <div className={styles.loginInputItem}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                    </div>
                    <div className={styles.loginInputItem}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <button type="submit" className={styles.submitLoginBtn}>Submit</button>
                    {error && <span className={styles.errorLine}>{error}</span>}
                </form >
            </div>
        </div>
    )
}

export default LoginPage