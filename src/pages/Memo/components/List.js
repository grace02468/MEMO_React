import Item from "./Item";

const List = ({ listData, deletData }) => {
  return (
    <div className="list">
      <h3 className="list_title">Today's task</h3>
      {listData.map((item) => {
        const { task, note, time, id } = item; //物件解構寫法

        return (
          <Item
            id={id}
            key={id}
            task={task}
            note={note}
            time={time}
            deletData={deletData}
          />
        );
        // return <Item note={item.note} date={item.date} time={item.time}/>
      })}
    </div>
  );
};

export default List;
