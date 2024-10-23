import ListItem from "./_listItem/ListItem";

function ListOfBlogs() {
  interface blogListItem {
    title: string;
    date: string;
  }

  let listOfBlogs: Array<blogListItem> = [
    {
      title: "Initialisation",
      date: "July 3, 2024",
    },
    {
      title: "Taking some Ls",
      date: "July 4, 2024",
    },
    {
      title: "Actions are Supreme",
      date: "July 6, 2024",
    },
    {
      title: "Un-understandable",
      date: "July 8, 2024",
    },
    {
      title: "Rap mentality",
      date: "July 12, 2024",
    },
    {
      title: "Most Successful Person in my life",
      date: "July 23, 2024",
    },
    {
      title: "3 am thoughts",
      date: "August 8, 2024",
    },
    {
      title: "Group-work",
      date: "August 13, 2024",
    },
    {
      title: "Working without proper plans is bullshit",
      date: "August 25, 2024",
    },
    {
      title: "Punctual",
      date: "August 30, 2024",
    },
    {
      title: "Fighting Brain Rot",
      date: "October 8, 2024",
    },
  ];

  return (
    <>
      <div className="p-4 bg-[#181818] rounded mt-2">
        <table className=" w-full items-center">
          <tbody>
            {listOfBlogs.map((blog) => {
              return (
                <ListItem key={blog.date} title={blog.title} date={blog.date} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListOfBlogs;
