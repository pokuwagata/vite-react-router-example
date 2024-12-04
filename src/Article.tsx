import { useParams } from "react-router";

export function Article() {
  const { id } = useParams();

  return (
    <>
      <h1>Article {id}</h1>
      <p>{window.location.href}</p>
    </>
  );
}
