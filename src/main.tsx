import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import FormComponent from "./Form.tsx"

// import MouseEventsExample from './MouseEventsExample.tsx';
// import ControlledForm from "./ControlledForm.tsx";
import ControlledForm2 from "./ControlledForm2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FormComponent /> */}
    {/* <MouseEventsExample /> */}
    {/* <ControlledForm /> */}
    <ControlledForm2 />
  </StrictMode>
);
