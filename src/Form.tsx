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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    console.log("Key ", event.key)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLFormElement>) => {
      console.log("Key ", event.key);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input 
        value={name}
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        placeholder= "Enter your name"
       />
       <button type="submit">Submit</button>
      </form>
  )
}

export default FormComponent;