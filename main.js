let menutoggle = document.querySelector('.toggle');
let navigatetoggle = document.querySelector('.navigation'); {
    menutoggle.onclick = function() {
        menutoggle.classList.toggle('active')
        navigatetoggle.classList.toggle('active')
    }
}