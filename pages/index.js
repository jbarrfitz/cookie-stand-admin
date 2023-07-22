import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [standFormData, setStandFormData] = useState({
    location: '',
    minCus: '',
    maxCus: '',
    avgCookies: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStandFormData((prevStandFormData) => ({
      ...prevStandFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header class='bg-green-500'>
        <h1 class='px-8 p-8 text-5xl'>Cookie Stand Admin</h1>
      </header>
      <main class='flex flex-col items-center'>
        <div class='flex flex-col justify-center my-8 mx-4 items-center w-4/6 bg-green-300'>
          <h2 class='text-3xl'>Create Cookie Stand</h2>
          <div class='flex flex-row w-4/6 items-stretch'>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='location'>Location</label>
                <input
                  type='text'
                  name='location'
                  value={standFormData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='minCus'>Minimum Customers per Hour</label>
                <label htmlFor='maxCus'>Maximum Customers per Hour</label>
                <label htmlFor='avgCookies'>Average Cookies per Sale</label>
              </div>
              <div>
                <input
                  type='number'
                  name='minCus'
                  value={standFormData.minCus}
                  onChange={handleInputChange}
                />
                <input
                  type='number'
                  name='maxCus'
                  value={standFormData.maxCus}
                  onChange={handleInputChange}
                />
                <input
                  type='number'
                  name='avgCookies'
                  value={standFormData.minCus}
                  onChange={handleInputChange}
                />
              </div>
              <button>Create</button>
            </form>
          </div>
        </div>
        <h3>Report Table Coming Soon . . .</h3>
      </main>
      <footer class='bg-green-400'>
        <h3 class='px-8 p-8 text-3xl'>&copy;2023</h3>
      </footer>
    </>
  );
}
