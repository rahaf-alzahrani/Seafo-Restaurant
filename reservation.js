// validation 

var fname;
var phone;
var Cnum;
var CnumValue;
var formxx;



function formValidation(){

//Cnum = document.getElementById('Customer')
fname = document.getElementById('Fname');
phone = document.getElementById('phone');
formxx= document.getElementById('Form1');

Cnum=formxx.Num.value;


//check if Full Name is null
if (fname.value == "" || fname.value == null)
{
    alert("Please enter your full name");
    return false; 
}

//check if name contain number
str = fname.value;
if(/\d/.test(str)) {
  alert ( "Full name can't contain numbers" );
    return false; }


//check if Phone Number is null
if (phone.value == "" || phone.value == null)
{
    alert("Please enter your phone number");
    return false;
}
//check if phone number is not a number  
str2= phone.value;
 if(/\d/.test(str2)) 
  {}
else
  { 
    alert("Phone number must be a number");
    return false;
  }
  
//check if Customer Number is null
if (Cnum == "" || Cnum == null)
{
    alert("Please enter how many customer");
    return false;
}

//check if number of customer between 1~8
if (Cnum <= 0 || Cnum > 8 )
{
    alert("Customer number should be from 1~8");
    return false;
} 

}
 
//------------------ Confration Massege ---------------------

    function Confirm(){
        if (formValidation() == false)
            return false;
            else 
        alert("Your reservation is Complete!");
    } 



    

//----------------------- Faten Part ------------------------
    
    var IForm;
    var CusrotmerInfo;
    var info1;
    var custnum ;
    var count=0 ;
    var count2=0 ;
    var prevent;
    var RES;
   var Counter=1;
    var reservedT=[] ;
    var Array1 = [];
