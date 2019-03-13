
   var myobject= {
       value:0,
       increment: function (intc){
           this.value += typeof inc ==='number' ? inc : 1;
       }
   }
   myobject.increment();
//    document.writeln(myobject.value); 
   console.log(myobject.value);
   myobject.increment(2);
   console.log(myobject.value);
   myobject.double= function(){
       var that =this;
       var helper =function(){
           that.value =add (that.value,that.value);
       }
       helper();
   };
   myobject.double();
   console.log(myobject.value);