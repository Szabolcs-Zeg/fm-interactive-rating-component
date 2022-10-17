var rate = document.querySelectorAll(".rate");
var result =0;
document.getElementById('sub').addEventListener("click", vote);

rate.forEach ( r =>{
      r.addEventListener('click', function () {setRate(r.innerHTML, r.id);
    })
})

function setRate(ratex, rid) {
   rate.forEach (item => {
        if (item.classList.contains("chosed") )
         {item.classList.remove("chosed");}
})

   document.getElementById(rid).classList.add("chosed");
   result = document.getElementById(rid).innerHTML;
}

function vote() {
    if (result != 0){
        document.getElementById("answer").innerHTML = " You selected "+ result + " out of 5";
        document.getElementById("slider-container").style.marginLeft="-100%";
    }
}