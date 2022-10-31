alert("Visualize o maior numero");

function maior(n1,n2,n3){
     if(n1>= n2 && n1>=n3)
     return n1;
     else if(n2 >= n1 && n2>= n3)
     return n2;
     else return n3;
    }

   var numeros = [];

   for(let i = 0;i < 3; i++){
            
            var num= parseInt(prompt("Digite " + (i+1) + " numero"));
            numeros.push(num);
        }

        alert("Maior numero: " + maior(numeros[0], numeros[1],numeros[2]));


           var desc = function(n1,n2,n3){
            var x = Array(n1,n2,n3);
            return x.sort(function(n1,n2){return n1-n2});
          }

         alert("Descendente: " + desc);
