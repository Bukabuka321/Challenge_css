import React from 'react';
import "./style.scss";
import gordon from "./Images/gordon.jpeg";
function App() {
  const [input, setInput] = React.useState("");
  const handleChange = (event) => setInput(event.target.value)
  return (
    <div className="App">
     <div className="container">
      <div className="main_info">
      <div className="photo">
        <img src={gordon} alt="gordon"/>
        </div> 
      <div className="description">
        <h1>Finally</h1>
        <p>some good ***** food</p>
        </div> 
      </div> 
      <div className="favorite">
        <h2>Do you like it?</h2>
        <form onSubmit={() => alert("thank you!")}>
          <label htmlFor="is_favorite">Type here:</label>
          <input  name="is_favorite" type='text' placeholder="Do you like it?" value={input} onChange={handleChange}>
          </input>
        </form>
        <button type="submit" onClick={() => alert("thank you!")}>Submit</button>
      </div>
     </div>
    </div>
  );
}

export default App;
