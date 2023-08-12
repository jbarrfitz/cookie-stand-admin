import { useAuth } from '@/contexts/auth';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className='flex items-center justify-between bg-green-500 border-green-500'>
      <h1 className='p-8 text-5xl'>Cookie Stand Admin</h1>
      <div className='flex'>
        {user && user.username && (
          <h2 className='p-2 mx-2 my-8 bg-gray-300 border rounded'>
            {user.username}
          </h2>
        )}
        {user && user.id && (
          <button
            className='p-2 mx-2 my-8 text-white bg-green-800 border rounded'
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Sign Out
          </button>
        )}
        <h2 className='p-2 mx-2 my-8 bg-gray-300 border rounded'>Overview</h2>
      </div>
    </header>
  );
}
