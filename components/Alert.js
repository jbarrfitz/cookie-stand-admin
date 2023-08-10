const mapTypeToColor = {
  info: "blue",
  success: "green",
  warning: "yellow",
  error: "red",
};

export default function Alert({ type = "info", children }) {
  return (
    <div className={`flex flex-col w-1/2 items-center bg-${mapTypeToColor[type]}-500 m-2 p-4 rounded-sm`}>
      <h3 className="p-2 text-center">{children}</h3>
    </div>
  );
}
