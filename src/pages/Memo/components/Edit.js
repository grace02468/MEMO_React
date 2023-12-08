import { useState } from "react";
import { v4 } from "uuid";
import { db, auth } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Edit = ({ add }) => {
  const [task, setTask] = useState("");
  function changeTask(e) {
    setTask(e.target.value);
  }

  const [note, setNote] = useState("");
  function changeNote(e) {
    setNote(e.target.value);
  }

  const [time, setTime] = useState("");
  function changeTime(e) {
    setTime(e.target.value);
  }

  function addItem() {
    let id = v4();
    add(function (preData) {
      return [
        ...preData,
        {
          id: id,
          task,
          note,
          time,
        },
      ].sort(function (a, b) {
        return a.time > b.time ? 1 : -1;
      });
    });

    addOnDatabase();
    async function addOnDatabase() {
      await setDoc(doc(db, "memo_" + auth.currentUser.uid, id), {
        id: id,
        task,
        note,
        time,
      });
    }

    clearInput();
  }

  function clearInput() {
    setTask("");
    setNote("");
    setTime("");
  }

  return (
    <div className="edit">
      <h1>Plan Your Day !</h1>
      <input
        type="text"
        value={task}
        onChange={changeTask}
        placeholder="Please enter a task name"
      />
      <input
        type="text"
        value={note}
        onChange={changeNote}
        placeholder="Please enter a note"
      />
      <input type="time" value={time} onChange={changeTime} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
