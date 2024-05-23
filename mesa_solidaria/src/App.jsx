import { Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <p>NavBar</p>
      <Outlet />
      <p>Footer</p>
      
    </div>
  );
}

export default App;
