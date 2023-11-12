import { doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const Item = ({ task, note, time, deletData, id }) => {
  function deletItem() {
    deletData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
    deletOnDatabase();
    async function deletOnDatabase() {
      await deleteDoc(doc(db, "memo_" + auth.currentUser.uid, id));
    }
  }

  return (
    <div className="item">
      <div className="task_content">
        <p className="task">{task}</p>
        <p className="note">{note}</p>
      </div>
      <p className="time">{`${time}`}</p>
      <button onClick={deletItem} className="remove">
        X
      </button>
    </div>
  );
};

export default Item;
