import React from 'react';
const Welcome=(props)=>{
  return <div>{props.children}</div>
}
function App(){
  return(
    <Welcome>
      <h1>Hello World</h1>
    </Welcome>
  );
};
export default App;
