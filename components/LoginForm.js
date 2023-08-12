export default function LoginForm({ onLogin }) {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    onLogin(e.target.username.value, e.target.password.value);
  }

  return (
    <form
      className='flex flex-col items-center w-1/2 p-4 m-auto mt-2 bg-green-200 rounded-sm'
      onSubmit={handleSubmit}
    >
      <label
        className='w-full my-4 text-xl font-bold text-center uppercase'
        htmlFor='username'
      >
        User Name
      </label>
      <input
        className='w-full p-2 my-4 text-xl text-center'
        type='text'
        name='username'
        id='username'
      />
      <label
        className='w-full my-4 text-xl font-bold text-center uppercase'
        htmlFor='password'
      >
        Password
      </label>
      <input
        className='w-full p-2 my-4 text-xl text-center'
        type='password'
        name='password'
        id='password'
      />
      <button
        className='w-full p-2 my-6 text-xl font-bold uppercase bg-green-600'
        type='submit'
      >
        Log In
      </button>
    </form>
  );
}
