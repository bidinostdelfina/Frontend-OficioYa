import { useState } from 'react'
import Encabezado from '../components/Encabezado.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import CampoTexto from '../components/CampoTexto.jsx'
import Boton from '../components/Boton.jsx'

function RegistroCliente() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
  })

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registro cliente:', datos)
  }

  return (
    <>
      <Encabezado textoDerecha="Volver" rutaDerecha="/registro" />
      <Tarjeta ancho="480px">
        <h1>Cliente</h1>
        <form onSubmit={handleSubmit}>
          <CampoTexto label="NOMBRE" nombre="nombre" valor={datos.nombre} onChange={handleChange} />
          <CampoTexto label="APELLIDO" nombre="apellido" valor={datos.apellido} onChange={handleChange} />
          <CampoTexto label="EMAIL" nombre="email" tipo="email" valor={datos.email} onChange={handleChange} />
          <CampoTexto label="CONTRASEÑA" nombre="contrasena" tipo="password" valor={datos.contrasena} onChange={handleChange} />
          <Boton texto="CREAR CUENTA" tipo="submit" variante="azul" />
        </form>
      </Tarjeta>
    </>
  )
}

export default RegistroCliente