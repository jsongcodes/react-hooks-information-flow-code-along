import React, {useState} from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {

function handleClick(){
  onChangeColor(getRandomColor())
}
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
