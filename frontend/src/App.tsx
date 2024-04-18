import React, { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState<any>();

  if (!user) {
    return <AuthPage onAuth={(user: any) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
