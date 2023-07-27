export default function CreateForm({ handleSubmit }) {
  return (
    <form
      className='w-2/3 p-2 mx-auto mb-8 rounded-md border-2 border-black bg-green-400 mt-8'
      onSubmit={handleSubmit}
    >
      <h2 className='flex items-center justify-center text-2xl pt-2 pb-4 font-semibold'>
        Create Cookie Stand
      </h2>
      <div className='flex flex-row align-middle m-8 p-4'>
        <label className='text-center font-semibold' htmlFor='location'>
          Location
        </label>
        <input
          className='text-xl w-full mx-2 pl-1'
          type='text'
          name='location'
        />
      </div>
      <div className='flex flex-1 space-x-4 items-center gap-4 p-4 justify-between bg-green-400'>
        <div className='flex flex-col items-center align-middle p-2 bg-green-200'>
          <label className='text-center font-semibold my-4' htmlFor='minCus'>
            Minimum Customers per Hour
          </label>
          <input className='w-4/5' type='number' name='minCus' />
        </div>
        <div className='flex flex-1 flex-col items-center align-middle p-2 bg-green-200'>
          <label className='text-center font-semibold my-4' htmlFor='maxCus'>
            Maximum Customers per Hour
          </label>
          <input className='w-4/5' type='number' name='maxCus' />
        </div>
        <div className='flex flex-1 flex-col items-center align-middle p-2 bg-green-200'>
          <label
            className='text-center font-semibold my-4'
            htmlFor='avgCookies'
          >
            Average Cookies per Sale
          </label>
          <input className='w-4/5' type='number' name='avgCookies' />
        </div>
        <div className='flex-1 p-4'>
          <button className='text-xl font-semibold p-8 w-full block bg-green-600'>
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
