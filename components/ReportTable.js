import { hours } from "@/data/data";

export default function ReportTable({ standData }) {
  // Destructure the props object to access standData
  const tableHeaders = ["Location", ...hours, "Totals"];

  if (!standData || standData.length === 0) {
    return <h3>No Cookie Stands Available</h3>;
  }

  return (
    <table className="mb-8">
      <thead>
        <tr className="bg-green-600">
          {tableHeaders.map((header, index) => (
            <th key={index} className="border p-2 font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {standData.map((dataItem, index) => (
          <tr key={index} className="even:bg-green-400 odd:bg-green-200">
            <td className="border p-2">{dataItem.location}</td>
            {dataItem.hourlySales.map((sale, index) => (
              <td key={index} className="border p-2">
                {sale}
              </td>
            ))}
            <td className="border p-2 font-semibold">
              {dataItem.hourlySales.reduce((total, sale) => total + sale, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
