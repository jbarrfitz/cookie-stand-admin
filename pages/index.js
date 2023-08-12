import Head from 'next/head';
import { useAuth } from '@/contexts/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const { user, login } = useAuth();

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center'>
        {user ? <CookieStandAdmin /> : <LoginForm onLogin={login} />}
      </main>
      <Footer />
    </>
  );
}
