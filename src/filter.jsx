import { useState } from "react";

const FilterForm = ({setData}) => {

    const [ texto, setTexto ] = useState('');

    const handleTextChange = (e) => setTexto(e.target.value);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(texto === ""){
            window.alert("Campo sin completar")
            return;
        }
        InfoApi();
    }

 async function InfoApi(){
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c986bb6f73msh221dc6d05660648p1747ebjsn968c363d0e93',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        try {
            const respuesta = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${texto}`,options);
           
            const resultado = await respuesta.json();
            
            setData(resultado);
            

        } catch (er) {
            
        }
    }
    return(
        <form onSubmit={handleSubmit} className='animate__animated animate__flipInY '>
        <input type="text" name="text" id="text" value={texto} onChange={handleTextChange}/>
        <button type='submit'>Buscar</button>
    </form>

    );
};

export default FilterForm;