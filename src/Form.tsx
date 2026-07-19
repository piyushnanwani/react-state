import React, {useState} from 'react';

const FormComponent: React.FC = () => {
  const [name, setName] = useState<string>('');

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Hello, " + name + "!");

  }
  function handleChange (event: React.ChangeEvent<HTMLFormElement>) {
    setName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit} >
      <input 
        value={name}
        type="text"
        onChange={handleChange}
        placeholder= "Enter your name"
       />
       <button type="submit">Submit</button>
      </form>
  )
}

export default FormComponent;