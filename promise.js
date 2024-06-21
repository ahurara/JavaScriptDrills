let isBooked =true;

const ride = new Promise((resolve, reject)=>{
    if(isBooked){
        resolve('Ride is booked')
    }
    else{
        reject("Sorry ride cancled!")
    }
}
)

ride.then((response)=>console.log(response))
.catch((err)=>console.log(err))