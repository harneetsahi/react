import { useEffect, useState } from "react";
import Home from "./icons/Home";
import Chat from "./icons/Chat";
import Settings from "./icons/Settings";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen shadow-lg absolute top-0 left-0 bottom-0 z-1 transition-all bg-gray-50 dark:bg-gray-600 ${
          isOpen ? "w-40" : "w-15"
        } `}
      >
        <div className="flex flex-col gap-5 mt-3 text-gray-800">
          <button
            className="p-4 hover:cursor-pointer hover:text-orange-400 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <div className="flex gap-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 transition-all hover:text-orange-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <p>Menu</p>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 transition-all hover:text-orange-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <div className="border-t-1 pt-5 border-gray-200 flex flex-col gap-7 text-gray-800">
            <ListItems isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

function ListItems({ isOpen }) {
  const [darkMode, setDarkMode] = useState(true);

  const icons = [
    { id: "come", name: "Home", component: <Home /> },
    { id: "chat", name: "Chat", component: <Chat /> },
    {
      id: "settings",
      name: "Settings",
      component: <Settings />,
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.remove("dark");

      console.log(document.querySelector("html").classList);
      console.log("one" + darkMode);
    } else {
      document.querySelector("html").classList.add("dark");

      console.log("two" + darkMode);
    }
  }, [darkMode]);

  return (
    <>
      {icons.map((icon) =>
        isOpen ? (
          <div
            className="flex gap-3 hover:bg-gray-100 p-4 transition-all  hover:text-orange-400  hover:cursor-pointer"
            key={icon.id}
          >
            {icon.component} {icon.name}
          </div>
        ) : (
          <div
            className=" hover:bg-gray-100  p-4 transition-all  hover:text-orange-400 hover:cursor-pointer"
            key={icon.id}
          >
            {icon.component}
          </div>
        )
      )}

      <button
        className="p-4"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </>
  );
}

export default Sidebar;
