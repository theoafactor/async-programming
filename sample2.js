const promise = new Promise(async (resolve, reject) => {

    let feedback = await fetch("https://randomuser.me/api/")

    // console.log("Feedback: ", feedback)
    if(feedback.status == 200){
        feedback = await feedback.json();
        resolve(feedback)
    }else{
        reject("No data")
    }

})

promise.then(resolve_feedback => {
    console.log("then: ", resolve_feedback)
}).catch(reject_feedback => {
    console.log("catch: ", reject_feedback)
})


console.log("Working");






