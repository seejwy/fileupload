export default function DataRow({ data }: { data: Email }) {
  const { id, name, email, body } = data;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{body}</td>
    </tr>
  );
}
