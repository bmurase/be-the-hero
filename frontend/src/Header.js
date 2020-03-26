//sempre importar o react para fazer um JSX (componente)
//o nome do arquivo deve começar sempre com letra maiúscula
import React from 'react';

//children é uma propriedade (props.children)
export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

/* export default Header; */