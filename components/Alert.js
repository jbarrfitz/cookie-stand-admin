export default function Alert({ type = 'info', children }) {
  return (
    <div className='flex flex-col items-center w-full p-4 m-2 mx-auto text-white bg-red-500 rounded-sm'>
      <h3 className='p-2 text-center'>{children}</h3>
    </div>
  );
}