var Savedcount=0;
    CusrotmerInfo=[];
   
      
    
        
        if(!localStorage.getItem('reservedT')){
            window.localStorage.setItem("reservedT", JSON.stringify(reservedT));
            }
          
        
            
            var Saved= [];
                Saved= localStorage.getItem("reservedT");
        Saved=JSON.parse(localStorage.getItem("reservedT"));
        window.localStorage.setItem("Saved", Saved);
       
        
        /* const Table;
        function SendToOrder () {
            Table =localStorage.getItem("reservedT");
            

        } */


        //-------------------
        /* function display(){
            for(var i=0;i<localStorage.length;i++){
                if()
                if(localStorage.getItem("test"+i)){
                var listId=$(JSON.parse(localStorage.getItem("test"+i)));
                var select=$("DropMenu");
                    $('<option>').text(listId).appendTo(select);
            
                }
              }
            } */


            /* var stringDropDowninnerHTML = "<option value='--select--'>--Select--</option>";
            localStorage.setItem("length", "3");
            var lengthOFDropDown = parseInt(localStorage.getItem("length"));
            for (var i = 0; i < lengthOFDropDown; i++) {
                stringDropDowninnerHTML += "<option value=" + i + ">" + i + "</option>";
            }
            document.getElementById('DropMenu').innerHTML = stringDropDowninnerHTML;
                */
            //----------------

    function TableColor(){
      
        RES=localStorage.getItem("reservedT");
        if(RES != null){
        for(var i=0 ;i<=RES.length;i++){
          if( RES[i]==1){
             document.getElementById("TableOne").style.background="#ff484888"; 
          }
          else
          if( RES[i]==2){
            document.getElementById("TableTwo").style.background="#ff484888"; 

        }
        else
        if( RES[i]==3){
          document.getElementById("TableThree").style.background="#ff484888"; 

      }
      else
      if( RES[i]==4){
        document.getElementById("TableFour").style.background="#ff484888"; 

    }
    else
    if( RES[i]==5){
      document.getElementById("TableFive").style.background="#ff484888"; 

  }
  if( RES[i]==6){
    document.getElementById("Tablesix").style.background="#ff484888"; 

}
        }
    }

  
Array1=localStorage.getItem("reservedT");
Saved=[];
Savedcount=0;
for(var j=0 ;j<=30 ;j++){
if(!isNaN(Array1[Counter])){
    Saved[Savedcount]=Array1[Counter];
    Savedcount= Savedcount+1 ;
    Counter= Counter+2;
}  
}

count=Saved.length; 
count = Array1.length-1 ;
    }

 
    function reservation(Tablenum){
        
        
    IForm= document.getElementById("Form1");
    custnum= IForm.Num.value;
    

    info1="Full name: "+IForm.name.value +"\n" +"Phone number:"+IForm.phone.value+"\n"+ "Number of customer: " +IForm.Num.value ;
    
    if(reservedT != null){
    
    for(var  i=0 ;i<=Saved.length;i++){
    if(Saved[i]==Tablenum){
    alert("The table number " + Tablenum + " is reserved, please choose another table"+"\n"+info1);
    prevent=Saved[i];
    }
    }
    
    }
    
    
    //-----------Validation after click image----------------
            //Cnum = document.getElementById('Customer')
            fname = document.getElementById('Fname');
            phone = document.getElementById('phone');
            formxx= document.getElementById('Form1');
        
            Cnum=formxx.Num.value;
        
        
        //cheack if Full Name is null
        if (fname.value == "" || fname.value == null)
        {
            alert("Please enter your full name");
            return false; 
        }

        
        str = fname.value;
        if(/\d/.test(str)) {
          alert ( "Full name can't contain numbers" );
            return false; }
        
        
        //cheack if Phone Number is null
        if (phone.value == "" || phone.value == null)
        {
            alert("Please enter your phone number");
            return false;
        }
        
        //Cheack if phone number is not a number 
        str2= phone.value;
        if(/\d/.test(str2)) 
        {}
        else
        { 
         alert("Phone number must be a number");
            return false;}
        
        //cheack if Customer Number is null
        if (Cnum == "" || Cnum == null)
        {
            alert("Please enter how many customer");
            return false;
        }
        
        //cheak if number of customer between 1~8
        if (Cnum <= 0 || Cnum > 8 )
        {
            alert("Customer number should be from 1~8");
            return false;
        } 
        
    //----------------------------------
    
    if(prevent != Tablenum  ){ 
    switch(Tablenum ){
    case 1:
    Saved[count]=1;
    
    document.getElementById("TableOne").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;
    localStorage.setItem("reservedT", Saved);
    count++;
    count2++;
    break;
    
    case 2:
    if(custnum > 4){
    if(custnum <= 6){
    alert("The number of chairs in this table is 4 not enough for "+custnum +" customers"+"\n"+"please choose another table with 6 chairs ");
    }
    else
    if(custnum <= 8){
    alert("The number of chairs in this table is 4 not enough for "+custnum +" customers"+"\n"+"please choose another table with 8 chairs ");
    }
    }
    if(custnum <= 4){
        Saved[count]=2;
        
    document.getElementById("TableTwo").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;

    localStorage.setItem("reservedT", Saved);
        
    count++;
    count2++;
    }
    
    
    break;
    case 3:
    if(custnum > 6){
    if(custnum >= 6){
    alert("The number of chairs in this table is 6 not enough for "+custnum +" customers"+"\n"+"please choose another table with 8 chairs ");
    }
    }
    if(custnum <= 6){
        Saved[count]=3;
        
    document.getElementById("TableThree").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;
    localStorage.setItem("reservedT", Saved);
      
    count++;
    count2++;
    }
    
    break;
    case 4:
    if(custnum > 6){   
    if(custnum >= 6){
    alert("The number of chairs in this table is 6 not enough for "+custnum +" customers"+"\n"+"please choose another table with 8 chairs ");
    }
    }
    if(custnum <= 6){
        Saved[count]=4;
       
    document.getElementById("TableFour").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;
    localStorage.setItem("reservedT", Saved);
        
    count++;
    count2++;
    }
    break;
    
    case 5:
    if(custnum > 4){
    if(custnum <= 6){
    alert("The number of chairs in this table is 4 not enough for "+custnum +" customers"+"\n"+"please choose another table with 6 chairs ");
    }
    else
    if(custnum <= 8){
    alert("The number of chairs in this table is 4 not enough for "+custnum +" customers"+"\n"+"please choose another table with 8 chairs ");
    }
    }
    if(custnum <= 4){
        Saved[count]= 5;
      
    document.getElementById("TableFive").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;
    localStorage.setItem("reservedT", Saved);
    count++;
    count2++;
    }
    
    break;
    case 6:
   
    Saved[count]= 6;

 
    document.getElementById("Tablesix").style.background= "#ff484888" ;
    CusrotmerInfo[count2]= info1;
    localStorage.setItem("reservedT", Saved);
    count++;
    count2++;
    break;
    
    
    }
    }
    

    
        }
    
