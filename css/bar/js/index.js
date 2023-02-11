let buttonBar   = document.getElementById('buttonBar')
let content     = document.querySelector('.content')

buttonBar.addEventListener('click', () => {

    content.classList.toggle('active')

})