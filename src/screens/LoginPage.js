import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import { useFormik } from "formik";
import * as Yup from 'yup';
import Logo from '../images/logo.png';
import './LoginSign.css'

const loginSchema = Yup.object({
	username: Yup.string().min(5).max(25).required("Please enter your name"),
	password: Yup.string().min(8).required("Please enter your password"),
});

export default function LoginPage() {
	const navigate = useNavigate();

	const initialValues = {
		username: "",
		password: "",
	};

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
		navigate("/dashboard");
        action.resetForm();
      },
    });

  return (
	<div className="container">
		<div className="drop">
			<div className="content">
				<img src={Logo} style={{height: "150px", width: "150px"}} alt="logo.png"/>
				<h2 className='animate__heartBeat'>Login</h2>
				<form action="" onSubmit={handleSubmit}>
					<InputField
						type="text"
						name="username"
						placeholder="username"
						value={values.username}
						onChange={handleChange}
						onBlur={handleBlur}
						/>
						{(touched.username && errors.username)&&(
							<p style={{color: "red", fontSize: 13}}>{errors.username}</p>
						)}

					<InputField
						type="password"
						name="password"
						placeholder="password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						/>
						{(touched.password && errors.password )&&(
							<p style={{color: "red", fontSize: 13}}>{errors.password}</p>
						)}

					<InputField
						type="submit"
						value="Login"
					/>					
					
				</form>
		</div>	
		</div>
		<Link to="/dashboard" className='btn'>Dashboard</Link>
	<Link to="/signup" className='btn signup'>Signup</Link>
	</div>
  )
}
