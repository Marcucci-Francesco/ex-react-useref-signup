import React, { useMemo } from 'react'
import { useState, useRef } from 'react'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

const Main = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault()

    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;

    if (!fullName.trim() || !userName.trim() || !password.trim() || !specialization.trim() || !experience.trim() || !description.trim() || !isUsernameValid || !isPasswordValid || !isDescriptionValid) {
      alert('Tutti i campi sono obbligatori!')
      return
    }
    console.log('submit effettuato', {
      fullName,
      userName,
      password,
      specialization,
      experience,
      description
    });
  }

  const isUsernameValid = useMemo(() => {
    const charsValid = userName.split('').every(char => {
      letters.includes(char.toLowerCase()) || numbers.includes(char);
    })
    return charsValid && userName.trim().length >= 6;
  }, [userName]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split('').some(char => letters.includes(char.toLowerCase())) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);

  return (
    <div>
      <h1 className='text-danger m-4'>Web Developer Signup</h1>
      <div className='container d-flex mx-4 p-0'>
        <form onSubmit={handlerSubmit} className='form row'>
          <label className="form-label col-3 mb-4">
            <p>Nome completo</p>
            <input
              type="text"
              ref={fullNameRef}
              className="form-control" />
          </label>
          <label className="form-label mx-4 col-3 mb-4">
            <p>Username</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => { setUserName(e.target.value) }}
              className="form-control" />
            {userName.trim() && (
              <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
                {isUsernameValid ? 'Username valido' : 'Username non valido, deve contenere almeno 6 caratteri alfanumerici'}
              </p>
            )}
          </label>
          <label className="form-label mx-4 col-3 mb-4">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="form-control" />
            {password.trim() && (
              <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
                {isPasswordValid ? 'Password valida' : 'Password non valida, deve contenere almeno 8 caratteri, con almeno 1 numero ed 1 simbolo'}
              </p>
            )}
          </label>
          <label className="form-label col-3 mb-4">
            <p>Specializzazione</p>
            <select
              ref={specializationRef}
              className='form-select'
            >
              <option value="">Seleziona...</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </label>
          <label className="form-label mx-4 col-3 mb-4">
            <p>Anni di esperienza</p>
            <input
              type="number"
              ref={experienceRef}
              className="form-control" />
          </label>
          <label className="form-label col-10 mb-4">
            <p>Descrizione</p>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="form-control"
              rows={4}
            />
            {description.trim() && (
              <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
                {isDescriptionValid ? 'Descrizione valida' : `Descrizione non valida, deve contenere tra 100 e 1000 caratteri (${description.trim().length} caratteri attuali)`}
              </p>
            )}
          </label>
          <button type='submit' className='btn btn-primary col-3 mx-2'>Registrati</button>
        </form>
      </div>
    </div>
  )
}

export default Main