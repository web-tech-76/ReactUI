import React, { Fragment } from "react";
import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";


export default function App() {
  return (
    <Fragment>
      <div className="content-section implementation">
        <Card title="Simple Card" style={{ width: "360px" }}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </div>
        </Card>
      </div>
      <Accordion>
        <AccordionTab header="Header I">Content I</AccordionTab>
        <AccordionTab header="Header II">Content II</AccordionTab>
        <AccordionTab header="Header III">Content III</AccordionTab>
      </Accordion>
    </Fragment>
  );
}

