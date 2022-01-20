import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md
      md:px-10 sticky"
    >
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className=" flex items-center border-2 rounded-full py-2 pr-2">
        <input
          className=" flex-grow outline-none bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Empieza la busqueda"
        />
        <SearchIcon className="h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:inline-flex hidden" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Hazte Anfitrión</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex border-2 rounded-full p-2 items-center space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
