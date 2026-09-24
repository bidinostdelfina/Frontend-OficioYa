import { useParams, useNavigate } from 'react-router-dom'
import Encabezado from '../components/Encabezado.jsx'
import TarjetaProfesional from '../components/TarjetaProfesional.jsx'
import { profesionales } from '../data/datos.js'

function PerfilProfesional() {
  const { id } = useParams()
  const navigate = useNavigate()

  const profesional = profesionales.find((p) => p.id === Number(id))

  if (!profesional) {
    return (
      <>
        <Encabezado mostrarPerfil={true} />
        <div className="seccion">
          <p>Profesional no encontrado.</p>
          <button onClick={() => navigate('/resultados')}>Volver a resultados</button>
        </div>
      </>
    )
  }

  return (
    <>
      <Encabezado mostrarPerfil={true} />

      <button className="volver-resultados" onClick={() => navigate(-1)}>
        ← VOLVER A RESULTADOS
      </button>

      <TarjetaProfesional profesional={profesional} modo="perfil" />
    </>
  )
}

export default PerfilProfesional