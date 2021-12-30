import React from 'react';
import './App.css';
import {Saludo} from './components/Saludo'
import {Button} from './components/Button'
import {Title} from './components/Title'
import tasks from './sample/tastks.json'
import {Cards} from './components/Cards'
console.log(tasks);

function App() {
  
  // state = {
    // tasks: tasks
  // }
  
  return (
    <div>
      <Title/>
      <Saludo/>
      <Button/> 
      <Cards tasks={tasks}/>
    </div>
  );
}

export default App;
