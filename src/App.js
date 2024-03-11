import React from "react";
import "./App.css";
import { Provider } from "react-redux"; // Importation de Provider depuis 'react-redux'
import Addtask from "./components/Addtask";
import TaskList from "./components/TaskList";
import store from "./store"; // Importation de store depuis le fichier correct

function App() {
  return (
    <Provider store={store}>
      <div>
        <Addtask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
