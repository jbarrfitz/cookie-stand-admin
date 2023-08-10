import Head from 'next/head';
import { useAuth } from '@/contexts/auth';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { hourlySales } from '@/data/data';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const [standData, setStandData] = useState([
    {
      location: 'Providence',
      minCus: 1,
      maxCus: 5,
      avgCookies: 10,
      hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    },
    {
      location: 'Waterville',
      minCus: 3,
      maxCus: 7,
      avgCookies: 15,
      hourlySales: [76, 87, 56, 67, 49, 55, 56, 81, 90, 77, 103, 33, 12, 43],
    },
  ]);

  const { user, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStand = {
      location: e.target.location.value,
      minCus: e.target.minCus.value,
      maxCus: e.target.maxCus.value,
      avgCookies: e.target.maxCus.value,
      hourlySales: hourlySales,
    };
    setStandData((prevStandData) => [...prevStandData, newStand]);
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center'>
        {user ? (
          <CookieStandAdmin data={standData} update={setStandData} />
        ) : (
          <LoginForm onLogin={login} />
        )}
      </main>
      <Footer standData={standData} />
    </>
  );
}
