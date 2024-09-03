import { Boton } from './components/Boton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [rangeValue, setRangeValue] = useState(1)

  const selector = (e) => {
    setRangeValue(parseInt(e.target.value))
  }

  const agregarAlImput = (val) => {
    if (val === 'x') {
      val = '*';
    }
    setInput(input + val);
  };

  const mostrarResultado = () => {
    if (input === '' || isNaN(input[input.length - 1])) {
      alert('Debe ingresar una ecuación válida');
    } else {
      try {
        setInput(evaluate(input).toString());
      } catch (error) {
        alert('Error en la ecuación');
      }
    }
  };

  const resetear = () => {
    setInput('');
  };

  const eliminarUltimo = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className={`min-h-screen w-screen font-League flex-col justify-center items-center p-6 min-w-[328px] ${rangeValue === 2 ? 'bg-theme2-background-main text-theme3-text-darkBlue ' : rangeValue === 3 ? 'bg-theme3-background-main text-theme3-text-yellow ' : 'bg-theme1-background-main text-white'}`}>
      <div className='flex justify-between items-center w-full max-w-[550px] mx-auto'>
        <div>
          <h1 className='text-[30px] font-bold mt-4'>calc</h1>
        </div>
        <div className='flex-col items-end justify-center pt-2'>
          <div className='flex justify-end gap-4 mr-3 mb-[2px] font-semibold'>
            <p className='text-[12px]'>1</p>
            <p className='text-[12px]'>2</p>
            <p className='text-[12px]'>3</p>
          </div>
          <div>
            <form className='flex gap-7 items-center justify-end'>
              <p className='uppercase text-[12px] tracking-widest font-semibold'>theme</p>
              <div className='flex items-center rounded-xl'>
                <input onChange={selector} className={`border-none appearance-none rounded-xl max-w-[70px] h-[25px] px-1 ${rangeValue === 2 ? 'accent-theme2-key-toggleBg bg-theme2-background-toggle' : rangeValue === 3 ? 'accent-theme3-key-toggleBg bg-theme3-background-toggle' : 'accent-theme2-key-toggleBg bg-theme1-background-toggle'}`} type="range" min={1} max={3} defaultValue={rangeValue} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={`h-[90px] rounded-xl mt-8 mx-auto max-w-[550px] ${rangeValue === 2 ? 'bg-theme2-background-screen' : rangeValue === 3 ? 'bg-theme3-background-screen' : 'bg-theme1-background-screen'}`}>
        <p className='text-[40px] flex justify-end items-center h-full mr-6 ml-9 font-bold w-[268px] overflow-hidden md:w-[490px]'>{input}</p>
      </div>

      <div className={`p-6 md:p-8 my-6 rounded-xl h-full max-w-[550px] mx-auto ${rangeValue === 2 ? 'bg-theme2-background-toggle' : rangeValue === 3 ? 'bg-theme3-background-toggle' : 'bg-theme1-background-toggle'}`}>
        <div className="flex gap-[13px] md:gap-[22px] mb-[13px] md:mb-[22px] grid-rows-4">
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>7</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>8</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>9</Boton>
          <Boton manejarClick={eliminarUltimo} rangeValue={rangeValue}>DEL</Boton>
        </div>
        <div className="flex gap-[13px] mb-[13px] md:gap-[22px] md:mb-[22px] grid-rows-4">
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>4</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>5</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>6</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>+</Boton>
        </div>
        <div className="flex gap-[13px] mb-[13px] md:gap-[22px] md:mb-[22px] grid-rows-4">
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>1</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>2</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>3</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>-</Boton>
        </div>
        <div className="flex gap-[13px] mb-[13px] md:gap-[22px] md:mb-[22px] grid-rows-4">
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>.</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>0</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>/</Boton>
          <Boton manejarClick={agregarAlImput} rangeValue={rangeValue}>x</Boton>
        </div>
        <div className="flex gap-[13px] md:gap-[22px] grid-rows-2">
          <Boton manejarClick={resetear} rangeValue={rangeValue}>RESET</Boton>
          <Boton manejarClick={mostrarResultado} rangeValue={rangeValue}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
