import React, { useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { json, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const history = useNavigate();

    const [input, setInput] = useState({

        email: "",
        
        password: ""

    })

   

    const [data,setData] = useState([]);
    console.log(input);

    const getdata = (e) => {
        // console.log(e.target.value


        const { value, name } = e.target;
  


        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();
        const getuserArr= localStorage.getItem("userInput")
        

        const {email,password } = input;

         if(email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } 
         else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',
             {
                position: "top-center",
            });
        } else {
           
             if(getuserArr && getuserArr.length){
                const userdata=JSON.parse(getuserArr);
                const userlogin =userdata.filter((el,i)=>{
                    return el.email===email && el.password===password;
                }
                );
                if(userlogin.length===0){
                    toast.error("Invalid details")
                }
                else{
                    toast.success("User login succes")
                }
                
             }
        }

    }
    return(
        <>
        <div className="container mt-3">
            <section className='d-flex justify-content-center'>
                <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Sign In</h3>
                    <Form >
                       
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Login
                        </Button>
                    </Form>
                    
                </div> 
            </section>
            <ToastContainer />
        </div>
    </>
      
    )
}
export default Login;