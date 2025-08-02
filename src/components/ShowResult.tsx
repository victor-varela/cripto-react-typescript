import type { CriptoStore } from "../types"

//Lo que hiciste se llama indexed access type. el uso de corchetes...
const ShowResult = ({data}: {data:CriptoStore['result']}) => {
    
  return (
    <h2>Resultados...
      <p>{data.VALUE}</p>
    </h2>
  )
}

export default ShowResult