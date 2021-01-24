
let sectionList = document.querySelectorAll('section');
let fragment = document.createDocumentFragment();
for (var section of sectionList){
  let newlist= document.createElement('li');
  let anchorLinkp1 = section.getAttribute('data-nav');
  let anchorLinkp2 = section.getAttribute('id');
  let l = document.createElement('a');
  let link = `#${anchorLinkp2}`;
  l.setAttribute("href",link);
  l.setAttribute("class","menu__link")
  t = document.createTextNode(anchorLinkp1);
  l.appendChild(t);
  newlist.appendChild(l);
  fragment.appendChild(newlist);
}
let element  = document.querySelector('ul');
element.appendChild(fragment);





let ele = document.querySelectorAll("a");





for (let k of ele ){
    let z = k.getAttribute('href');
    k.addEventListener("click", function myfunc(){

      document.querySelector(".your-active-item").classList.remove("your-active-item");
      k.classList.add("your-active-item");
      document.querySelector(".your-active-class").classList.remove("your-active-class");
      document.querySelector(z).classList.add("your-active-class");





    });
}






/*

window.addEventListener("scroll", function myfuncc(){

  let options = {
     root:null,

      rootMargin: '0px',
      threshold: 0.1};



      let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

         if (entry.isIntersecting) {

            entry.target.classList.add("your-active-class");

        } else  {
         document.querySelector("section").classList.remove("your-active-class");
        }

             observer.unobserve(entry.target);

          }
        )} ,options);



      for (let s in sectionList) {observer.observe(s)}


});
*/
