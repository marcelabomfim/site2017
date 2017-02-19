"use strict";var speakersData=[{name:"Fábio Vedovelli",role:"Trabalha atualmente como Web developer para Octimine GmbH (Munique/Alemanha) e é entusiasta Vue.js",twitter:"@vedovelli",twitterLink:"http://twitter.com/vedovelli",photo:"assets/images/fabio-vedovelli-frontinsampa.jpg"},{name:"Bianca Brancaleone",role:"Sócia do Eu Compraria, Especialista em UX e Google Expert em UX, organizadora do GDG e Women Techmakers de Sorocaba",twitter:"@biab",twitterLink:"http://twitter.com/biab",photo:"assets/images/bianca-brancaleone-frontinsampa.jpg"},{name:"Raphael Fabeni",role:"Desenvolvedor na RedVentures e criador/organizador do #MeetupCSS SP",twitter:"@raphaelfabeni",twitterLink:"http://twitter.com/raphaelfabeni",photo:"assets/images/raphael-fabeni-frontinsampa.jpg"},{name:"Patrícia Silva",role:"Front-end Developer at MATERA Systems (Campinas/SP)",twitter:"@Paty_Go",twitterLink:"http://twitter.com/Paty_Go",photo:"assets/images/patricia-silva-frontinsampa.jpg"},{name:"Bruno Genaro",role:"Desenvolvedor Front-End na Cisco em Orlando/FL (USA) e organizador do OrlandoJS Meetup.",twitter:"@bfgenaro",twitterLink:"http://twitter.com/bfgenaro",photo:"assets/images/bruno-genaro-frontinsampa.jpg"},{name:"Jessica Hische",role:"Typographer & Illustrator",twitter:"jscahische",twitterLink:"http://twitter.com/jscahische",photo:"assets/images/speaker.jpg"},{name:"Jessica Hische",role:"Typographer & Illustrator",twitter:"jscahische",twitterLink:"http://twitter.com/jscahische",photo:"assets/images/speaker.jpg"},{name:"Jessica Hische",role:"Typographer & Illustrator",twitter:"jscahische",twitterLink:"http://twitter.com/jscahische",photo:"assets/images/speaker.jpg"}],timeline=[{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"},{hour:"08:00 - 09:00",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"John Doe",link:"http://www.teste.com"}],timelineTemplate=function(timeline){return timeline.map(function(item){return'\n        <div class="timeline-block">\n          <div class="timeline-circle"></div>\n          <div class="timeline-content">\n            <h3>'+item.title+"</h3>\n            <p>"+item.hour+"</p>\n            <p>"+item.description+'</p>\n            <p class="timeline-speaker">'+item.speaker+'</p>\n            <p><a href="#">+ detalhes</a></p>\n          </div>\n        </div>\n      '}).join("")},speakerTemplate=function(speaker){return speaker.map(function(item){return'\n        <figure class="speaker-item">\n          <img src="'+item.photo+'" alt="Palestrante '+item.name+'">\n          <figcaption>\n            <p>'+item.name+"</p>\n            <p>\n              "+item.role+'\n              <a href="'+item.twitterLink+'" target="_blank">'+item.twitter+"</a>\n            </p>\n          </figcaption>\n        </figure>\n      "}).join("")},clickMenu=function(){for(var taskItems=document.querySelectorAll("[data-menu-link]"),i=0,len=taskItems.length;i<len;i++){var taskItem=taskItems[i];contextMenuListener(taskItem)}},contextMenuListener=function(menu){var button=(document.querySelector("[data-check]"),document.querySelector(".menu-button"));menu.addEventListener("click",function(e){button.click()})};window.onload=function(){clickMenu();var timelineContainer=document.querySelector("[data-schedule]"),speakersContainer=document.querySelector("[data-speaker]");document.querySelector("[data-menu]").children;timelineContainer.innerHTML=timelineTemplate(timeline),speakersContainer.innerHTML=speakerTemplate(speakersData)};