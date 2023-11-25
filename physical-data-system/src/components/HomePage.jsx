import { useState } from "react";
import { Button } from "@mui/material";
import ListView from "./List/ListView";
const HomePage = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      {/* <div>
        <p>{{ count }}</p>
      </div> */}
      <div>
        <p>{count}</p>
        <Button variant="contained" onClick={increment}>
          Click me
        </Button>
        <ListView/>
      </div>
    </div>
  );
};

export default HomePage;
