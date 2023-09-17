import Button from "./components/Buton";

function App() {
  return (
    <div>
      <Button color="info"
      onClick={() => console.log("Clicked")}
      >My Button</Button>
    </div>
  );
}
export default App;
