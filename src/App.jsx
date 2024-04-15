import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const {count,isShow} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  console.log(isShow);
  return (
    <div className="counter">
      <div className="counter__top">
      <button className="counter__top-minus" onClick={()=>dispatch({type:"minus10"})}>-10</button>
        <button className="counter__top-minus" onClick={()=>dispatch({type:"minus"})}>-</button>
        <p className="counter__top-number">{count <= 0 ? 0 : count}</p>
        <button className="counter__top-plus" onClick={()=>dispatch({type:"plus"})}>+</button>
        <button className="counter__top-plus" onClick={()=>dispatch({type:"plus10"})}>+10</button>
      </div>
      <div className="counter__bottom">
        <button className="counter__bottom-clear" onClick={()=>dispatch({type:"clear"})}>Tozalash</button>
        <button className="counter__bottom-stop" onClick={()=>dispatch({type:"stop"})}>
          {
            isShow == true ? "Stoop" : "Staart"
          }
        </button>
      </div>
    </div>
  );
}

export default App;
