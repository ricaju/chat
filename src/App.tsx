import { Chat } from "components/Chat";
import React from "react";
import style from "./styles/pages/App.module.scss";

function App() {
  return (
    <div className={style.root}>
      <Chat />
    </div>
  );
}

export default App;

