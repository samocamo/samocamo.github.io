const hamburger = document.getElementById("hamburger")
hamburger.addEventListener('click', function(e) {
  const ul = document.querySelector('nav > ul');
  ul.classList.toggle('menu-slide');
  hamburger.classList.toggle('cross');
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
  const toggleBtn = document.querySelector('.toggle-btn')
  toggleBtn.classList.toggle('minus');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown-2").classList.toggle("show")
  toggleBtn.classList.toggle('minus');
}
function myFunction3() {
  document.getElementById("myDropdown-3").classList.toggle("show");
}
function myFunction4() {
  document.getElementById("myDropdown-4").classList.toggle("show");
}

const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('minus');

});




