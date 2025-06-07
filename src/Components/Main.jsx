import React from 'react'
import { useState } from 'react'

const Main = () => {

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (!fullName || !userName || !password || !specialization || !experience || !description) {
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

  return (
    <div>
      <h1 className='text-danger m-4'>Web Developer Signup</h1>
      <div className='container d-flex mx-4 p-0'>
        <form onSubmit={handlerSubmit} className='form row'>
          <label className="form-label col-3 mb-4">
            <p>Nome completo</p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => { setFullName(e.target.value) }}
              className="form-control" />
          </label>
          <label className="form-label mx-4 col-3 mb-4">
            <p>Username</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => { setUserName(e.target.value) }}
              className="form-control" />
          </label>
          <label className="form-label mx-4 col-3 mb-4">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="form-control" />
          </label>
          <label className="form-label col-3 mb-4">
            <p>Specializzazione</p>
            <select
              value={specialization}
              onChange={e => { setSpecialization(e.target.value) }}
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
              value={experience}
              onChange={(e) => { setExperience(e.target.value) }}
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
          </label>
          <button type='submit' className='btn btn-primary col-3 mx-2'>Registrati</button>
        </form>
      </div>
    </div>
  )
}

export default Main