import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Buton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)} >Alert Alert!</Alert>}
      
      <Button color="info" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
  );
}
export default App;
