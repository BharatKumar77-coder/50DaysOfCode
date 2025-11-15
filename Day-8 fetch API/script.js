
// fetch API
const URL = "https://api.thecatapi.com/v1/images/search"

const getImage = async () => {
    console.log("Getting data....")
    let response = await fetch(URL);
    // console.log(response);

    // convert JSON data to JS object
    let data = await response.json();
    // console.log(data);

    document.getElementById("myImage").src = data[0].url

};