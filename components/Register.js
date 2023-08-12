import { useState } from 'react';

export default function Register({ onRegister, onChangeMode }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    onRegister(userName, password, email);
  };

  function handleChangeMode(e) {
    e.preventDefault();
    onChangeMode('login');
  }

  return (
    <div className='flex flex-col justify-center'>
      <form
        className='flex flex-col items-center w-1/2 p-4 m-auto mt-2 bg-green-200 rounded-sm'
        onSubmit={handleSubmit}
      >
        <label
          className='w-full my-4 text-xl font-bold text-center uppercase'
          htmlFor='username'
        >
          Username
        </label>
        <input
          className='w-full p-2 my-2 text-xl text-center'
          type='text'
          name='username'
          id='username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label
          className='w-full my-2 text-xl font-bold text-center uppercase'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='w-full p-2 my-2 text-xl text-center'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          className='w-full my-2 text-xl font-bold text-center uppercase'
          htmlFor='password'
        >
          Password
        </label>
        <input
          className='w-full p-2 my-2 text-xl text-center'
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className='w-full my-2 text-xl font-bold text-center uppercase'
          htmlFor='confirmPassword'
        >
          Confirm Password
        </label>
        <input
          className='w-full p-2 my-2 text-xl text-center'
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <button
          className='w-full p-2 my-4 text-xl font-bold uppercase bg-green-600'
          type='submit'
        >
          Register
        </button>
      </form>
      <button
        className='self-center p-2 m-2 bg-gray-200 rounded-md'
        onClick={handleChangeMode}
      >
        Login
      </button>
    </div>
  );
}
