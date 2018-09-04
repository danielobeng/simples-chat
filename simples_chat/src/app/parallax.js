const jumbotron = document.getElementById('jumbotron')

const wScroll = () => {

    window.addEventListener('scroll', (event) => {

        const scrollPos = jumbotron.scrollTop;
        console.log(scrollPos)
    })

};

export default wScroll;


