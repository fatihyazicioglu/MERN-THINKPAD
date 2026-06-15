import { useParams } from 'react-router-dom'

export function NoteDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Note detail</h1>
      <p>Note ID: {id}</p>
    </div>
  )
}
