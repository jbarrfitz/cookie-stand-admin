import Head from 'next/head';
import { useAuth } from '@/contexts/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import Login from '@/components/Login';

export default function Home() {
  const { user, login, register } = useAuth();

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <main className='flex flex-col items-center min-h-screen'>
        <Header />
        <div className='flex flex-col flex-1 w-full mx-auto'>
          {user ? (
            <CookieStandAdmin />
          ) : (
            <Login onLogin={login} onRegister={register} />
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
