const url='https://www.youtube.com/'
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click',()=>{
    location.href=url;
})
console.log(button)