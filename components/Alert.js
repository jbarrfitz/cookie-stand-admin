const mapTypeToColor = {
  info: "blue",
  success: "green",
  warning: "yellow",
  error: "red",
};

export default function Alert({ type = "info", children }) {
  return (
    <div
      className={`mx-auto flex flex-col w-full items-center bg-${mapTypeToColor[type]}-500 m-2 p-4 text-white rounded-sm`}
    >
      <h3 className="p-2 text-center">{children}</h3>
    </div>
  );
}
