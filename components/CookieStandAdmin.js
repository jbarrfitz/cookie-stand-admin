import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function CookieStandAdmin({ data, update }) {
  return (
    <>
      <CreateForm />
      <ReportTable standData={data} />
    </>
  );
}
