import Counter from "./Counter";

function App() {
  return (
    <div className="App" style={styleStuff}>
      <Counter color="Red" interval={5} />
      <Counter color="Green" interval={5} />
      <Counter color="Blue" interval={5} />
      <Counter color="Yellow" interval={5} />
    </div>
  );
}
const styleStuff = {
  display: "flex",
  flexDirection:"row",
  background:'black',
  justifyContent:"space-evenly"
}
export default App;
