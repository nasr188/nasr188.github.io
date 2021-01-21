






//fare un toggle per Burger-menu & navigation-list
function myFunction(){
     document.querySelector("#line-1").classList.toggle("change1");
     document.querySelector("#line-2").classList.toggle("change2");
     document.querySelector("#line-3").classList.toggle("change3");
     //navigation-list
     document.querySelector(".navvv") .classList.toggle("change");
     //paragrafo display none
     document.querySelector(".paragrafo p").classList.toggle("changep");   
}

//function per disablitare la class change
function remove(){
    let nav = document.querySelector(".navvv");
    if(nav.classList.contains("change")){
        nav.classList.remove("change");
        //remove burger-menu toggle
        document.querySelector("#line-1").classList.remove("change1");
        document.querySelector("#line-2").classList.remove("change2");
        document.querySelector("#line-3").classList.remove("change3");
        //paragrafo display none
        document.querySelector(".paragrafo p").classList.toggle("changep"); 
    }
};

///corsi.html code
 
//una funzione per ritornare a Home Page
function goHome(){
    window.location = "../../index.html"
}

/// creare card content per i corsi 
 
 ////corsi
  var url ="https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/corsi/corsi.json";
    fetch(url)
  .then(response=>{
      return response.json()
  }).then(result=>{ 
      let datt = result.data;
      let father = document.querySelector(".card-menu");
  //father.appendChild(cardCom);
      let output="";
console.log(datt);
datt.forEach(data => {

     let cards= `<div class="card-com" id = "${data.id}">
<div class="img" >
<img src ="${data.avatar}" alt="">
</div>
<div class="link">
<a>  ${data.header}</a>
</div>
 </div>`
    
    output+= cards

});
father.innerHTML = output
    
  });

  
  
  ///////////////////////
  var url ="https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/corsi/corsi.json";
    fetch(url)
  .then(response=>{
      return response.json()
  }).then(result=>{ 
      let datt = result.data;
     
      let div1 = document.querySelector("#div1");
      console.log(div1);
      div1.addEventListener("click", ()=>{
          alert("div1")
      })
      let div2 = document.querySelector("#div2");
      console.log(div2);
      div2.addEventListener("click", ()=>{
        alert("div2")
    })
      let div3 = document.querySelector("#div3");
      console.log(div3);
      div3.addEventListener("click", ()=>{
        alert("div3")
    })
      let div4 = document.querySelector("#div4");
      console.log(div4);
      div4.addEventListener("click", ()=>{
        alert("div4")
    })
      let div5 = document.querySelector("#div5");
      console.log(div5);
      div5.addEventListener("click", ()=>{
        alert("div5")
    })
    
   
   

       


 
});



  

  ////docenti fetch 
  let url2 = "https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/docenti/docenti.json"
  fetch(url2).then(res=>{
      return res.json()
  })
  .then(data=>{
      console.log(data.id)
     
      //data.id.forEach(()=>{

for(let i=0;i<data.id.length;i++){
    let cover = document.querySelector(".idcover");
    //console.log(data.id[i].img);
    console.log(data.id.length);
    //creare image linke
    let img = document.createElement("img");
    img.setAttribute("src",data.id[i].img);
    //console.log(img);
    //creare div con class "id-img" dove si append image tag
    let divImg = document.createElement("div");
    divImg.setAttribute("class","id-img");
    divImg.appendChild(img);
    //console.log(divImg);

    
    //creare list per mettere il nome e il cognome 
    let li1 = document.createElement("li");
    li1.textContent= data.id[i].nome;
    let li2 = document.createElement("li");
    li2.textContent=data.id[i].cognome;
    //console.log(li1);
    //console.log(li2);
    let ulp = document.createElement("ul");
    ulp.appendChild(li1);
    ulp.appendChild(li2);
    //console.log(ulp);
    let idInfo=document.createElement("div");
    idInfo.setAttribute("class","id-info");
    idInfo.appendChild(ulp);
    //console.log(idInfo);

    //creare un div parent per appendere tutti i div dentro
    let wraper = document.createElement("div");
    wraper.setAttribute("class","wraper");
    wraper.appendChild(divImg);
    wraper.appendChild(idInfo);
    //console.log(wraper);
    cover.appendChild(wraper);
  
///creare un div per CV
divImg.addEventListener("click",(e)=>{

    const target = e.target;
   // alert(target)
    console.log(target);
    if(target.matches("img")){
        //cambiare lo stile del principale wraper per addattarsi quando faccio click su di esso(bubbling) 
       wraper.classList.add("wraperch");
      

        //wraper.style.width="100vw";
        let bioDiv = document.createElement("p");
        bioDiv.classList.add("bio");
        
       let paragg = document.createTextNode(data.id[i].cv);
       bioDiv.append(paragg);
       divImg.style.width="125px";
       
       img.style.width="125px";
        wraper.insertAdjacentElement("beforeend",bioDiv);

        //creare un close button
        let close = document.createElement("span");
       let closetx= document.createTextNode("Close");
       close.append(closetx);
       //console.log(close);

       //close css style
       close.style.fontSize="30px";
       close.style.cursor="pointer";
       close.style.color="red";

       // aggiungere close al div parent
       bioDiv.insertAdjacentElement("afterend",close)
        
       //facciamo close chiudere il div quando si fa onclick
       close.addEventListener("click", ()=>{
         if(wraper.style.display===""){
            
             wraper.classList.remove("wraperch");
             wraper.removeChild(bioDiv);
             wraper.removeChild(close);
             divImg.style.width="100%";
             img.style.width="100%";
         }
            

         

         
       })

        console.log(wraper)

    }
})
    
   
}
  
     
})
    .catch(err=> {
          console.log(err);
    });
    
  
///galleria js 
let url3 = "https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/galleria/galleria.json"
fetch(url3).then(res=>{
    return res.json()
}).then(data=>{
    console.log(data)
    let dat = data.photo;
    dat.forEach(()=>{
        let cavv = document.querySelector(".imgcav");
        //console.log(cavv)
        let img = document.createElement("img");
        //img.setAttribute("src")
        console.log(dat.length)
        for(let i=0; i<dat.length; i++){
            //console.log(img)
            img.setAttribute("src", dat[i].img)
            cavv.appendChild(img);
        }
        
    })
//})
  
}).catch((err)=>{
    console.log(err);
})
     
 
