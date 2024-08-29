export default function Blog({ params }: { params: { id: string } }) {
  return <div>Ini id : {params.id}</div>;
}
