import useResource from '@/hooks/useResource';

export default function Footer() {
  const { resources } = useResource();

  return (
    <footer className='w-full bg-green-500'>
      <h3 className='p-2 text-center'>
        {resources.length > 0
          ? `${resources.length} Locations Worldwide`
          : 'No locations to report'}
      </h3>
    </footer>
  );
}
