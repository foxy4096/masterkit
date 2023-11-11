import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b-2 border-emerald-400">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" to="/">
          <span className="sr-only">Home</span>
          Master Kit 🔧
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-300 transition hover:text-gray-300/75"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/help"
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
