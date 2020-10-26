function verifSaisie() {
    var form = document.getElementById('form');
    var verif = true;
  
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    email= document.getElementById("email").value;
    email2 = document.getElementById("email2").value;
    
    if (document.querySelector('input[name="copier_email"]:checked')) {
      copier = document.querySelector('input[name="copier_email"]:checked').value;
      if (copier == "oui") {
        email2 = email;
        document.getElementById("email2").value = email2;
      }
    } else {
      verif = false;
      document.getElementById('copier_email').focus();
    }

    diplome= document.getElementById("diplome").value;
    ddn=document.getElementById("ddn").value;
    ddn = ddn.split("-");
  

    if (diplome == '') {
      verif = false;
      document.getElementById('diplome').focus();
    }

    programmation=document.getElementsByName("programmation");
    prog="";
    for (var i = 0; i < programmation.length; i++) {
              if (programmation[i].checked)
                prog += programmation[i].value+" ";
    }
    if (prog == "") {
      verif = false;
    }

    if (email == '' || !document.getElementById("email").checkValidity()) {
      verif = false;
      document.getElementById('email').focus();
    }

    if (document.querySelector('input[name="genre"]:checked')) {
      genre= document.querySelector('input[name="genre"]:checked').value;
    } else {
      verif = false;
      document.getElementById('genre').focus();
    }

    if (ddn == '') {
      verif = false;
      document.getElementById('ddn').focus();
    }
    if (prenom == '') {
      verif = false;
      document.getElementById('prenom').focus();
    }
    if (nom == '' ) {
      verif = false;
      document.getElementById('nom').focus();
    }
  
    if (verif == true) {
        form.submit();
    } else {
        console.log('false');
    }
  }

  function generateResult() {
    var values = location.search.substring(1).split("&");
    group = document.createElement("div");
    group.setAttribute("class","result-group");

    Object.values(values).forEach( value => {
      value = value.split("=");

      div = document.createElement("div");
      div.setAttribute("class","result-element");
      para = document.createElement("p");

      para.innerHTML = decodeURIComponent(UpperFirst(value[0].replace(/\+/g," "))) +" : ";
      if (value[0] != "hobbies") {
        para.innerHTML += decodeURIComponent(value[1]);
      } else {
        let img = document.createElement("img");
        img.setAttribute("src","../contenu/images/"+decodeURIComponent(value[1]).split(':')[0]);
        para.appendChild(img);
      }
      

      div.appendChild(para);
      group.appendChild(div);
      
    });
    document.body.appendChild(group);

  }

  function UpperFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}