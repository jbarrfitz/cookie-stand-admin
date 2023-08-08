export default function LoginForm({ onLogin }) {
  async function handleSubmit(e) {
    e.preventDefault();
    onLogin(e.target.username.value, e.target.password.value);
  }

  return (
    <>
      <div class='flex flex-col w-1/2'>
        <form onSubmit={handleSubmit} class='bg-green-200 m-2 rounded-sm'>
          <label htmlFor='username'>User Name</label>
          <input type='text' name='username' id='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
}
