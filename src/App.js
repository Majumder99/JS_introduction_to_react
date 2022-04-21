// function LatestApp() {
//   return <h1>{"This is latestApp"}</h1>;
// }

// const properties = (props) => {}
// const Properties = (props) => {
//   return <p>The laptop's brand is {props.brand}</p>;
// };

// const MadeGoal = () => {
//   return <p>Goal is made</p>;
// };

// const MissGoal = () => {
//   return <p>Goal is missed</p>;
// };

// const App = (props) => {
//   const isGoal = props.isGoal;
//   // const varName = "msi";
//   // const shoot = () => {
//   //   alert("Great Shoot");
//   // };
//   // const shoot = (a, b) => {
//   //   alert(b.type);
//   // };
//   return <>{isGoal ? <MadeGoal /> : <MissGoal />}</>;
// };
import "./App.css";
const ItemShow = (props) => {
  return (
    <p>
      This is {props.keyName} and his name is {props.name}
    </p>
  );
};
const App = () => {
  const Person = [
    {
      id: 1,
      name: "Sourav",
    },
    {
      id: 2,
      name: "Mahim",
    },
    {
      id: 3,
      name: "Zafrul",
    },
  ];
  const myStyle = {
    backgroundColor: "#663399",
    color: "white",
    fontSize: "20px",
  };
  return (
    <>
      <h1>This is Person</h1>
      <h2>
        {Person.map((item) => (
          <ItemShow keyName={item.id} name={item.name} />
        ))}
      </h2>
      <p style={{ backgroundColor: "red", color: "white" }}>I am red</p>
      <h1 style={myStyle}>This is style</h1>
    </>
  );
};
export default App;
