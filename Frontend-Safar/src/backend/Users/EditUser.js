import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
 
 const EditUser = () => {

    let navigate=useNavigate();
    const {id}=useParams();
    
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [userPhone,setUserPhone]=useState();
    const [userDestination,setUserDestination]=useState("");
    const [userCount,setUserCount]=useState(1);
    const [userNameB,setuserNameB]=useState("");
    const [userLeavingDate,setUserLeavingDate]=useState("");

    const onSubmit=async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8082/user/${id}`,
        {
            name : name,
            email : email,
            address : address,
            userPhone : userPhone,
            userDestination : userDestination,
            userCount : userCount,
            userNameB : userNameB,
            userLeavingDate : userLeavingDate
        });

        alert("User registration successfully");
        navigate("/booking");
        }catch(err){
            alert("User Registration failed");
        }
    }

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:8082/user/${id}`)
        setName(result.data.name);
        setUserDestination(result.data.userDestination);
        setEmail(result.data.email);
        setAddress(result.data.address);
        setUserPhone(result.data.userPhone);
        setUserCount(result.data.userCount);
        setuserNameB(result.data.userNameB);
        setUserLeavingDate(result.data.userLeavingDate);
        console.log(result.data);
    }


   return (
     <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Booking</h2>

                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={'text'}
                    className='form-control'
                    value={name}
                    onChange={(e)=>
                        setName(e.target.value)
                    }
                    placeholder="Enter the name "/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor='userDestination' className='form-label'>
                        Destination
                    </label>
                    <input
                    type={'text'}
                    value={userDestination}
                    onChange={(e)=>
                        setUserDestination(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter the userDestination "/>
                </div>

                <div className="mb-3">
                    <label htmlFor='email' className='form-label'>
                        Email 
                    </label>
                    <input
                    type={'text'}
                    value={email}
                    onChange={(e)=>
                        setEmail(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter your email address"/>
                </div>

                <div className="mb-3">
                    <label htmlFor='text' className='form-label'>
                        Address 
                    </label>
                    <input
                    type={'text'}
                    value={address}
                    onChange={(e)=>
                        setAddress(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter your address"/>
                </div>


                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        Phone
                    </label>
                    <input
                    type={'Number'}
                    className='form-control'
                    value={userPhone}
                    onChange={(e)=>
                        setUserPhone(e.target.value)
                    }
                    placeholder="Enter your phone "/>
                </div>


                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        GuestCount 
                    </label>
                    <input
                    type="number"
                    value={userCount}
                    onChange={(e)=>
                        setUserCount(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter no. of guests"/>
                </div>


                <div className="mb-3">
                    <label htmlFor='text' className='form-label'>
                        userNameB 
                    </label>
                    <input
                    type={'text'}
                    value={userNameB}
                    disabled="true"
                    onChange={(e)=>
                        setuserNameB(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter your email address"/>
                </div>


                <div className="mb-3">
                    <label htmlFor='text' className='form-label'>
                        Arrival Date 
                    </label>
                    <input
                    type={'text'}
                    value={userLeavingDate}
                    onChange={(e)=>
                        setUserLeavingDate(e.target.value)
                    }
                    className='form-control'
                    placeholder="Enter your email address"/>
                </div>








                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to="/booking">Cancel</Link>
                </form>
            </div>
        </div>
     </div>
   )
 }
 
 export default EditUser;
 