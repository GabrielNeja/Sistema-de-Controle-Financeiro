import HomePage from "./components/HomePage/HomePage";
import Global from "./styles/global";
import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [transactions, setTransactions] = useState([]); 

  return (
    <div>
      <Global />

      {isLogged ? (
        <Dashboard
          setIsLogged={setIsLogged}
          transactions={transactions} 
          setTransactions={setTransactions} 
        />
      ) : (
        <HomePage setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;