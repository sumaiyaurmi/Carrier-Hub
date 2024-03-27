
const getStoredJobAplication =()=>{
const storeJobApplication =localStorage.getItem("job-application")
if(storeJobApplication){
    return JSON.parse(storeJobApplication)
}
else{
    return []
}

}

const saveJobAplication = id =>{

    const storeJobApplication=getStoredJobAplication();
    const exists= storeJobApplication.find(jobId => jobId === id)
    if(!exists){
        storeJobApplication.push(id)
        localStorage.setItem("job-application",JSON.stringify(storeJobApplication))
    }

}
 
export {getStoredJobAplication, saveJobAplication}