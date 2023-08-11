import { useAuth } from '@/contexts/auth';
import useResource from '@/hooks/useResource';

export default function CreateForm() {
  const { user } = useAuth();
  const { createResource } = useResource();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStand = {
      location: e.target.location.value,
      minCus: Number.parseInt(e.target.minCus.value),
      maxCus: Number.parseInt(e.target.maxCus.value),
      avgCookies: Number.parseFloat(e.target.avgCookies.value),
      owner: user.id,
    };
    createResource(newStand);
  };

  return (
    <form
      className='w-1/2 p-2 mx-auto mt-8 mb-4 bg-green-200 border-2 border-black rounded-md'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-row items-center w-full p-2 m-2 align-middle'>
        <div className='flex flex-col w-2/3 align-middle'>
          <label
            className='mb-2 text-sm font-semibold text-center uppercase'
            htmlFor='location'
          >
            Add Location
          </label>
          <input className='pl-1 mx-2 text-lg' type='text' name='location' />
        </div>
        <div className='w-1/3 p-4 flex-2'>
          <button className='w-full px-4 py-2 font-semibold uppercase bg-green-600'>
            Create Stand
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between flex-1 gap-4 p-4 space-x-4 bg-green-200'>
        <div className='flex flex-col items-center p-2 align-middle bg-green-200'>
          <label
            className='my-4 text-sm font-semibold text-center uppercase'
            htmlFor='minCus'
          >
            Minimum Customers per Hour
          </label>
          <input className='w-4/5' type='number' name='minCus' />
        </div>
        <div className='flex flex-col items-center flex-1 p-2 align-middle bg-green-200'>
          <label
            className='my-4 text-sm font-semibold text-center uppercase'
            htmlFor='maxCus'
          >
            Maximum Customers per Hour
          </label>
          <input className='w-4/5' type='number' name='maxCus' />
        </div>
        <div className='flex flex-col items-center flex-1 p-2 align-middle bg-green-200'>
          <label
            className='my-4 text-sm font-semibold text-center uppercase'
            htmlFor='avgCookies'
          >
            Average Cookies per Sale
          </label>
          <input className='w-4/5' type='number' step='0.1' name='avgCookies' />
        </div>
      </div>
    </form>
  );
}
