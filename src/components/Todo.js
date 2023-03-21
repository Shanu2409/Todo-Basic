import React, { Fragment, useEffect, useState } from "react";
import "../App.css";

const getLocalData = () => {
  let data = JSON.parse(localStorage.getItem("list"));

  return data ? JSON.parse(localStorage.getItem("list")) : [];
};

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listdata, setListData] = useState(getLocalData());
  const addActivity = () => {
    // setListData(...listdata, activity);
    // console.log(listdata);
    setListData((listdata) => {
      const updateList = [...listdata, activity];
      console.log(updateList);
      console.log("showed");
      return updateList;
    });
    setActivity("");
  };

  const removeActivity = (i) => {
    const up = listdata.filter((elem, id) => {
      return i !== id;
    });

    setListData(up);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listdata));
  }, [listdata]);

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Enter your text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>

        <p className="list-heading">List :</p>

        {listdata !== [] &&
          listdata.map((data, index) => {
            return (
              <>
                <p key={index}>
                  <div className="listData" style={{ textAlign: "center" }}>
                    {data}
                  </div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(index)}>
                      remove
                    </button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
