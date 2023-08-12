import { hours } from '@/data/data';
import useResource from '@/hooks/useResource';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function ReportTable() {
  // Destructure the props object to access resources
  const tableHeaders = ['Location', ...hours, 'Totals'];
  const { resources, deleteResource } = useResource();

  const handleDelete = async (e, dataItem) => {
    e.preventDefault();
    await deleteResource(dataItem.id);
  };

  if (!resources || resources.length === 0) {
    return <h3 className='text-center'>No Cookie Stands Available</h3>;
  }
  return (
    <table className='w-3/4 mx-auto'>
      <thead>
        <tr className='bg-green-600'>
          {tableHeaders.map((header, index) => (
            <th key={index} className='p-2 font-semibold border'>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {resources.map((dataItem, index) => (
          <tr key={index} className='even:bg-green-400 odd:bg-green-200'>
            <td className='p-2 border'>
              <span>
                {dataItem.location}
                <TrashIcon
                  onClick={(e) => handleDelete(e, dataItem)}
                  color='red'
                  className='self-center w-5 h-5 text-red-500'
                />
              </span>
            </td>
            {dataItem.hourly_sales.map((sale, index) => (
              <td key={index} className='p-2 border'>
                {sale}
              </td>
            ))}
            <td className='p-2 font-semibold border'>
              {Array.isArray(dataItem.hourly_sales) &&
                dataItem.hourly_sales.reduce((total, sale) => total + sale, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
