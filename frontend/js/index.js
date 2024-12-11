async function printData() {
    console.log("hai");
    const res= await fetch("http://localhost:3000/getemp")
    console.log(res);
    
    if(res.status==200){
        const employee= await res.json()
        console.log(employee);
    //     str=``
    //     employee.map((employee)=>{
    //         str+=`
    //         <div class="card">
    //             <div class="profile-img"></div>
    //             <h3>${employee.name}</h3>
    //             <p>post</p>
    //             <p>post</p>
    //             <p>post</p>
    //             <div class="btn-card">
    //                 <a href="./pages/edit.html"><button style="background-color: blue;">edit</button></a>
    //                 <button style="background-color: red;">delete</button>
    //             </div>
    //         </div>
    //         `
    //     })
    //     document.getElementById("card-display").innerHTML=str
    }
    
}

printData()