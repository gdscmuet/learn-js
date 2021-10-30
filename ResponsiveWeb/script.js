const slide = document.querySelector(".slide-left");
const image = document.querySelector(".slider-image");
const name = document.querySelector(".slider-name");
const job  = document.querySelector(".slider-job");

let i = 1;

let names = {
	1 : "Peter Ronson",
	2 : "Emilia Jhonson",
	3 : "Ban Jason"
};

let jobs = {
	1 : "DOG OWNER",
	2 : "CAT OWNER",
	3 : "DOG OWNER"
};


setInterval(()=>{
	if( i==1 || i<=3 ){
		image.src = "images/face"+ i + ".jpg";
		name.innerHTML = names[2];
		name.textContent = names[i];
		job.textContent = jobs[i];
		i++;
	}
	else{
		i = 1;
	}
	
},2000);


//  Hamburger Button

let hamBtn = document.querySelector(".hamburger");
let target = document.querySelector(".navlinks");
let font = document.querySelector(".f");

hamBtn.addEventListener('click', () => {
	target.classList.toggle("show");
	if(font.classList[2] == 'fa-bars'){
		font.classList.replace('fa-bars','fa-times');
	}
	else if(font.classList[2] == 'fa-times'){
		font.classList.replace('fa-times','fa-bars');
	}
});


const header = document.querySelector("#navbar");

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

    if(scroll_position > 250){
        header.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.2)';
        header.style.position = 'fixed';
        header.style.zIndex = '100';
        header.style.backgroundColor = '#fff';
    }
  	else{
  		header.style.boxShadow = 'none';
  		header.style.position = 'relative';
        header.style.zIndex = '1';
        header.style.backgroundColor = 'transparent';
  	}
});