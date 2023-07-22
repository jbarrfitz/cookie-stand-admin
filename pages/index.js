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
        <h1 class='p-8 text-5xl'>Cookie Stand Admin</h1>
      </header>
      <main class='flex flex-col items-center'>
        <form
          class='w-1/2 p-2 m-auto rounded-md border-2 border-black bg-green-300 mt-8'
          onSubmit={handleSubmit}
        >
          <h2 className='flex items-center justify-center text-2xl pt-2 pb-4 font-semibold'>
            Create Cookie Stand
          </h2>
          <div class='flex flex-row align-middle m-8'>
            <label class='text-xl text-center font-semibold' htmlFor='location'>
              Location
            </label>
            <input
              class='text-xl w-full mx-2 pl-1'
              type='text'
              name='location'
              value={standFormData.location}
              onChange={handleInputChange}
            />
          </div>
          <div class='flex flex-1 space-x-4 items-center justify-between'>
            <div class='flex flex-col align-middle'>
              <label class='text-xl text-center font-semibold' htmlFor='minCus'>
                Minimum Customers
                <br />
                per Hour
              </label>
              <input
                type='number'
                name='minCus'
                value={standFormData.minCus}
                onChange={handleInputChange}
              />
            </div>
            <div class='flex flex-1 flex-col align-middle'>
              <label class='text-xl text-center font-semibold' htmlFor='maxCus'>
                Maximum Customers
                <br />
                per Hour
              </label>
              <input
                type='number'
                name='maxCus'
                value={standFormData.maxCus}
                onChange={handleInputChange}
              />
            </div>
            <div class='flex flex-1 flex-col align-middle'>
              <label
                class='text-xl text-center font-semibold'
                htmlFor='avgCookies'
              >
                Average Cookies
                <br />
                per Sale
              </label>
              <input
                type='number'
                name='avgCookies'
                value={standFormData.minCus}
                onChange={handleInputChange}
              />
            </div>
            <div class='flex-1'>
              <button class='text-xl font-semibold w-full h-20 block bg-green-500'>
                Create
              </button>
            </div>
          </div>
        </form>

        <h3 class='text-3xl font-semibold my-8'>
          Report Table Coming Soon . . .
        </h3>
      </main>
      <footer class='bg-green-500'>
        <h3 class='p-8 text-3xl'>&copy;2023</h3>
      </footer>
    </>
  );
}
