import { useParams } from "@remix-run/react";

export default function GameDetail() {
  const { id } = useParams();

  return <div>The game id is {id}</div>;
}
