// import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import chat from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={chat} />
    </div>
  );
}

export default App;
