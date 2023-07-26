export default function CreateForm({ handleSubmit }) {
  return (
    <form
      className='w-1/2 p-2 mx-auto mb-8 rounded-md border-2 border-black bg-green-300 mt-8'
      onSubmit={handleSubmit}
    >
      <h2 className='flex items-center justify-center text-2xl pt-2 pb-4 font-semibold'>
        Create Cookie Stand
      </h2>
      <div className='flex flex-row align-middle m-8'>
        <label className='text-xl text-center font-semibold' htmlFor='location'>
          Location
        </label>
        <input
          className='text-xl w-full mx-2 pl-1'
          type='text'
          name='location'
        />
      </div>
      <div className='flex flex-1 space-x-4 items-center justify-between'>
        <div className='flex flex-col align-middle'>
          <label className='text-xl text-center font-semibold' htmlFor='minCus'>
            Minimum Customers
            <br />
            per Hour
          </label>
          <input type='number' name='minCus' />
        </div>
        <div className='flex flex-1 flex-col align-middle'>
          <label className='text-xl text-center font-semibold' htmlFor='maxCus'>
            Maximum Customers
            <br />
            per Hour
          </label>
          <input type='number' name='maxCus' />
        </div>
        <div className='flex flex-1 flex-col align-middle'>
          <label
            className='text-xl text-center font-semibold'
            htmlFor='avgCookies'
          >
            Average Cookies
            <br />
            per Sale
          </label>
          <input type='number' name='avgCookies' />
        </div>
        <div className='flex-1 h-full'>
          <button className='text-xl font-semibold w-full block bg-green-500'>
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
