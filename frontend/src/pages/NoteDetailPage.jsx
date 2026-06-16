import { useParams } from "react-router-dom";

const NoteDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Note detail</h1>
      <p>Note ID: {id}</p>
    </div>
  );
};

export default NoteDetailPage;
