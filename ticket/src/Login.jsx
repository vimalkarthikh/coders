import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number'
        ),
    }),
    onSubmit: values => {
     
      const users = [{ email: 'test@example.com', password: 'Pass1234!' }];

      const foundUser = users.find(
        user => user.email === values.email && user.password === values.password
      );

      if (foundUser) {
        toast("Login Successful")
        navigate('/movies')
        console.log('Login successful');
      } else {
        console.log('Invalid email or password');
      }
    },
  });

  return (
    <>
    <h1 className='text-center login-text mt-5 text-white'>Theater Seat</h1>
    <div className="card shadow mx-auto m-5" style={{
        maxWidth: '35rem',
       
      }}
      
>
      <div className="card-body">
        <h2 className="card-title text-center login-text">Login</h2>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              className="form-control log-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger text-center mt-2">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              className="form-control log-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger text-center mt-2">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit log-input" className="btn btn-primary w-100">
            Login
          </button><br />
          <p className='text-center mt-3'>Demo-Email:test@example.com &ensp;&ensp; Demo-PSW:Pass1234!</p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
