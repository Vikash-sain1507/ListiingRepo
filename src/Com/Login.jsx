
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const generateToken = () => {
        let data = new Date().toISOString();
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const randomIndex = Math.floor(Math.random() * characters.length);
        const combinedString = data + 'vikash' + randomIndex;
        return combinedString;
    }

    const [loginVal, setLoginVal] = useState({
        email: "",
        password: "",
        jwtToken: generateToken()
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginVal({
            ...loginVal,
            [name]: value
        });
    };

    const handleData = () => {
        const { email, password } = loginVal;

        if (email === '' || password === '') {
            toast.error('Email and password cannot be empty!', {
                position: "top-center",
            });
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("useryoutube"));
        const user = storedUsers?.find(user => user.email === loginVal?.email && user.password === loginVal?.password);

        if (user) {
            toast.success('Login successful!', {
                position: "top-center",
            });
            console.log("Login successful!");
            navigate("/form");
        } else {
            toast.error('Invalid email or password!', {
                position: "top-center",
            });
        }

        if (user) {
            const jwtToken = generateToken();
            const newData = { email: loginVal.email, password: loginVal.password, jwtToken: jwtToken };
            localStorage.setItem("vikashDetails", JSON.stringify(newData));
            setLoginVal(null);
            navigate("/feed", { replace: true });
        }
    };

    return (
        <div style={{
            position: "absolute",
            top: "100px",
            left: "200px",
            width: "1000px",
            height: "600px"
        }}>
            <div style={{ position: "relative", top: "30px", left: "100px" }}>
                <img src='https://img.freepik.com/premium-vector/digital-illustration-man-demonstrating-online-authentication-large-tablet-display_941526-3499.jpg?w=340' />
            </div>
            <div style={{ position: "relative", bottom: "250px", left: "300px", textAlign: "center" }} className="container mt-3 min-h-screen">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h1 className='text-center h-9'>Login</h1>
                        <Form className='bg-#ffffff-100 max-w-fit m-auto p-10 border-2 border-dashed border-sky-600'>
                            <Form.Group className="mb-3 col-lg-6 p-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    className='p-1 border-double border-4 border-sky-500'
                                    name='email'
                                    onChange={handleInputChange}
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 p-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    className='p-1 border-double border-4 border-sky-500'
                                    name='password'
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className='col-lg-6 p-2'
                                onClick={handleData}
                                style={{ background: "rgb(67, 185, 127)" }}
                                type="button"
                            >
                                Submit
                            </Button>
                            <p className='mt-3 text-center'>Don't have an account? <span><NavLink to="/signup">Sign Up</NavLink></span></p>
                        </Form>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;

