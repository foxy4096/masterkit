import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      // sourcery skip: no-eval
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4  rounded-lg shadow-lg h-screen">
      <div className="text-2xl font-semibold mb-4 text-center">Calculator</div>
      <div className="mt-4 text-right">
        <div className="calc-display bg-gray-950 p-4 rounded-t-lg font-mono text-xl">
          {display || 0}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-gray-900 p-4 rounded-b-lg">
        <button onClick={() => handleButtonClick("7")} className="calc-button">
          7
        </button>
        <button onClick={() => handleButtonClick("8")} className="calc-button">
          8
        </button>
        <button onClick={() => handleButtonClick("9")} className="calc-button">
          9
        </button>
        <button onClick={() => handleButtonClick("+")} className="calc-button">
          +
        </button>
        <button onClick={() => handleButtonClick("4")} className="calc-button">
          4
        </button>
        <button onClick={() => handleButtonClick("5")} className="calc-button">
          5
        </button>
        <button onClick={() => handleButtonClick("6")} className="calc-button">
          6
        </button>
        <button onClick={() => handleButtonClick("-")} className="calc-button">
          -
        </button>
        <button onClick={() => handleButtonClick("1")} className="calc-button">
          1
        </button>
        <button onClick={() => handleButtonClick("2")} className="calc-button">
          2
        </button>
        <button onClick={() => handleButtonClick("3")} className="calc-button">
          3
        </button>
        <button onClick={() => handleButtonClick("*")} className="calc-button">
          *
        </button>
        <button onClick={() => handleButtonClick("0")} className="calc-button">
          0
        </button>
        <button onClick={handleClear} className="calc-button">
          C
        </button>
        <button onClick={handleCalculate} className="calc-button">
          =
        </button>
        <button onClick={() => handleButtonClick("/")} className="calc-button">
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
