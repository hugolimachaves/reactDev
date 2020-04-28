import React from "react";
import "./styles.css";
import Card from "./components/Cards";
import Nav from "./components/Navbar";

const card1 = {
  image: "https://media1.giphy.com/media/37DjyUkbLgNpu/200.gif",
  cardName: "Sou Foda",
  btName: "botao",
  texto:
    "Maecenas convallis magna ut nulla lacinia dignissim. Nam quis consectetur nibh, quis accumsan leo. Suspendisse quis semper eros...",
  imgDescription: "default"
};

export default function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Card obj={card1} id="card1" />
      <Card obj={card1} id="card2" />
      <Card obj={card1} id="card3" />
      <Card obj={card1} id="card4" />
      <Card obj={card1} id="card5" />
      <Card obj={card1} id="card6" />
      <Card obj={card1} id="card7" />
      <Card obj={card1} id="card8" />
    </div>
  );
}
