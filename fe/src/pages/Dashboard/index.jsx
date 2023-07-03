import React from "react";
import "./style.scss";
import { ChartCustom } from "../../components/ChartCustom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dashboard = () => {
  const [{ activeSeriesIndex, activeDatumIndex }, setState] = React.useState({
    activeSeriesIndex: -1,
    activeDatumIndex: -1,
  });

  return (
    <>
      <div className="row w-100 m-0">
        <div className="col-md-6 col-lg-3">
          <div className="card-dashboard">
            <span>Data Prestasi</span>
            <div>36</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-dashboard">
            <span>Info Mahasiswa</span>
            <div>36</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-dashboard">
            <span>Penerimaan Beasiswa</span>
            <div>36</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-dashboard">
            <span>Gallery</span>
            <div>36</div>
          </div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-8">
          <ChartCustom
            elementType="bar"
            setState={setState}
            activeDatumIndex={activeDatumIndex}
            activeSeriesIndex={activeSeriesIndex}
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="according-dashboard">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Data Presentasi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Info Mahasiswa</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Penerimaan Beasiswa</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
