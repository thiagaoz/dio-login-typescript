import React, {useState} from 'react'
import {userIF} from '../App';
import './LoginForm.css';

interface Props {
    Login: (details:userIF) => void,
    error: string
}
function LoginForm({Login, error}:Props) {
    const [details, setDetails] = useState<userIF>({name:'', email:'',password:''})
    const submitHandler = (e:any) => { 
        e.preventDefault();

        Login(details);
     }
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== '') ? ( <div className="error">{error}</div> ) : ''}
            <div className="form-group">
                <label htmlFor='name' className='label'>
                    Name: 
                    <input type='text' className='name input' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </label>
                
            </div>
            <div className="form-group">
                <label htmlFor='email' className='label'>
                    Email: 
                    <input type="email" className="email input" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </label>

            </div>
            <div className="form-group">
                <label htmlFor="password" className='label'>
                    Password: 
                    <input type="password" className="password input" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </label>
                
            </div>
            <input type="submit" className='input-btn' value="ENTRAR" />
        </div>
    </form>
  )
}

export default LoginForm