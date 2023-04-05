function CustomContextMenu({ visible, x, y }) {
  const style = {
    position: "absolute",
    top: y,
    left: x,
    display: visible ? "block" : "none",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    zIndex: 1000,
    padding: "8px",
  };

  const handleClick = (action) => {
    console.log(action);
    // Add your desired functionality for each action here
  };

  return (
    <div className="custom-context-menu bg-white shadow-md rounded-md p-2" style={style}>
      <div className="custom-context-menu-item hover:bg-gray-200 active:bg-gray-700 active:text-white py-1 px-3 cursor-pointer" onClick={() => handleClick("Action 1")}>
        Action 1
      </div>
      <div className="custom-context-menu-item hover:bg-gray-200 active:bg-gray-700 active:text-white py-1 px-3 cursor-pointer" onClick={() => handleClick("Action 2")}>
        Action 2
      </div>
      <div className="custom-context-menu-item hover:bg-gray-200 active:bg-gray-700 active:text-white py-1 px-3 cursor-pointer" onClick={() => handleClick("Action 3")}>
        Action 3
      </div>
    </div>
  );
}
export default CustomContextMenu;
