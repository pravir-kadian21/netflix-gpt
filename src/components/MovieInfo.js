import React from "react";
import {
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";

const MovieInfo = ({ open, setOpen, movie }) => {
  const { poster_path, title, overview, release_date } = movie;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalContent style={{ background: "black", color: "white" }}>
        <ModalDescription>
          <div className="flex gap-12">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              // className="w-full"
            />
            <div>
              <h1 style={{ color: "white" }}>{title}</h1>
              <h4>Release Date: {release_date}</h4>
              <h6>{overview}</h6>
              {/* <button className="mb-0">Close</button> */}
            </div>
          </div>
        </ModalDescription>
        <ModalActions className="text-end">
          <button className="mb-0" onClick={() => setOpen(false)}>
            Close
          </button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};

export default MovieInfo;
