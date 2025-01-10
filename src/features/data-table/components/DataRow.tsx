export default function DataRow({ data }: { data: Email }) {
  const { id, name, email, body } = data;
  return (
    <tr className="odd:bg-blue-50">
      <td>{id}</td>
      <td className="text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </td>
      <td className="text-ellipsis whitespace-nowrap overflow-hidden">
        {email}
      </td>
      <td className="text-ellipsis whitespace-nowrap overflow-hidden">
        {body}
      </td>
    </tr>
  );
}
