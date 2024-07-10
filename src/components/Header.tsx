import { Link } from "react-router-dom"

function Header(){
    return(
        <>
            <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">英雄聯盟資訊站</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700 hover:text-gray-900">首頁</Link></li>
            <li><Link to="/hero-detail" className="text-gray-700 hover:text-gray-900">英雄列表</Link></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">道具列表</a></li>
          </ul>
        </nav>
      </div>
    </header>
        </>
    )
}
export default Header