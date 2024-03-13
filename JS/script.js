
const ordinateur = document.getElementById("ordinateur");// récupération balise div id ordinateur

console.log(ordinateur);


const article = document.querySelectorAll(".article"); // récupération des classes article

console.log(article);
let butsupp = document.querySelector(".Supprimer");


const bouton_aimer = document.getElementById("bouton_aimer")
//console.log(bouton_aimer);

 
for (let i = 0; i < article.length; i++){
    let butPlus = article[i].children[5].children[0];
    let butMoins = article[i].children[5].children[2];

    


    let quantite = article[i].children[5].children[1];
    let qte = parseInt(quantite.innerHTML);
    

    let prix = article[i].children[3];
    let prixUnitaire = parseInt(prix.innerHTML);
    

    let prixTotal = article[i].children[7];
    

    const bouton_aimer = article[i].children[9].children[0];
   // console.log(bouton_aimer);
    const butSupp = article[i].children[9].children[1];
    //console.log(butSupp);

    butPlus.addEventListener ("click", function (){

        qte++
        console.log(qte);

        quantite.innerHTML = qte;
        prixTotal.innerHTML = qte * prixUnitaire;
        Somme()
        
    })
    
    butMoins.addEventListener("click", function (){
        if (qte > 0) {
            qte--
            quantite.innerHTML = qte ;
            prixTotal.innerHTML = qte * prixUnitaire;
            Somme();
        }

    });
    bouton_aimer.addEventListener('click', function () {
        
        if (bouton_aimer.style.color=="black"){
            bouton_aimer.style.color="red"
        }else{
            bouton_aimer.style.color="black"
        }

    //    if (bouton_aimer.classList.contains("rouge")) {
    //         bouton_aimer.classList.remove('rouge');
    //     } else {
    //         bouton_aimer.classList.add('rouge');
    //     }
      });


      butSupp.addEventListener('click', function (){
        
        
      });
    };

    
   

    

    function Somme (){
        let sum = 0;
        let MontantTotal = document.getElementById("Total")
        for (let i =0; i< article.length; i++) {
            let total = article[i].children[7]
        sum += parseInt(total.innerHTML)
    
        }
    MontantTotal.innerHTML = sum;
    }
      

    








    

  


   