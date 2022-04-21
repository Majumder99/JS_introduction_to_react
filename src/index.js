import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useState } from "react";
import NewApp from "./NewApp";
// const myFirst = <h1>Hi there </h1>;

// const variable = document.getElementById("main");
const variable = document.getElementById("root");
// const root = createRoot(variable);
const root = ReactDOM.createRoot(variable);
root.render(<h1>Hi Sourav</h1>);

// Using Array
const myArray = ["Sourav", "Majumder", "Salman"];
const main = document.getElementById("main");
const newRoot = ReactDOM.createRoot(main);
// const myList = myArray.map((item) => {
//   return <p>{item}</p>;
// });
// newRoot.render(myList);
// newRoot.render(
//   myArray.map((item) => {
//     return <p>{item}</p>;
//   })
// );

// Using Destructuring
const myPerson = {
  name: "Sourav",
  age: 25,
  job: "CEO",
  gender: "Male",
  relation: {
    type: "Lady",
    school: "Ju",
  },
};

myFunction(myPerson);

function myFunction({ name, age, gender, relation: { school } }) {
  const message =
    "This is " +
    name +
    " and his age is " +
    age +
    " and he is " +
    gender +
    " and school is " +
    school;
  //   newRoot.render(message);
}

//Spread operator
const number = [1, 3, 4, 5, 6, 7];
// const var1 = [...number];
// console.log(var1);
const [one, two, ...rest] = number;
newRoot.render(
  <>
    <p>{one}</p>
    <p>{two}</p>
    <p>{rest}</p>
  </>
);
console.log(rest);

// function LatestApp() {
//   return <h1>This is sourav</h1>;
// }

const app = document.getElementById("app");
const latestRoot = ReactDOM.createRoot(app);
latestRoot.render(<App isGoal="true" />);
// latestRoot.render(<LatestApp />);

const form = document.getElementById("form");
const rootForm = ReactDOM.createRoot(form);

const MyForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have entered ${name}`);
  };
  const [textarea, setTextarea] = useState("Set the textarea");
  const [myCar, setMycar] = useState("");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit me" />
        <br />
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <select value={myCar} onChange={(e) => setMycar(e.target.value)}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    </>
  );
};

rootForm.render(<MyForm />);

const rootNew = document.getElementById("route");
const newRoot1 = ReactDOM.createRoot(rootNew);
newRoot1.render(<NewApp />);
