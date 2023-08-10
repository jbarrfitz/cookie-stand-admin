import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function CookieStandAdmin(standData) {
  return (
    <>
      <CreateForm />
      <ReportTable standData={standData} />
    </>
  );
}
