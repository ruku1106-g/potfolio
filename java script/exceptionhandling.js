
        console.log("start");
        try{ 
            var a=10/x;
            console.log(a);
        }
        catch(e){
            console.log(e); // if we just give e it will give full error but if we give e.message only the required message like x is not defined
        }
        finally{
        console.log("end");
        }


          try{
            var a=10/x;
            console.log(a);
        }
        catch(a){
            console.log("its wrong",a.message);
        }
        finally{
        console.log("end");
        }


          try{
            var a=10;
            console.log(a);
            throw new Error("10/x is the error line"); // if u want to customeize  ur own error
        }
        catch(e){
            console.log("its wrong",e.message); //e.message collect the message from the throw and prints here
        }
        finally{
        console.log("end");
        }


         try{
            
            var a=10/0; // u have error but u need to exute 1 line so we will make use of finally
            console.log(a);
         }
        finally{
        console.log("end");
        }
