import { useEffect, useState } from "react";
import Navbar from "./assets/navbar";
import { v4 as uuidv4 } from "uuid";
import { TiDelete } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [isShowing, setisShowing] = useState(false);
  const handleisShowing = () => {
    setisShowing(!isShowing);
  };
  useEffect(()=>{
    let items = localStorage.getItem("todos")
    if(items){
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  },[])

  const saveTols = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const handleAdd = (params) => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted:false }]);
    settodo("");
    saveTols()
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos);
    saveTols()
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((item) => {
      return item.id === id;
    });
    settodo(t[0].todo);
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
    saveTols()

  };

  const handledelete = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
    saveTols()

  };

  return (
    <div className="bg-slate-200 h-screen">
      <Navbar />
      <div className="flex justify-center ">
        <div className="bg-purple-200 align-middle w-[30%] m-4 rounded-md z-10">
          <div className="flex justify-center">
            <h1 className="m-2 font-bold text-xl">
              iTask - Your work at one place
            </h1>
          </div>
          <div>
            <p className="mx-2 font-bold text-lg">Add your work</p>
            <div className="flex justify-between my-4 items-center">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                className="p-2 h-10 mx-2 w-[80%] rounded-md"
                placeholder="type here"
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-emerald-700 px-3 py-2 mx-2 rounded-lg font-bold cursor-pointer"
              >
                Add
              </button>
            </div>
            <div>
              <label className="flex gap-2 mx-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isShowing}
                  onChange={handleisShowing}
                />
                <p className="font-semibold">Show finished</p>
              </label>
            </div>
          </div>
          <hr className="mx-10 border-black my-2" />
          <div className="m-2">
            <h1 className="font-bold text-lg">Your todos</h1>
            <div className="h-96 overflow-scroll example-container m-3">
              {todos.length === 0 && <div>No work</div>}
              {todos.map((item) => {
                return (
                  (isShowing || !item.isCompleted) && (
                    <div className="flex justify-between m-2" key={item.id}>
                      <div className="flex gap-5">
                        <input
                          name={item.id}
                          type="checkbox"
                          checked={item.isCompleted}
                          onChange={handleCheckbox}
                        />
                        <div className={item.isCompleted ? "line-through" : ""}>
                          {item.todo}
                        </div>
                      </div>
                      <div className="buttons flex ">
                        <button
                          onClick={(e) => {
                            handleEdit(e, item.id);
                          }}
                          className="bg-fuchsia-500 px-3 py-2 mx-2 rounded-lg font-bold h-fit"
                        >
                          <MdEditSquare />
                        </button>
                        <button
                          onClick={(e) => {
                            handledelete(e, item.id);
                          }}
                          className="bg-red-500 px-3 py-2 mx-2 rounded-lg font-bold"
                        >
                          <TiDelete />
                        </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
