import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../hooks/apiCall.js'; // login 액션을 호출하는 함수
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      password
    };
    login(dispatch, user);
  };

  return (
    <div className="login">
      
      <div className="loginWrapper">
        <h1 className="loginTitle">Log In</h1>
        <form className="loginForm" onSubmit={handleLogin}>
          <input 
            type="text" 
            className="loginInput" 
            placeholder='Email' 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="loginInput" 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button className="loginBtn" type="submit" disabled={isFetching}>
            {isFetching ? "Loading..." : "Login"}
          </button>
          {error && <span className="error">Something went wrong...</span>}
          <span className="loginText">Forgot password or username?</span>
          <span className="loginText">Create new account</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
