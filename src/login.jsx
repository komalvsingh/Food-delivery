import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const updateUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { username, password } = values;

    try {
      const res = await axios.post("http://localhost:5001/api/user/login", {
        username,
        password,
      });

      if (res.data) {
        updateUser(res.data);
        navigate("/");
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
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
          placeholder="Username"
          minLength="3"
          value={values.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>
        <span>
          Don't have an account? <Link to="/signin">Sign In.</Link>
        </span>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
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
    gap: 2rem;
    align-items: center;
    background-color: white;
    border-radius: 2rem;
    padding: 2rem 4rem;
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
      background-color: rgb(209, 137, 2);
    }
    &:disabled {
      cursor: not-allowed;
      background-color: rgb(209, 137, 2);
    }
  }

  .error {
    color: red;
    font-size: 0.9rem;
  }

  span {
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    a {
      color: rgb(209, 137, 2);
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Login;
