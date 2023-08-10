import { useStand } from "@/contexts/stand";

export default function Footer() {
  const { standData } = useStand();

  return (
    <footer className="w-full bg-green-500">
      <h3 className="p-2 text-center">
        {standData.length > 0 ? `${standData.length} Locations Worldwide` : "No locations to report"}
      </h3>
    </footer>
  );
}
