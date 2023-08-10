import { useAuth } from "@/contexts/auth";

export default function CreateForm() {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStand = {
      location: e.target.location.value,
      minCus: e.target.minCus.value,
      maxCus: e.target.maxCus.value,
      avgCookies: e.target.maxCus.value,
      owner: user.id,
    };
    setStandData((prevStandData) => [...prevStandData, newStand]);
  };

  return (
    <form className="w-1/2 p-2 mx-auto mb-4 rounded-md border-2 border-black bg-green-200 mt-8" onSubmit={handleSubmit}>
      <div className="flex flex-row w-full align-middle items-center m-2 p-2">
        <div className="flex flex-col w-2/3 align-middle">
          <label className="text-center font-semibold uppercase mb-2 text-sm" htmlFor="location">
            Add Location
          </label>
          <input className="text-lg mx-2 pl-1" type="text" name="location" />
        </div>
        <div className="flex-2 w-1/3 p-4">
          <button className="font-semibold uppercase px-4 py-2 w-full bg-green-600">Create Stand</button>
        </div>
      </div>
      <div className="flex flex-1 space-x-4 items-center gap-4 p-4 justify-between bg-green-200">
        <div className="flex flex-col items-center align-middle p-2 bg-green-200">
          <label className="text-center text-sm font-semibold uppercase my-4" htmlFor="minCus">
            Minimum Customers per Hour
          </label>
          <input className="w-4/5" type="number" name="minCus" />
        </div>
        <div className="flex flex-1 flex-col items-center align-middle p-2 bg-green-200">
          <label className="text-center text-sm font-semibold uppercase my-4" htmlFor="maxCus">
            Maximum Customers per Hour
          </label>
          <input className="w-4/5" type="number" name="maxCus" />
        </div>
        <div className="flex flex-1 flex-col items-center align-middle p-2 bg-green-200">
          <label className="text-center text-sm font-semibold uppercase my-4" htmlFor="avgCookies">
            Average Cookies per Sale
          </label>
          <input className="w-4/5" type="number" step="0.1" name="avgCookies" />
        </div>
      </div>
    </form>
  );
}
