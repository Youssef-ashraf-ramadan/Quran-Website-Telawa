// explore button
let explorebtn = document.querySelector('.title .btn'),
    HadithSection = document.querySelector('.hadith');
explorebtn.addEventListener('click', () => {
    HadithSection.scrollIntoView({
        behavior: "smooth"
    })

})



let fixednav = document.querySelector('.header');
let scrollBtn = document.querySelector('.scrollBtn');
let bars = document.querySelector('.header .bars');
sidebar = document.querySelector('.header ul')
window.addEventListener("scroll", () => {
    window.scrollY > 100 ? fixednav.classList.add('active') : fixednav.classList.remove('active');
    window.scrollY > 500 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
   
})
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
bars.addEventListener('click', () => {
    sidebar.classList.toggle("active")
})

// Hadith changer 

let hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');

let hadithIndex = 0;
HadithChanger();
function HadithChanger() {
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
        .then(response => response.json())
        .then(data => {
            let Hadiths = data.data.hadiths;
            changeHadith();
            function changeHadith() {
                hadithContainer.innerText = Hadiths[hadithIndex].arab;
                number.innerText = `300 - ${hadithIndex + 1}`
            }
            next.addEventListener('click', () => {
                hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
                changeHadith()
            })
            prev.addEventListener('click', () => {
                hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
                changeHadith();
            })
        })
}

// link sections 
let sections = document.querySelectorAll('section'),
    links = document.querySelectorAll('.header ul li ');
links.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.header ul li.active').classList.remove('active');
        link.classList.add('active')
        let target = link.dataset.filter;
        sections.forEach(section => {
            if (section.classList.contains(target)) {
                section.scrollIntoView({
                    behavior: "smooth"
                })
            }
        })
    })
})
/*******change lectures ******** */
let lec1 = document.querySelector('.lec1');
let lec2 = document.querySelector('.lec2');
let lec3 = document.querySelector('.lec3');
let lec4 = document.querySelector('.lec4');
let lec5 = document.querySelector('.lec5');
let lec6 = document.querySelector('.lec6');
let lec7 = document.querySelector('.lec7');
let lec8 = document.querySelector('.lec8');
let lec9 = document.querySelector('.lec9');
let lec10 = document.querySelector('.lec10');
let lec11 = document.querySelector('.lec11');
let lec12 = document.querySelector('.lec12');
let lec13 = document.querySelector('.lec13');
let lec14 = document.querySelector('.lec14');
let lec15 = document.querySelector('.lec15');
let lec16 = document.querySelector('.lec16');


let iframe = document.querySelector('iframe');
let iframe2 = document.querySelector('.iframe2');
let iframe3 = document.querySelector('.iframe3');
let iframe4 = document.querySelector('.iframe4');
let iframe5 = document.querySelector('.iframe5');
let iframe6 = document.querySelector('.iframe6');
let iframe7 = document.querySelector('.iframe7');
let iframe8 = document.querySelector('.iframe8');
let iframe9 = document.querySelector('.iframe9');
let iframe10 = document.querySelector('.iframe10');
let iframe11 = document.querySelector('.iframe11');
let iframe12 = document.querySelector('.iframe12');
let iframe13 = document.querySelector('.iframe13');
let iframe14 = document.querySelector('.iframe14');
let iframe15 = document.querySelector('.iframe15');
let iframe16 = document.querySelector('.iframe16');

let para = document.querySelector('.iframe-p');
let para2 = document.querySelector('.iframe2-p');
let para3 = document.querySelector('.iframe3-p');
let para4 = document.querySelector('.iframe4-p');
let para5 = document.querySelector('.iframe5-p');
let para6 = document.querySelector('.iframe6-p');
let para7 = document.querySelector('.iframe7-p');
let para8 = document.querySelector('.iframe8-p');
let para9 = document.querySelector('.iframe9-p');
let para10 = document.querySelector('.iframe10-p');
let para11 = document.querySelector('.iframe11-p');
let para12 = document.querySelector('.iframe12-p');
let para13 = document.querySelector('.iframe13-p');
let para14 = document.querySelector('.iframe14-p');
let para15 = document.querySelector('.iframe15-p');
let para16 = document.querySelector('.iframe16-p');


let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');

let right = document.querySelector('.right');
let right2 = document.querySelector('.right2');
let right3 = document.querySelector('.right3');
let right4 = document.querySelector('.right4');

