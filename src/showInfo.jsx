

const ShowInfo = ({data})=>{

    const {word,results,pronunciation} = data;

    return(
        <div className="definitions__container">
        <h1 className="definitions__word">Searching:{word}</h1><h1 className="definitions__pronunciation">Pronunciation:{pronunciation.all}</h1>

        {results.map( e => <p className="definitions__parrafos" key={e.length}>{e.definition}</p>)}
        </div>
    )
};

export default ShowInfo;