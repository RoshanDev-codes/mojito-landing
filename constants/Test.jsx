import { useState } from "react";

const Test = () => {
  const navItems = ["Features", "Specials", "Contact"];

  const [activeItem, setActiveItem] = useState(null);
  const [toggleActive, setToggleActive] = useState(false);

  console.log(activeItem);

  const handleActiveItem = (item) => {
    setActiveItem(item);
    console.log(activeItem);
  };

  const handleReset = () => {
    setActiveItem(null);
  };

  const handleToggle = () => {
    setToggleActive((prev) => !prev);
  };

  return (
    <div className="px-[100px] mt-[60px] flex items-center text-[30px]">
      <div className="flex-[2]">
        <button
          onClick={handleReset}
          className="p-4 w-[150px] text-center bg-red-400"
        >
          Reset
        </button>
      </div>

      <div className="flex-[2]">
        <button
          onClick={handleToggle}
          className="p-4 w-[150px] text-center bg-blue-400"
        >
          {toggleActive ? "True" : "false "}
        </button>
      </div>

      <div className="flex-1 flex items-center gap-10">
        {navItems.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <button className="" onClick={() => handleActiveItem(item)}>
              <a
                href="#"
                className={`${
                  activeItem === item
                    ? "border-b border-red-400  "
                    : "text-white"
                }`}
              >
                {item}
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
