async function printData() {
    console.log("hai");
    const res= await fetch("http://localhost:3000/getemp")
    console.log(res);
    
    if(res.status==200){
        const employee= await res.json()
        console.log(employee);
        str=``
        employee.map((employee)=>{
            str+=`
            <div class="card">
                <div class="profile-img"></div>
                <h3>${employee.name}</h3>
                <p>${employee.gender}</p>
                <p>${employee.email}</p>
                <p>${employee.phone}</p>
                <div class="btn-card">
                    <a href="./pages/edit.html"><button style="background-color: blue;">edit</button></a>
                    <button style="background-color: red;"  onclick="handleDelete('${employee._id}')">delete</button>
                </div>
            </div>
            `
        })
        document.getElementById("card-display").style.justifyContent=employee.length>=4?"space-between":"left"
        document.getElementById("card-display").innerHTML=str
    }
    
}

printData()

async function handleDelete(id){
    console.log("HAI");
    
    const res= await fetch("http://localhost:3000/delete",{
        method:"DELETE",
        headers:{"Content-Type":"text/plain"},
        body:id
    })
    if(res.status==200){
        alert("Successfully Deleted")
        printData();
        
    }
    else{
        alert("Failed to Delete.Try again...")
    }
}