import { Notify } from "notiflix";
import { useState } from "react";

const Form = ({setSearchParams}) => {

    
     const [query,setQuery] = useState('');

   const handleChange = e => {

    setQuery(e.target.value);

   }


    const handleSubmit = async e => {
        e.preventDefault();
    
        if (query.trim() === '') {
          return Notify.failure("query can't be empty");
        }
    
        setSearchParams({query});
       
      };

    return (

<form onSubmit={handleSubmit}>
<input value={query} autoFocus onChange={e => handleChange(e)} name="text"/>
<button type="submit">Search</button>
</form>
    )
}

export default Form;

