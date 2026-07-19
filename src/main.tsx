import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import FormComponent from "./Form.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <FormComponent />
  </StrictMode>
);
