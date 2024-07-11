import {Link} from "react-router-dom";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-700 bg-opacity-50  shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-gray-200 text-2xl font-bold">英雄聯盟資訊站</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-100 hover:text-gray-300">
                  首頁
                </Link>
              </li>
              <li>
                <Link
                  to="/hero-detail"
                  className="text-gray-100 hover:text-gray-300"
                >
                  英雄列表
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-gray-300">
                  道具列表
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
