import { useEffect } from "react";

export default function Ue() {

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h1>Hello</h1>;
}
export default Ue;