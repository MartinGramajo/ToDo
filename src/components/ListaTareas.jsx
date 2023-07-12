import ItemTarea from "./ItemTarea";

const datos = [
  {
    id: 1,
    titulo: "Planificar",
  },
  {
    id: 2,
    titulo: "Maquetar",
  },
  {
    id: 3,
    titulo: "Codear",
  },
];

const ListaTareas = () => {
  return (
    <section className="container">
      {datos.map((article, i) => (
        <ItemTarea article={article} key={i} />
      ))}
    </section>
  );
};

export default ListaTareas;
