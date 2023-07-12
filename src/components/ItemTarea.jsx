import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const ItemTarea = ({ article }) => {
  const { titulo } = article;
  return (
    <article className="d-flex justify-content-between bg-white my-1 py-2 border-5">
      <div className="ms-3">
        <h5 className="my-3">{titulo}</h5>
      </div>
      <div className="me-3">
        <Button
          className="btn-agregar-tarea "
          variant="outline-danger"
          type="submit"
        >
          <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
        </Button>
      </div>
    </article>
  );
};

export default ItemTarea;
