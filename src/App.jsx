import './App.css'
import Calculator from "./components/Calculator.jsx";
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap');
`;

function App() {

  return (
    <div className="App">
      <Calculator />
    </div>
  )
}

export default App
