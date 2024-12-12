document.getElementById("saveform").addEventListener("click",(e)=>{
    const name=document.getElementById("first-name").value+" "+document.getElementById("last-name").value
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age=document.getElementById("age").value
    const email =document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const address=document.getElementById("address").value
    const jobtype=document.getElementById("jobtype").value
    const salary=document.getElementById("salary").value
    const data={name,gender,age,email,phone,address,jobtype,salary}
    console.log(data);
    fetch("http://localhost:3000/update",{
        method: "PUT"
        ,headers:{"Content-Type":"text/json"},
        body:JSON.stringify(data)
    })
})