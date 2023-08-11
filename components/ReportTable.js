import { hours } from '@/data/data';
import useResource from '@/hooks/useResource';

export default function ReportTable() {
  // Destructure the props object to access resources
  const tableHeaders = ['Location', ...hours, 'Totals'];
  const { resources, deleteResource } = useResource();

  if (!resources || resources.length === 0) {
    return <h3>No Cookie Stands Available</h3>;
  }
  return (
    <table className='mb-8'>
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
            <td className='p-2 border'>{dataItem.location}</td>
            {Array.isArray(dataItem.hourly_sales) &&
              dataItem.hourly_sales.map((sale, index) => (
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
