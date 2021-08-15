


function activeImpression(event) {
  //  let impression  = document.getElementById('impression');
  //  impression.classList.toggle('active');

  console.log(event.target.classList.toggle('active'))

}


function slide() {
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function donate() {
  let donation = document.getElementById('donation');
  document.getElementById('continue').style.display = "none";
  donation.classList.toggle('active');
}

function collapsMenu() {
  let menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

function closeMenu() {
  let menu = document.getElementById('mobileMenu');
  menu.classList.remove('active');
}


function foldSidebar() {
  document.getElementById('leftSidebar').classList.toggle('close')
}

window.onload = function () {

  if (window.innerWidth <= 768) {
    let sidebar = document.getElementById("leftSidebar");
    sidebar.classList.add('close');
  }


  // sidebar nav js
  var mycls = document.getElementsByClassName('nav-item');
  for (let i = 0; i <= mycls.length; i++) {
    mycls[i].addEventListener("click", function () {
      for (var j = 0; j < mycls.length; j++) {
        mycls[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
  // end 
}


function decrementQty() {
  let quantity = document.getElementById("quantity");
  quantity = parseFloat(quantity.value--);
  quantity = quantity - 1;
}

function increamntQty() {
  let quantity = document.getElementById("quantity");
  quantity = parseFloat(quantity.value++);
  quantity = quantity + 1;

  let product_price = document.getElementById("product_price");
  product_price = parseFloat(product_price.value);
  let price = quantity * product_price;

  let product_total_price = document.getElementById("product_total_price");
  product_total_price.innerHTML = price;
}
