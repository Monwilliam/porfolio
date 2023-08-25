window.addEventListener('DOMContentLoaded', () => {
    const wrapper =document.querySelector('#wrapper');
    const home=document.querySelector('#gthome');
    const homef=document.querySelector('#gthomef');
    const home2=document.querySelector('#logo');
    const about=document.querySelector('#gtabout');
    const aboutf=document.querySelector('#gtaboutf');
    const services=document.querySelector('#gtservices');
    const servicesf=document.querySelector('#gtservicesf');
    const projects=document.querySelector('#gtportfolio');
    const projectsf=document.querySelector('#gtportfoliof');
    const contact=document.querySelector('#gtcontact');
    const contactf=document.querySelector('#gtcontactf');
    const dark=document.querySelector('#darkMode');
    const toDark=document.querySelector('#dMode');
    const nav=document.querySelector('nav');

    const homeDiv = document.querySelector('#home');
    const servicesDiv = document.querySelector('#services');
    const aboutDiv = document.querySelector('#num1');
    const projectsDiv = document.querySelector('#num2');


    home.addEventListener('click', () => { scrollTo({ top: 0, behavior: "smooth" }); });
    homef.addEventListener('click', () => { scrollTo({ top: 0, behavior: "smooth" }); });
    home2.addEventListener('click', () => { scrollTo({ top: 0, behavior: "smooth" }); });
    about.addEventListener('click', () => { aboutDiv.scrollIntoView({ behavior: "smooth" }); });
    aboutf.addEventListener('click', () => { aboutDiv.scrollIntoView({ behavior: "smooth" }); });
    services.addEventListener('click', () => { servicesDiv.scrollIntoView({ behavior: "smooth" }); });
    servicesf.addEventListener('click', () => { servicesDiv.scrollIntoView({ behavior: "smooth" }); });
    projects.addEventListener('click', () => { projectsDiv.scrollIntoView({ behavior: "smooth" }); });
    projectsf.addEventListener('click', () => { projectsDiv.scrollIntoView({ behavior: "smooth" }); });
    contact.addEventListener('click', () => { scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); });
    contactf.addEventListener('click', () => { scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); });
    window.addEventListener('scroll', () => { 
        if(window.scrollY > 0) {
        nav.style.backgroundColor = '#5d5cdcdd';
        if(!isLight){nav.style.backgroundColor = '#000000dd';}
         }
        else {
            nav.style.backgroundColor = 'transparent'; }

        chngClrIfInView(homeDiv, home);
        chngClrIfInView(servicesDiv, services);
        chngClrIfInView(aboutDiv, about);
        chngClrIfInView(projectsDiv, projects);


    });
    function chngClrIfInView(elementDiv, element){
        if(elementDiv.getBoundingClientRect().top <= 0 && elementDiv.getBoundingClientRect().bottom >= 0)
        {
            element.style.color = '#feb12f';
        } else {
            element.style.color = '#fff';
        }
    }


    let isLight = true;
    dark.addEventListener('click', () => { 
        
        if(isLight){
        toDark.href = 'styles/dark-styles.css';
        isLight = false;
        } else {
        toDark.href = '';
        isLight = true;
    }
     });
    
     var boxes = document.querySelectorAll('#servicesWrapper div');
     var maxHeight = 0;
     for (var i = 0; i < boxes.length; i++) {
       if (boxes[i].offsetHeight > maxHeight) {
         maxHeight = boxes[i].offsetHeight;
       }
     }
     for (var i = 0; i < boxes.length; i++) {
       boxes[i].style.height = maxHeight + 'px';
     }
   
   


    const bt=document.getElementsByClassName('butt');
    
    
    
    const boxcont=document.getElementsByClassName('boxcontent');
    


    function bt0clicked()
    {
        for(let i=0;i<5;i++)
        bt[i].classList.remove('clicked');
    bt[0].classList.add('clicked');
        for(let i=0;i<5;i++)
        boxcont[i].classList.remove('hide');
    }
    
    
    function bt1clicked()
    {
        for(let i=0;i<5;i++)
            bt[i].classList.remove('clicked');
        bt[1].classList.add('clicked');
        for(let i=0;i<5;i++)
            boxcont[i].classList.remove('hide');
        for(let i=2;i<5;i++)
            boxcont[i].classList.add('hide');
    }
    
    
    function bt2clicked()
    {
        for(let i=0;i<5;i++)
            bt[i].classList.remove('clicked');
        bt[2].classList.add('clicked');
        for(let i=0;i<5;i++)
            boxcont[i].classList.remove('hide');
        for(let i=0;i<5;i++)
            if(i!==2)boxcont[i].classList.add('hide');
    }

    function bt3clicked()
    {
        for(let i=0;i<5;i++)
            bt[i].classList.remove('clicked');
        bt[3].classList.add('clicked');
        for(let i=0;i<5;i++)
            boxcont[i].classList.remove('hide');
        for(let i=0;i<5;i++)
            if(i!==3)boxcont[i].classList.add('hide');
    }

    function bt4clicked()
    {
        for(let i=0;i<5;i++)
            bt[i].classList.remove('clicked');
        bt[4].classList.add('clicked');
        for(let i=0;i<5;i++)
            boxcont[i].classList.remove('hide');
        for(let i=0;i<5;i++)
            if(i!==4)boxcont[i].classList.add('hide');
    }

    
    bt[0].addEventListener('click',bt0clicked);
    bt[1].addEventListener('click',bt1clicked);
    bt[2].addEventListener('click',bt2clicked);
    bt[3].addEventListener('click',bt3clicked);
    bt[4].addEventListener('click',bt4clicked);


});