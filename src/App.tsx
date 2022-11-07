import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

export interface userIF {
  name: string,
  email: string,
  password?: string
}

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin'
  }

  const [user, setUser] = useState<userIF>({name:'', email:''});
  const [error, setError] = useState<string>('');

  const Login = (details:userIF) => { 
    console.log(details) 

    if (details.email === adminUser.email && details.password === adminUser.password){
      alert('LOGIN EFETUADO!');
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else{
      setError('Usuário ou senha incorreta!');
    }
  }
  const Logout = () => { 
    console.log('Logout')
    setUser({name:'', email:''});
  }
  
  return (
    <div className="App">
      {(user.email !=='' ) ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <br></br>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
