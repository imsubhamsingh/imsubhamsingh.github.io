import React from "react";
import BottomFooter from "./components/BottomFooter";
import MiddleBody from "./components/MiddleBody";
import TopHeader from "./components/TopHeader";
import appData from "./data";

function App() {
  return (
    <div className="app">
      <TopHeader data={appData} />
      <MiddleBody data={appData} />
      <BottomFooter data={appData} />
    </div>
  );
}

export default App;
