let lampNode = document.querySelector(".lamp");
let OffNode = document.querySelector("#off");
let pageNode = document.querySelector('main')
OffNode.addEventListener('click', function(){
    lampNode.classList.add('opacity-0')
    lampNode.innerHTML = '<img src="assets/dark.png"></img>';
    pageNode.classList.add('dark');
    pageNode.classList.remove('light');
    console.log('flag');
});