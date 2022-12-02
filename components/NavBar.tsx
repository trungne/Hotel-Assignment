import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
const NavBar = () => {
  return (
    <div id="navbar" className="navbar bg-black bg-opacity-20">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-gray-700 "
        >
          <AiOutlineHome size={32} />
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control flex flex-row gap-4">
          <input
            type="text"
            placeholder="search for room?"
            className="input input-bordered bg-white text-gray-700 placeholder-gray-700"
          />
          <button
            onClick={() => {
              document
                .querySelector("#booking")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-info"
          >
            {<RxMagnifyingGlass />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
