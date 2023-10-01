import {getCastById} from '../../services/theMoiveApi';

const Cast = ({id}) => {
    
     console.log(id);
    getCastById(id)
    .then(data => console.log(data));

    return (

        <div><h1>HELLO</h1></div>
    )

}

export default Cast;