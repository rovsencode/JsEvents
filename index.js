const inputName = document.querySelector("#name");
const inputPrice= document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const btn = document.querySelector(".btn");
const table = document.querySelector("#tab");
const inputs = document.querySelectorAll("input");
const flt = document.querySelector(".flt");
const myDiv = document.querySelector(".myDiv");
const fltTab = document.querySelector("#flt-tab");
const tab = document.querySelector(".tab");
const sort = document.querySelector(".sort");
const searchBtn = document.querySelector(".search")
const searchInput = document.querySelector("#search");
const sortTable = document.querySelector(".sorT");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const chose = document.querySelector("#chose");
const demo = document.querySelector("#demo");
function Product(name, price, category) {
  this.productName= name;
  this.productPrice = price;
  this.productCategory = category;
}
function validateNumber(e) {
            const pattern = /^[0-9]$/;

            return pattern.test(e.key )
        }
const arr = [];
const arrName = [];
btn.addEventListener("click", () => {
  table.classList.add("show");
  fltTab.classList.remove("show");
  const product = new Product(inputName.value, inputPrice.value, inputCategory.value);
     
  if ( arrName.includes(inputName.value)) {
    alert("bele bir mehsul var");
  }
  else {
    arr.push(product);
  arrName.push(product.productName);
    table.innerHTML+='<tr scope="row" table-dark><td>' +product.productName + '</td><td>' + product.productPrice + '</td><td>' +product.productCategory+ '</td></tr>';
  }
  console.log(arrName.indexOf(product));
  
  console.log(arr.forEach(function (item) {
    console.log(item);
  }));
})
flt.addEventListener("click", () => {
  let minP = min.value;
  let maxP = max.value;
  sortTable.classList.remove("show");
  table.classList.remove("show");
  fltTab.classList.add("show");
    var newArray=arr.filter(function (item) {
      return item.productPrice >= minP && item.productPrice <= maxP;
    });
  tab.innerHTML = "";
  newArray.forEach(function (item) {
    let text;
    text = '<tr scope="row" table-dark><td>' + item.productName + '</td><td>' + item.productPrice + '</td><td>' + item.productCategory + '</td></tr>';
    tab.innerHTML+= text;

  });
});
let check=0;
sort.addEventListener("click", () => {
  
  table.classList.remove("show");
    sortTable.classList.remove("show");
  fltTab.classList.add("show");

  if (check%2==0) {
    arr.sort((a, b) => a.productName.localeCompare(b.productName));
    check++;
  }
  else {
    arr.sort((a, b) => a.productName.localeCompare(b.productName));
    arr.reverse();
    check++;
  }
 tab.innerHTML = "";
  arr.forEach(function (item) {
     tab.innerHTML+='<tr scope="row" table-dark><td>' + item.productName + '</td><td>' + item.productPrice + '</td><td>' + item.productCategory + '</td></tr>';
  })
 
})
searchBtn.addEventListener("click", () => {
  table.classList.remove("show");
    sortTable.classList.remove("show");
  fltTab.classList.add("show");
  var finder = arr.find(function (item) {
    demo.innerHTML = searchInput.value;
    return item.productName === demo.innerHTML.trim();
  })
  tab.innerHTML = "";
  tab.innerHTML += '<tr scope="row" table-dark><td>' + finder.productName + '</td><td>' + finder.productPrice + '</td><td>' + finder.productCategory + '</td></tr>';
  
})
function myFunction() {
   
  let x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
