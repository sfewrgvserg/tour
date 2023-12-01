import { collection, doc, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export default function Card() {
  const [data, setData] = useState([]);
  const [isReadMore, setIsReadMore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const mainRef = collection(db, "main-collection");
      const tourRef = doc(mainRef, "tours");
      const listRef = collection(tourRef, "list-tour");
      const q = query(listRef);
      const querySnapshot = await getDocs(q);
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(result);
    };
    fetchData();
  }, []);

  const handleReadMoreToggle = (itemId) => {
    setIsReadMore((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleNoInterested = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-5 max-w-[65%] mx-auto">
        {data.map((item) => (
          <div className="relative" key={item.id}>
            <img
              className="rounded-t-lg h-[320px] w-full"
              src={item.img}
              alt=""
            />
            <h3 className="absolute top-0 right-0 px-3 py-1 bg-primary-500 rounded-se-lg text-white">
              {item.price}
            </h3>
            <div className="bg-white p-5">
              <h2 className="text-center font-semibold text-xl pb-5">
                {item.title}
              </h2>
              <p className="text-gray-500">
                {isReadMore[item.id]
                  ? item.description
                  : item.description.substring(0, 250) + "...."}
              </p>
              <p
                className="text-primary-600 font-bold inline-block cursor-pointer"
                onClick={() => {
                  handleReadMoreToggle(item.id);
                }}
              >
                {isReadMore[item.id] ? "Show Less" : "Read More"}
              </p>
              <button
                className="w-full bg-emerald-800 font-semibold rounded-md py-1 text-green-100 hover:bg-red-300 duration-300 hover:text-white mt-5"
                onClick={() => handleNoInterested(item.id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
