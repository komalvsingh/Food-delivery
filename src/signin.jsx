import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Signin() {
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    
  });

 

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

 
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    

    try {
      const res = await axios.post("http://localhost:5001/api/user/signin", {
        username,
        email,
        password,
        
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <h1>FoodieGo</h1>
        </div>
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={handleChange}
        />
        
        <button type="submit">Sign In</button>
        <span>
          Already have an account? <Link to="/login">Login.</Link>
        </span>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: url("https://img.freepik.com/free-vector/hand-drawn-food-doodles-background_23-2149130950.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user") no-repeat center center/cover;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: black;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    background-color: white;
    border-radius: 2rem;
    padding: 1rem 3rem;
    height: 450px;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid orange;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid orange;
      outline: none;
    }
  }

  button {
    background-color: orange;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    width: 300px;
    text-transform: uppercase;
    &:hover {
      background-color: rgb(208, 136, 3);
    }
  }

  span {
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    a {
      color: rgb(208, 136, 3);
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Signin;
