import { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";


const Memo = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData(setData);
  }, []);

  async function fetchData(setData) {
    const querySnapshot = await getDocs(
      collection(db, "memo_" + auth.currentUser.uid)
    );
    const data = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    setData(
      data.sort(function (a, b) {
        return a.time > b.time ? 1 : -1;
      })
    );
  }

  return (
    <div className="memo">
      <Edit add={setData} />
      <List
        listData={data}
        deletData={setData}
      />
    </div>
  );
};

export default Memo;
