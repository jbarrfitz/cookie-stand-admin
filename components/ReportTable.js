import { useStand } from "@/contexts/stand";
import { hours } from "@/data/data";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function ReportTable() {
  const { standData } = useStand();
  // Destructure the props object to access standData
  const tableHeaders = ["Location", ...hours, "Totals"];

  if (!standData || standData.length === 0) {
    return <h3>No Cookie Stands Available</h3>;
  }

  const handleDelete = (event, dataItem) => {};

  return (
    <table className="w-3/4 mb-8">
      <thead>
        <tr className="bg-green-600">
          {tableHeaders.map((header, index) => (
            <th key={index} className="p-2 font-semibold border">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {standData.map((dataItem, index) => (
          <tr key={index} className="even:bg-green-400 odd:bg-green-200">
            <td className="flex flex-row justify-between p-2 border">
              <span>{dataItem.location}</span>
              <TrashIcon
                onClick={(e) => handleDelete(event, dataItem)}
                color="red"
                className="self-center w-5 h-5 text-red-500"
              />
            </td>
            {dataItem.hourlySales.map((sale, index) => (
              <td key={index} className="p-2 text-right border">
                {sale}
              </td>
            ))}
            <td className="p-2 font-semibold text-right border">
              {dataItem.hourlySales.reduce((total, sale) => total + sale, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
