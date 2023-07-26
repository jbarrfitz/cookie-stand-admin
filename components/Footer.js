export default function Footer({ standData }) {
  return (
    <footer className='w-full bg-green-500'>
      <h3 className='p-8 text-3xl'>{standData.length} Locations Worlwide</h3>
    </footer>
  );
}
