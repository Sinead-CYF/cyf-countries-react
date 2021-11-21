import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import { updatedAllCountries } from "./updatedAllCountries"
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <Header/>
      <Cards allCountries = {updatedAllCountries}/>
      <Footer/>
    </div>
  );
}

export default App;
