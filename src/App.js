import './App.css';
import { useState } from 'react';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

const App = () => {
  const [loggedIn, setLoginState] = useState(false);
  const [userName, setUserName] = useState('');

  const login = (userNameInput) => {
    setLoginState(true);
    setUserName(userNameInput);
  }

  return (
    <div className='parent-container'>
      {loggedIn && <RegisterForm loggedInUser={userName} />}
      {!loggedIn && <LoginForm onLogin={login} />}
    </div>
  );
}

export default App;