lec1.addEventListener('click', () => {
    iframe.style.display = "inline";
    para.style.display = "inline";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec2.addEventListener('click', () => {
    iframe2.style.display = "inline";
    para2.style.display = "inline";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    para8.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec3.addEventListener('click', () => {
    iframe3.style.display = "inline";
    para3.style.display = "inline";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec4.addEventListener('click', () => {
    iframe4.style.display = "inline";
    para4.style.display = "inline";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

circle1.addEventListener('click', () => {
    circle2.classList.remove('active')
    circle3.classList.remove('active')
    circle4.classList.remove('active')

    circle1.classList.add('active')
    iframe.style.display = "inline";
    para.style.display = "inline";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    right.style.display = "inline";
    right2.style.display = "none";
    right3.style.display = "none";
    right4.style.display = "none";

    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
circle2.addEventListener('click', () => {
    circle1.classList.remove('active')
    circle3.classList.remove('active')
    circle4.classList.remove('active')

    circle2.classList.add('active')
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "inline";
    para5.style.display = "inline";
    right.style.display = "none";
    right2.style.display = "inline";
    right3.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    right4.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    para10.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
circle3.addEventListener('click', () => {
    circle1.classList.remove('active')
    circle2.classList.remove('active')
    circle4.classList.remove('active')
    right4.style.display = "none";

    circle3.classList.add('active')
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    right.style.display = "none";
    right2.style.display = "none";
    right3.style.display = "inline";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe9.style.display = "inline";
    para9.style.display = "inline";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
circle4.addEventListener('click', () => {
    circle1.classList.remove('active')
    circle2.classList.remove('active')
    circle3.classList.remove('active')
    circle4.classList.add('active')
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    right.style.display = "none";
    right2.style.display = "none";
    right3.style.display = "none";
    right4.style.display = "inline";

    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "inline";
    para13.style.display = "inline";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec5.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "inline";
    para5.style.display = "inline";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec6.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "inline";
    para6.style.display = "inline";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec7.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe7.style.display = "inline";
    para7.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec8.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe8.style.display = "inline";
    para8.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec9.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe9.style.display = "inline";
    para9.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec10.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe10.style.display = "inline";
    para10.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec11.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe11.style.display = "inline";
    para11.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec12.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe12.style.display = "inline";
    para12.style.display = "inline";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec13.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe13.style.display = "inline";
    para13.style.display = "inline";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec14.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "inline";
    para14.style.display = "inline";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "none";
    para16.style.display = "none";
})

lec15.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "inline";
    para15.style.display = "inline";
    iframe16.style.display = "none";
    para16.style.display = "none";
})
lec16.addEventListener('click', () => {
    iframe4.style.display = "none";
    para4.style.display = "none";
    iframe.style.display = "none";
    para.style.display = "none";
    iframe2.style.display = "none";
    para2.style.display = "none";
    iframe3.style.display = "none";
    para3.style.display = "none";
    iframe5.style.display = "none";
    para5.style.display = "none";
    iframe6.style.display = "none";
    para6.style.display = "none";
    iframe7.style.display = "none";
    para7.style.display = "none";
    iframe8.style.display = "none";
    para8.style.display = "none";
    iframe9.style.display = "none";
    para9.style.display = "none";
    iframe10.style.display = "none";
    para10.style.display = "none";
    iframe11.style.display = "none";
    para11.style.display = "none";
    iframe12.style.display = "none";
    para12.style.display = "none";
    iframe13.style.display = "none";
    para13.style.display = "none";
    iframe14.style.display = "none";
    para14.style.display = "none";
    iframe15.style.display = "none";
    para15.style.display = "none";
    iframe16.style.display = "inline";
    para16.style.display = "inline";
})





let surahcontainer = document.querySelector('.surahContainer')

//Surah Api 


getSurah();
function getSurah() {
    fetch("https://api.alquran.cloud/v1/meta")
        .then(response => response.json())
        .then(data => {

            let surah = data.data.surahs.references
            let surahnumber = 114;
            for (let i = 0; i < surahnumber; i++) {

                surahcontainer.innerHTML += `  <div class="surah">
    <p>${surah[i].name}</p>
    <p>${surah[i].englishName}</p>
</div>
`

            }



            let SurahsTitle = document.querySelectorAll('.surah');
            let popup = document.querySelector('.surah-popup');
            let ayatcontainer = document.querySelector('.ayat');

            SurahsTitle.forEach((title, index) => {
                title.addEventListener('click', () => {
                    fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                        .then(response => response.json())
                        .then(data => {
                            let Ayat = data.data.ayahs;
                            Ayat.forEach(aya => {
                                popup.classList.add('active');
                                ayatcontainer.innerHTML += `<p>(${aya.numberInSurah}) - ${aya.text}</p>`


                            })


                        })
                })

            })


            let closepopup = document.querySelector('.close-popup');
            closepopup.addEventListener('click', () => {
                popup.classList.remove('active');

            })

        })


}

//praytime Api

let cards = document.querySelector('.cards');

getprayTimes();
function getprayTimes() {
    fetch("http://api.aladhan.com/v1/timingsByCity?city=giza&country=egypt&method=8")
        .then(response => response.json())
        .then(data => {
            let times = data.data.timings;
            cards.innerHTML = "";
            for (let time in times) {
                cards.innerHTML += `     <div class="card">
    <div class="circle">
        <svg>
            <circle cx="100" cy="100" r="100"></circle>
        </svg>
        <div class="praytime">
            ${times[time]}
        </div>
    </div>
    <p>${time}</p>
</div>
</div>`
            }

        })
}

