const burgerwrapper = document.querySelector('.burger-wrapper')
const menuBarItemWrapper = document.querySelector('.menuBar-itemWrapper')
const menuBarTitleIcon = document.querySelector('.menuBar-titleIcon')


function burgerClick() {
    console.log('burgerClick');
    menuBarItemWrapper.classList.toggle('notShow')
    menuBarTitleIcon.classList.toggle('notShow')
}