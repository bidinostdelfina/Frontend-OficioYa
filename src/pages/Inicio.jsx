import Encabezado from '../components/Encabezado.jsx'
import BarraBusqueda from '../components/BarraBusqueda.jsx'
import Categoria from '../components/Categoria.jsx'
import { categoriasPopulares } from '../data/datos.js'

function Inicio() {
  return (
    <>
      <Encabezado mostrarPerfil={true} />

      <section className="hero">
        <h1>¿QUÉ SERVICIO ESTAS BUSCANDO?</h1>
        <p>Encontrá los mejores profesionales</p>
        <BarraBusqueda />
      </section>

      <section className="seccion">
        <h2>CATEGORIAS POPULARES</h2>
        <div className="grilla-categorias">
          {categoriasPopulares.map((cat) => (
            <Categoria key={cat.id} {...cat} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Inicio