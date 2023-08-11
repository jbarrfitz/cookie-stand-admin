import { useAuth } from "@/contexts/auth";
import { useStand } from "@/contexts/stand";
import { hours } from "@/data/data";
export default function CreateForm() {
  const { user } = useAuth();
  const { updateStand } = useStand();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStand = {
      location: e.target.location.value,
      minCus: e.target.minCus.value,
      maxCus: e.target.maxCus.value,
      avgCookies: e.target.maxCus.value,
      // TODO: Implement
      hourlySales: hours.map((h) => 0),
      owner: (user && user.id) || "N/A",
    };
    updateStand(newStand);
  };

  return (
    <form
      className="w-3/4 p-2 mx-auto mt-8 mb-4 bg-green-200 border-2 border-green-500 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row items-center w-full p-2 m-2 align-middle">
        <div className="flex flex-col w-2/3 align-middle">
          <label className="mb-2 text-sm font-semibold text-center uppercase" htmlFor="location">
            Add Location
          </label>
          <input className="p-2 mx-2 text-lg" type="text" name="location" placeholder="Cookie Stand Location" />
        </div>
        <div className="w-1/3 p-4 flex-2">
          <button className="w-full px-4 py-2 font-semibold uppercase bg-green-600 rounded ">Create Stand</button>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 gap-4 p-4 space-x-4 bg-green-200">
        <div className="flex flex-col items-center p-2 align-middle bg-green-200">
          <label className="my-4 text-sm font-semibold text-center uppercase" htmlFor="minCus">
            Minimum Customers per Hour
          </label>
          <input className="w-4/5 p-2" type="number" name="minCus" min={0} defaultValue={0} />
        </div>
        <div className="flex flex-col items-center flex-1 p-2 align-middle bg-green-200">
          <label className="my-4 text-sm font-semibold text-center uppercase" htmlFor="maxCus">
            Maximum Customers per Hour
          </label>
          <input className="w-4/5 p-2" type="number" name="maxCus" min={0} defaultValue={0} />
        </div>
        <div className="flex flex-col items-center flex-1 p-2 align-middle bg-green-200">
          <label className="my-4 text-sm font-semibold text-center uppercase" htmlFor="avgCookies">
            Average Cookies per Sale
          </label>
          <input className="w-4/5 p-2" type="number" step="0.1" name="avgCookies" min={0} defaultValue={1} />
        </div>
      </div>
    </form>
  );
}
