import {loadToAnotherTable} from '../Services/ServiceApp.js';

export default function HomePage() {
    function loadData() {
        loadToAnotherTable()
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log("Error Inside Catch: "+err)
        },[]);
    }

    return (
        <div>
            <h1>This is Home Page where all the types of movies are listed.</h1>
            <button onClick={loadData}>Load Data</button>
        </div>
    );
}