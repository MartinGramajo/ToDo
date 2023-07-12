import { Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const FormularioTarea = () => {
  return (
    <div className="container">
      <Form>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Ingrese una Tarea" />
          <Button
            className="btn-agregar-tarea"
            variant="outline-primary"
            type="submit"
          >
            <FontAwesomeIcon className="fs-4" icon={faPlusCircle} />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default FormularioTarea;
