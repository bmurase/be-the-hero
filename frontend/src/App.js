// import React, {useState} from 'react';
import React from 'react';
import './global.css'

import Routes from './routes';
// import { Route } from 'react-router-dom';

// import Logon from './pages/Logon';

/* import Header from './Header'; */
/*não preciso colocar o /index porque sempre que
importamos uma pasta, ele vai procurar pelo arquivo index
*/

/* function App() {
  //useState retorna um array com 2 posições
  //a primeira com o valor e a outra com função de atualização
  //Array[valor,funcao]

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
} */

  export default function App() {
    return (
      <Routes/>
    );
  }