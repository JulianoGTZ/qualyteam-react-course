import React, { Fragment } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { List } from "./pages/list";

function App() {
  return (
    <div className="app">
      {true ? (
        <Fragment>
          <Navbar />
          <main className="content--container">
            <List />
          </main>
        </Fragment>
      ) 
      :(<Login /> )
      }
    </div>
  );
}

export default App;
