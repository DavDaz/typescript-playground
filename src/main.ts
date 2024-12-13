// import { miAuto } from './bases/01-dependencia.ts'
// import { curso } from './bases/02-asociacion'
import './style.css'
//import { escuela } from './bases/03-agregacion'
//import { vehiculo } from './bases/07-practice-composicion'
import { robotDriver} from './bases/12-transport'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//   <h1>Mi aunto: ${miAuto}</h1>
//   </div>
// `

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//   <h1>Axionar ${curso}</h1>
//   </div>
// `

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Ejecutar escuela ${robotDriver}</h1>
  </div>
`