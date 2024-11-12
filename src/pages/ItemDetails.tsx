import {useEffect} from "react";
import {useParams} from "react-router-dom";

const ItemDetail = () => {
  const {itemname} = useParams();
  useEffect(() => {
    console.log(itemname);
  }, []);
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-12">
      <div className="flex items-center mb-6">
        <img src="/images/2001.png" alt="魔力斗篷" className="w-12 h-12 mr-4" />
        <h1 className="text-2xl font-bold">魔力斗篷</h1>
      </div>
      <div className="mb-4">
        <p>
          <strong>描述：</strong>適合對抗魔法傷害的敵人，提供{" "}
          <strong>35 魔法抗性</strong>。
        </p>
      </div>
      <div className="mb-4 font-bold">
        <p>價格：450 金幣（售價：315 金幣）</p>
      </div>
      <div className="mb-4 bg-blue-100 p-4 rounded">
        <p className="font-bold">屬性加成：</p>
        <ul className="list-disc list-inside">
          <li>魔法抗性 +35</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-bold">標籤：</p>
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded mr-2">
          魔法抗性
        </span>
      </div>
    </div>
  );
};

export default ItemDetail;
