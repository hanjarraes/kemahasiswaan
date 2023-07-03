import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import { dataGalery } from "./service";
import "./style.scss";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const GaleryData = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="d-flex justify-content-end mx-5 px-5 mt-3">
        <button className="btn btn-custom" onClick={handleClickOpen}>
          <span className="d-none d-md-block">Add New Foto</span>
          <i className="ri-file-excel-2-line d-block d-md-none" />
        </button>
      </div>
      <div className="scene container">
        {dataGalery.map((data) => {
          return (
            <label className="card-galery-wrap" data-aos="fade-up">
              <input type="checkbox" className="flipcard-galery" />
              <div className="card-galery">
                <div className="front card-galery-face">
                  <img src={data.img} alt="" className="card-galery-photo" />
                </div>
                <div className="back card-galery-face">
                  <p>{data.desc}</p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Galery = () => {
  return (
    <>
      <Header />
      <div className="scene container">
        {dataGalery.map((data) => {
          return (
            <label className="card-galery-wrap" data-aos="fade-up">
              <input type="checkbox" className="flipcard-galery" />
              <div className="card-galery">
                <div className="front card-galery-face">
                  <img src={data.img} alt="" className="card-galery-photo" />
                </div>
                <div className="back card-galery-face">
                  <p>{data.desc}</p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Galery;
