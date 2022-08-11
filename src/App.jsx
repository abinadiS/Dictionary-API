import { useState } from "react";

import FilterForm from './filter';

import './App.css';
import 'animate.css';
import ShowInfo from "./showInfo";

function App() {
  
  const [ data, setData ] = useState();
 


  return (
    <div className="App">

    <h1 className='title animate__animated animate__fadeIn'>Dictionary</h1>

    <FilterForm setData={setData}/>
    {data === undefined ? <p>Search word</p> : <ShowInfo data={data}/>}
    </div>
  )
}

export default App
