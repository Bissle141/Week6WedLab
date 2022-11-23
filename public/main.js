const btn = document.querySelector('button')

const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

const btn2 = document.querySelector('#button2')

const url = 'http://localhost:4000'

const getCat = () => {
    axios.get(`${url}/api/cat`)
    .then(res => {
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

btn2.addEventListener('click', getCat)
