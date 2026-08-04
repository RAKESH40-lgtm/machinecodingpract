/**
 * Requirements
    1. Fetch Users
    Fetch data when the page loads.
    Show a loading indicator while fetching.
    If the API fails, show an error message.
    2. Render Users
    Display the following for each user:
    Name
    Email
    Company Name
    City
 * 
 */
let p = document.getElementById("initial")
let div = document.getElementById("root")



function renderContent(user) {
    user.forEach((item) => {
        let div1 = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        p1.innerText = item.name
        p2.innerText = item.email
        p3.innerText = item?.company?.name
        p4.innerText = item?.address?.city
        div1.appendChild(p1)
        div1.appendChild(p2)
        div1.appendChild(p3)
        div1.appendChild(p4)
        div1.style.border = "1px solid white"
        div1.style.margin = "2px"
        div.appendChild(div1)
    })
}
async function callApi() {
    let userdata = await fetch("https://jsonplaceholder.typicode.com/users")
    let jsonYData = await userdata.json()
    p.innerHTML = jsonYData.length
    console.log(jsonYData)
    renderContent(jsonYData)
}
callApi()