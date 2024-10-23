function ListItem({ title, date }: { title: string; date: string }) {
  return (
    <>
      <tr className="p-4 mt-4">
        <td>
          <p className="text-[0.7em]">{date}</p>
        </td>
        <td>
          <p className="w-full">{title}</p>
        </td>
      </tr>
    </>
  );
}

export default ListItem;
