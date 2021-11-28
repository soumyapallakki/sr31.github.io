burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')



burger.addEventListerner('click', () => {
    navList.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-class-resp');

})
