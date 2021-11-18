import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Icons from "react-feather";

const AddPlanetModal = (props) => {
    // const [show, setShow] = useState(false);
    
    // const handleClose = () => setShow(true);
    return (
        <Modal {...props} size="lg" aria-labelledby="modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2 className="primary-heading">Planet</h2>
          <form>
                    <div class="mb-3">
                        <label class="form-label">Image</label>
                        <input type="text" class="form-control" id="image" name="" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" name="name" />
                    </div>
                    <div class="mb-3 form-check">
                        <label for="floatingTextarea">Description</label>
                        <textarea class="form-control" id="floatingTextarea" />
                    </div>
                    <Modal.Footer>
                    <Button className="btn-cancel">
                        Cancel
                    </Button>
                    <Button className="btn-create">
                        Create Planet
                    </Button>
                    </Modal.Footer>
            </form>
        </Modal.Body>
      </Modal>
    );
  };
const CreatePlanet = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button size="lg" className="btn-add" onClick={() => setShowModal(true)}>
                <Icons.Plus />
            </Button>

            <AddPlanetModal show={showModal} onHide={() => setShowModal(false)} />
        </>
    )
}

export default CreatePlanet
