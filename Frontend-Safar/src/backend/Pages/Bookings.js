import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBarBook from "../Layout/NavBarBook";
import { userLoggedIn } from "../../signup-page/Login";

const Bookings = () => {
  const [users, setUsers] = useState([]);

  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    // username = "anem";

    const result = await axios.get(`http://localhost:8082/users/${userLoggedIn}`);
    setUsers(result.data);
    console.log(userLoggedIn);
    
    // console.log(result.data);
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8082/user/${id}`)
    alert("Booking Deleted Successfully")
    loadUsers();
  }

  return (
    <div className="container " style={{margin:"auto",marginTop:"5rem",marginBottom:"50px"}}>
      <NavBarBook/>
      <div className="py-4">
        <table className="mx-10 table table-bordered border shadow">
          <thead>
            <tr >
              <th scope="col">Booking Id</th>
              <th scope="col">Name</th>
              <th scope="col">Destination</th>
              <th scope="col">userName</th>
              <th scope="col">Departure</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {

              
              // if(userLoggedIn==="bautocrats"){
                return (
                  (<tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td >{user.name}</td>
                  <td >{user.userDestination}</td>
                  <td >{user.userNameB}</td>
                  <td >{user.userLeavingDate}</td>
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2" style={{color:"black"}} to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=> deleteUser(user.id)}
                    >Delete</button>
                  </td>
                </tr>)
                )
              // }
              
              //  else if(user.userNameB===userLoggedIn){
              //     return (<tr>
              //     <th scope="row" key={index}>
              //       {index + 1}
              //     </th>
              //     <td >{user.name}</td>
              //     <td >{user.userDestination}</td>
              //     <td >{user.userNameB}</td>
              //     <td >{user.userLeavingDate}</td>
              //     <td>
              //       <Link className="btn btn-primary btn-lg mx-2" to={`/viewuser/${user.id}`}>View</Link>
              //       <Link className="btn btn-outline-primary btn-lg mx-2" style={{color:"black"}} to={`/edituser/${user.id}`}>Edit</Link>
              //       <button className="btn btn-danger mx-2 btn-lg"
              //       onClick={()=> deleteUser(user.id)}
              //       >Delete</button>
              //     </td>
              //   </tr>)
              //   }
                
                
                
                
                {/* <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td >{user.name}</td>
                  <td >{user.userDestination}</td>
                  <td >{user.userName}</td>
                  <td >{user.userLeavingDate}</td>
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2" style={{color:"black"}} to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=> deleteUser(user.id)}
                    >Delete</button>
                  </td>
                </tr> */}
              
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
