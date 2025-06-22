import { useParams } from "react-router-dom";

export default function PetitionPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Petition Details</h1>
      <p>Petition ID: {id}</p>
      {/* Add petition detail implementation here */}
    </div>
  );
}
