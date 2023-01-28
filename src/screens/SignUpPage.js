import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'
import { useFormik } from "formik";
import * as Yup from 'yup';

const signupSchema = Yup.object({
	full_name: Yup.string()
				.min(3, "Full Name must be at least 3 characters")
				.max(25).required("Please enter your full name"),
	designation: Yup.string().min(2).max(25).required("Please enter your designation"),
	phone_no: Yup.string().required("Please enter your Phone number"),
	user_name: Yup.string().min(5,"User Name must be at least 5 characters").max(25).required("Please enter your name"),
	password: Yup.string().min(8).required("Please enter your password"),
	cpassword: Yup.string()
    .required("Please Enter the confirm password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export default function SignUpPage() {

	const initialValues = {
		full_name: "",
		designation: "",
		phone_no: "",
		user_name: "",
		password: "",
		cpassword: "",
	};

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
		<div className="drop" style={{height: '600px', width: "600px"}}>
			<div className="content">
				<h2 className='animate__heartBeat'>Sign Up</h2>
				<form action="" onSubmit={handleSubmit}>
					<InputField
						type="text"
						name="full_name"
						placeholder="Full Name"
						value={values.full_name}
						onChange={handleChange}
						onBlur={handleBlur}
						maxLength="25"
					/>
					{(touched.full_name && errors.full_name)&&(
						<p style={{color: "red", fontSize: 13}}>{errors.full_name}</p>
					)}

					<InputField
						type="text"
						name="designation"
						placeholder="Designation"
						value={values.designation}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{(touched.designation && errors.designation)&&(
						<p style={{color: "red", fontSize: 13}}>{errors.designation}</p>
					)}

					<InputField
						type="text"
						name="phone_no"
						placeholder="Phone Number"
						value={values.phone_no}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{(touched.phone_no && errors.phone_no) && (
						<p style={{color: "red", fontSize: 13}}>{errors.phone_no}</p>
					)}

					<InputField
						type="text"
						name="user_name"
						placeholder="User Name"
						value={values.user_name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{(touched.user_name && errors.user_name) && (
						<p style={{color: "red", fontSize: 13}}>{errors.user_name}</p>
					)}

					<InputField
						type="password"
						name="password"
						placeholder="Password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{(touched.password && errors.password) && (
						<p style={{color: "red", fontSize: 13}}>{errors.password}</p>
					)}

					
					<InputField
						type="password"
						name="cpassword"
						placeholder="Confirm Password"
						value={values.cpassword}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{(touched.cpassword && errors.cpassword) && (
						<p style={{color: "red", fontSize: 13}}>{errors.cpassword}</p>
					)}

					<InputField
						type="submit"
						value="Sign Up"
					/>					
					
				</form>
			</div>	
		</div>
		<Link to="/dashboard" className='btn'>Dashboard</Link>
	<Link to="/" className='btn signup'>Login</Link>
	</div>
  )
}
