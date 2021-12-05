
/* 实现展开菜单 */
function cuidroplist() {
  document.getElementById("cuidroplist").classList.toggle("listshow");
}

/* 实现snackbar */
function cuisnackbarshow() {
  var x = document.getElementById("cuisnackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


window.onload = () => {
  const menu = document.querySelector('.menu')
  const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
  menu.style.height = '0'

  openMenu = e => {
      e.preventDefault()

      menu.style.left = `${e.clientX}px`
      menu.style.top = `${e.clientY + 5}px`
      menu.style.height = `${menuHeight}px`
      menu.classList.add('is-active')

      return false
  }

  colseMenu = () => {
      menu.style.height = '0'
      menu.classList.remove('is-active')
  }

  window.onclick = () => colseMenu()
}

let shareData = {
  title: 'Huton design',
  text: 'have a nice weekend',
  url: 'https://connect.ourstudio.top/',
}

const btn = document.querySelector('#sharingcui');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {navigator.share(shareData)});

function jump(){
    window.location.href="https://www.aliyundrive.com/s/qfoSdVZaivc";
}
function jump2(){
    window.location.href="https://github.com/connect-ui/ui";
}