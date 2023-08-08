import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function CookieStandAdmin(data) {
  return (
    <>
      <CreateForm handleSubmit={handleSubmit} />
      <ReportTable standData={standData} />
    </>
  );
}
