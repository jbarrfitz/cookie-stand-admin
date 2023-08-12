import { useState } from 'react';
import LoginForm from './LoginForm';
import Register from './Register';

export default function Login({ onLogin, onRegister }) {
  const [state, setState] = useState('login');

  return (
    <div className='flex flex-col'>
      {state === 'login' && (
        <LoginForm onLogin={onLogin} onChangeMode={setState} />
      )}
      {state === 'register' && (
        <Register onRegister={onRegister} onChangeMode={setState} />
      )}
    </div>
  );
}
