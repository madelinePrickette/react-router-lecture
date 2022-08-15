import {useParams} from 'react-router-dom';
// This useParams takes what is in the url, like localhost:5000/animals/5 or
// localhost:5000/animals/8 and get the id to use it to get additional info

function AnimalDetail() {

    //const params = useParams();
    //const id = params.id;
    const {id} =useParams();

    // by taking id out of the url and using that to target it,
    // we are displaying it on the dom uniquely, based on each unique
    // identifier. So... localhost:5000/animals/5 shows DETAILS 5
    // and... localhost:5000/animals/8 shows DETAILS 8

    // so what we can do with this is get all the information for an animal with an 
    // id of 8 or 5 and display that information on each page uniquely.
    return(
        <>
            <h1>DETAIL {id}</h1>
        </>
    )
}
// WE ARE TRYING TO GET FOX SPECIFIC DETAIL PAGE
export default AnimalDetail;