import type { PairResponseSchema } from "../schemas"

const ShowResult = ({data}: {data: z.infer<typeof PairResponseSchema>}) => {
  
    
  return (
    <h2>Resultados...
      <p>{data.VALUE}</p>
    </h2>
  )
}

export default ShowResult