import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi'; //feather icons
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            
            // salvando esses dados no navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BE THE HERO"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    {/* não uso mais o `a` para que a página
                    não reload tudo e seja mais rápido
                    além de utilizar o conceito de SPA (single page app?) */}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            {/* alt é atributo para texto alternativo à imagem */}
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}