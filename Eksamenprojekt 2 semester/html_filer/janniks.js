// function + Array
let li = document.querySelectorAll(".list ul li");
let list = document.querySelector(".list");

let element = 0,
  count = 0;

//setInterval () method / (loop er ++)
setInterval(() => {
if (element < li.length -1){
 list.style.transform = `translateY(-${(count += 4)}em)`;
 element++;
} else {
  element= 0;
  count = 0;
  list.style.transform = `translateY(-${(count)}em)`;
}
},2000);
