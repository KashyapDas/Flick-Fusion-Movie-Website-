const url1 = `https://movies-api14.p.rapidapi.com/movies`;
const url2 = `https://movies-api14.p.rapidapi.com/shows`;
const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'X-RapidAPI-Key': '893647de7bmshb3f949e60b78d51p16e89cjsn91682b8dedb6',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};


let home = document.querySelector(".home");
let movies = document.querySelector("#movies");
let shows = document.querySelector("#shows");
let inpts = document.querySelector("#input");
let homebtn = document.querySelector("#homebtn");
let append = "";





movies.addEventListener("click", async ()=>{
  let rawM = await fetch(url1,options);
  rawM = await rawM.json();
  home.innerHTML ="";
  append = "";
  rawM.movies.forEach(async function(elem)
  {
    
    append+= `<div class="cards">
     <div class="image">
      <img src="${elem.poster_path}" alt="">
  </div>
  <h1>${elem.title}</h1>
  <h3>Adventure, Thriller, Sci-fi</h3>
  <h4>${elem.release_date}</h4>
  <p>${elem.overview}</p>
  </div> `
  })
  home.innerHTML =append;
})


shows.addEventListener("click", async ()=>{
  let rawS = await fetch(url2,options);
  rawS = await rawS.json();
  home.innerHTML ="";
  append="";
  rawS.movies.forEach(async function(elem)
  {
    
    append+= `<div class="cards">
     <div class="image">
      <img src="${elem.poster_path}" alt="">
  </div>
  <h1>${elem.title}</h1>
  <h3>Adventure, Thriller, Sci-fi</h3>
  <h4>${elem.release_date}</h4>
  <p>${elem.overview}</p>
  </div> `
  })
  home.innerHTML =append;
})


inpts.addEventListener("input",async function(e)
{
  let rawM = await fetch(url1,options);
  rawM = await rawM.json();
  let data = await rawM.movies;
  let ans = data.filter(function(elem){
      return elem.title.startsWith(inpts.value);
  })
  let newUsers = "";
  ans.forEach(function(elem)
  {
    // console.log(elem)
    if(elem.title.startsWith(inpts.value) && inpts.value != "")
    {
      newUsers += `<div class="cards">
    <div class="image">
     <img src="${elem.poster_path}" alt="">
    </div>
 <h1>${elem.title}</h1>
 <h3>Adventure, Thriller, Sci-fi</h3>
 <h4>${elem.release_date}</h4>
 <p>${elem.overview}</p>
 </div> `
    home.innerHTML = newUsers;
    }
    else if(inpts.value.trim()==="")
    {
      home.innerHTML = append;
    }
    
  })
  

  


})


async function moviesURL(rawM)
{
    rawM.movies.forEach(function(elem)
    {
     append+= `<div class="cards">
     <div class="image">
      <img src="${elem.poster_path}" alt="">
  </div>
  <h1>${elem.title}</h1>
  <h3>Adventure, Thriller, Sci-fi</h3>
  <h4>${elem.release_date}</h4>
  <p>${elem.overview}</p>
  </div> `

    });
    home.innerHTML = append;
}


async function showsURl(rawS)
{
  rawS.movies.forEach(function(elem)
  {
   append+= `<div class="cards">
   <div class="image">
    <img src="${elem.poster_path}" alt="">
</div>
<h1>${elem.title}</h1>
<h3>Adventure, Thriller, Sci-fi</h3>
<h4>${elem.release_date}</h4>
<p>${elem.overview}</p>
</div> `

  });
  home.innerHTML = append;
}



async function urlHandle()
{
  let rawM = await fetch(url1,options);
  rawM = await rawM.json();
  let rawS = await fetch(url2,options);
  rawS = await rawS.json();
  
  moviesURL(rawM);
  showsURl(rawS);
  
}
urlHandle()












