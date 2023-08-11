import { useAuth } from "@/contexts/auth";

export default function Header() {
  const { user, logout } = useAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <header className="flex items-center justify-around w-full bg-green-500">
      <h1 className="p-8 text-5xl">Cookie Stand Admin</h1>
      <div className="flex flex-row gap-1 m-8">
        {user && user.username && (
          <button className="p-1 px-4 bg-green-100 bg-green-200 rounded px-">{user.username}</button>
        )}
        {user && user.id && (
          <button onClick={handleSignOut} className="p-1 px-4 text-white bg-green-600 rounded">
            Sign Out
          </button>
        )}
        <button disabled className="p-1 px-4 bg-green-100 rounded">
          Overview
        </button>
      </div>
    </header>
  );
}
