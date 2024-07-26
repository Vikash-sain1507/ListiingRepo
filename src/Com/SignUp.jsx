import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const New = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        
        password: ""
    })



    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
     


        const { value, name } = e.target;
       


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email,  password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
          toast.success('data added succesfully',{
            position: "top-center",
          });
            console.log("data added succesfully");
            New("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <div style={{
            position:"absolute", 
            top:"100px", 
            left:"200px", 
       
            width:"1000px", 
            height:"600px" 
            }}>
            <div style={{position:"relative",top:"30px", left:"100px"}}><img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph'/></div>
     
            <div style={{ position:"relative", bottom:"250px", left:"300px",textAlign:"center" }} 
            className="  container mt-3 min-h-screen">
                
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h1 className='text-center h-9'>Sign Up</h1>
                        <Form className='bg-#ffffff-100 max-w-fit m-auto  p-10  border-2 border-dashed border-sky-600  ' >
                            <Form.Group className="mb-3 col-lg-6 p-3 " controlId="formBasicEmail">

                                <Form.Control type="text" className='p-1 border-double border-4  border-sky-500 ' name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 p-3" controlId="formBasicEmail">

                                <Form.Control type="email" className='p-1 border-double border-4  border-sky-500 ' name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6 p-3" controlId="formBasicPassword">

                                <Form.Control type="password" className='p-1 border-double border-4  border-sky-500 'name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6 p-2' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                            <p className='mt-3 text-center'>Already Have an Account <span><NavLink to="/login">login</NavLink></span> </p>
                        </Form>
                        
                    </div>
                   
                </section>
                <ToastContainer />
            </div>
          
        </div>
    )
}

export default SignUp


