import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ControlledForm2() {

  const [formData, setFormData] = useState<FormData> ({
    name: "",
    email: "",
    message: ""
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // object destructuring
    console.log(formData);
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! ");
  };
  return (
    <>
      <h2>Controlled Form 2</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px"
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter message"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
