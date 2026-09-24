import { useState } from 'react'
import Encabezado from '../components/Encabezado.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import CampoTexto from '../components/CampoTexto.jsx'
import Boton from '../components/Boton.jsx'

function RegistroProfesional() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    zona: '',
    telefono: '',
    horarios: '',
    oficio: ''
  })

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registro profesional:', datos)
  }

  return (
    <>
      <Encabezado textoDerecha="Volver" rutaDerecha="/registro" />
      <Tarjeta ancho="900px">
        <h1>Profesional</h1>
        <form onSubmit={handleSubmit} className="form-profesional">
          <CampoTexto label="NOMBRE" nombre="nombre" valor={datos.nombre} onChange={handleChange} />
          <CampoTexto label="APELLIDO" nombre="apellido" valor={datos.apellido} onChange={handleChange} />
          <CampoTexto label="EMAIL" nombre="email" tipo="email" valor={datos.email} onChange={handleChange} />
          <CampoTexto label="CONTRASEÑA" nombre="contrasena" tipo="password" valor={datos.contrasena} onChange={handleChange} />
          <CampoTexto label="ZONA DE COBERTURA" nombre="zona" valor={datos.zona} onChange={handleChange} />
          <CampoTexto label="TELEFONO" nombre="telefono" valor={datos.telefono} onChange={handleChange} />
          <CampoTexto label="HORARIOS" nombre="horarios" valor={datos.horarios} onChange={handleChange} />
          <div className="campo">
            <label htmlFor="oficio">OFICIO</label>
            <select id="oficio" name="oficio" value={datos.oficio} onChange={handleChange}>
              <option value="">Seleccioná un oficio</option>
              <option value="electricista">Electricista</option>
              <option value="plomero">Plomero</option>
              <option value="pintor">Pintor</option>
              <option value="carpintero">Carpintero</option>
              <option value="albañil">Albañil</option>
            </select>
          </div>
          <div className="boton-contenedor">
            <Boton texto="CREAR CUENTA" tipo="submit" variante="azul" />
          </div>
        </form>
      </Tarjeta>
    </>
  )
}

export default RegistroProfesional