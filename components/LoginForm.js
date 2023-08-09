export default function LoginForm({ onLogin }) {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    onLogin(e.target.username.value, e.target.password.value);
  }

  return (
    <form
      class='flex flex-col w-1/2 items-center bg-green-200 m-2 p-4 rounded-sm'
      onSubmit={handleSubmit}
    >
      <label
        class='w-full text-center uppercase text-xl font-bold my-4'
        htmlFor='username'
      >
        User Name
      </label>
      <input
        class='w-full text-center text-xl my-4 p-2'
        type='text'
        name='username'
        id='username'
      />
      <label
        class='w-full text-center uppercase text-xl font-bold my-4'
        htmlFor='password'
      >
        Password
      </label>
      <input
        class='w-full text-center text-xl my-4 p-2'
        type='password'
        name='password'
        id='password'
      />
      <button
        class='bg-green-600 w-full text-xl uppercase p-2 my-6 font-bold'
        type='submit'
      >
        Log In
      </button>
    </form>
  );
}
