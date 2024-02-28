let data = [
    {
        name : "Kashyap",
        src : "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Ramesh",
        src : "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Rita",
        src : "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Gita",
        src : "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Rambo",
        src : "https://images.unsplash.com/photo-1624421896903-09f9abe0c3bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Hari",
        src : "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name : "Sofia",
        src : "https://images.unsplash.com/photo-1615353616187-e19b09f4b7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name : "Ayushi",
        src : "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwd29tZW58ZW58MHx8MHx8fDA%3D"
    },
    {
        name : "Charlie",
        src : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww"
    },
    {
        name : "SofiaAnsari",
        src : "https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwd29tZW58ZW58MHx8MHx8fDA%3D"
    }
]


let input = document.querySelector("#input");
let collection = document.querySelector(".collection");
let one = ""

data.forEach(function(person){
    one +=  `<div class="person">
                <div id="image">
                    <img src="${person.src}" alt="">
                </div>
                <h3>${person.name}</h3>
            </div>`
    collection.innerHTML = one;
})

input.addEventListener("input",()=>{
    let filterData = data.filter(function(elem){
        return elem.name.startsWith(input.value);
    })
    let newUsers = ""
    filterData.forEach(function(person){
        if(input.value.search(person.name) && person.name.startsWith(input.value))
        {
            newUsers += `<div class="person">
                        <div id="image">
                            <img src="${person.src}" alt="">
                        </div>
                        <h3>${person.name}</h3>
                    </div>`
            collection.innerHTML = newUsers;
        }
        else if(input.value.trim()==="")
        {
            collection.innerHTML = one;
        }
        
    })
})

