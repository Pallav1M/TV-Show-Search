const form = document.querySelector('#searchform');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form); (from the above line)
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const config = { params: { q: searchTerm } }
    // every pair will be added to the string below
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // go to network -> header to see the query
    // console.log(res.data[0].show.image.medium);
    // the above line displays the url of the image. Next,we want to display the image 
    makeImages(res.data);
    form.elements.query.value = '';
})
const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result)
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
