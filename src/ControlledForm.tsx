import React, { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    
    const { name, value } = e.target; // object destructuring
    // console.log(name, value);

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submit " + name + " " + message + " " + email)
  }
  return (
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
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <input
          name="message"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter message"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
