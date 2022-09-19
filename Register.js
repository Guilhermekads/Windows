import React, {useState} from 'react';
import './Register.css';
import axios from 'axios';

const Register = ()=>{
  const [values, setValues] = useState();
  const[nome, setnome] = React.useState('');
  const[sobrenome, setsobrenome] = useState('');
  const[cpf, setcpf] = React.useState('');
  const[numero, setnumero] = React.useState('');
  const[email, setemail] = React.useState('');
  const[senha, setsenha] = React.useState('');

  const onSubmit = () => {
    axios.post("http://localhost:3001/Register", {
      nome: values.nome,
      sobrenome: values.sobrenome,
      cpf: values.cpf,
      numero: values.numero,
      email: values.email,
      senha: values.senha,
    })
    
  }

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
  return (
    <div className="App">
      <div className='top'>
      <div className='logo'>
       
      </div>
      </div>
      <div className='bot'>
      <div className='info'>
      <div className='form'>
      <form onSubmit={onSubmit} method='post' >
        <div className='es'>
        <div className='colum1'>
        <div className='nomed'>
          <input type='text' className='nome' placeholder='Nome' required value={nome}  onChange={handleaddValues}></input>
        </div>
        <div className='Sobrenomed'>
        <input type='text' className='Sobrenome' placeholder='Sobrenome' required value={sobrenome}  onChange={handleaddValues}></input>
        </div>
        <div className='cpfd'>
        <input className='cpf' type='text' placeholder='CPF' required value={cpf} onChange={handleaddValues}></input>
        </div>
        </div>
        <div className='colum2'>
        <div className='numerod'>
          <input className='numero' type='text' placeholder='Numero de telefone' required value={numero}  onChange={handleaddValues}></input>
        </div>
        <div className='emaild'>
        <input type='email' className='login' placeholder='Seu email...' required value={email}  onChange={handleaddValues}></input>
        </div>
        <div className='senhad'>
        <input type='password' className='senha' placeholder='Sua senha...' required value={senha}  onChange={handleaddValues}></input><br />
        </div>
        </div>
        </div>
        <div className='logard'>
        <input type='submit' value='Terminei' className='Logar'></input><br />
        <a href='/'>Volte para o Login</a></div>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Register;
