                  var x=0.7462;
                  var y=0.7462;
                  var z=0.7462;

                 function cli() {
                    var chbox;
                    chbox=document.getElementById('stud');
                 if (chbox.checked) {
                     x=0.856;
                    } else {x=0.7462;};
                   } 

                 function cli2() {
                    var chbox;
                    chbox=document.getElementById('stud2');
                 if (chbox.checked) {
                     y=0.856;
                    } else {y=0.7462;};
                   } ;

                 function cli3() {
                    var chbox;
                    chbox=document.getElementById('stud3');
                 if (chbox.checked) {
                     z=0.856;
                    } else {z=0.7462;};
                   } ;


                // обчислення зарплати нетто
                setInterval(function () {
                zpb = parseInt(document.calc1.zpbrutto.value, 10);
                zpn = zpb * x;
                
                document.calc1.zpnetto.value = zpn.toFixed(2);}, 100);


                // обчислення години*видайнiсть
               setInterval(function () {
                t = parseInt(document.calc2.time.value, 10);
                var wydt = document.getElementById("wydc");
                var wydt1 = wydt.options[wydt.selectedIndex].value;
                tzpb = t*wydt1;
                tzpn = t*wydt1*z;
                              
                
                document.calc2.tzpbrutto.value = tzpb.toFixed(2);
                document.calc2.tzpnetto.value = tzpn.toFixed(2);}, 100);



                 // обчислення видайностi 
                setInterval(function () {
                a = parseInt(document.calc.kar.value, 10);
                b = parseInt(document.calc.th.value, 10);
                c = a / b;
                
                document.calc.wyd.value = c.toFixed(2);}, 100);

                // обчислення порогу та зарплати 

                setInterval(function () {
                d=0;
                s=0;
                a = parseInt(document.calc.kar.value, 10);
                b = parseInt(document.calc.th.value, 10);
                c = a / b;
                if ((c<66) && (c>=0)){
                  s=13.70;
                
                  document.calc.step.value = "0-65";
                } 
                else 
                  {if ((c<76) && (c>=66)){
                  s=14.00;
                 
                 document.calc.step.value = "66-75";}

                else 
                  {if ((c<86) && (c>=76)){
                  s=14.50;
                 
                 document.calc.step.value = "76-85";}

                else 
                  {if ((c<96) && (c>=76)){
                  s=14.70;
                 
                 document.calc.step.value = "86-95";}

                else 
                  {if ((c<106) && (c>=96)){
                  s=15.70;
                
                 document.calc.step.value = "96-105";}

                else 
                  {if ((c<116) && (c>=106)){
                  s=17.20;
                 
                 document.calc.step.value = "106-115";}

                else 
                  {if ((c<126) && (c>=116)){
                  s=18.40;
                 
                 document.calc.step.value = "116-125";}

                else 
                  {if ((c<136) && (c>=126)){
                  s=20.00;
                 
                 document.calc.step.value = "126-135";}

                else 
                  {if ((c<146) && (c>=136)){
                  s=21.70;
                  
                 document.calc.step.value = "136-145";}

                else 
                  {if (c>=146) {
                  s=23.40;
                  
                 document.calc.step.value = "146";}}}}}}}}}}
                 
                  d=b*s;
                  d1=b*s; //брутто
                  d=d*y; //минус налоги
                  document.calc.wagesb.value = d1.toFixed(2);
                
                document.calc.wagesn.value = d.toFixed(2);}, 100);