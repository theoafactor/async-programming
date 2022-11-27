(async function(){
    function greetUser(){

        return new Promise((resolve, reject) => {
    
            setTimeout(function(){
    
                resolve("Hello everyone")
    
            }, 5000)
          
    
        })
    
    }
    
    result = await greetUser()
    console.log(result)
    console.log("happy");
}())


