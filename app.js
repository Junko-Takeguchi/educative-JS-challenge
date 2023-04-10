const validateUrl = (url)=>{
    if(!url.startsWith("http://") && !url.startsWith("https://")){
        return `http://${url}`;
    }
    return url;
};
const renderLink = (name, url,author) =>{
    const container = document.createElement("div");
    container.setAttribute("class","link");
    container.innerHTML = `
    <h4 class="linkHeadline">
        <a class="linkTitle">${name}</a>
        <span class="linkUrl">${url}</span>
    </h4>
    <span class ="linkAuthor">Submitted by ${author}</span>`;
    document.getElementById("content").insertAdjacentElement("afterbegin", container)//appendChild(container);
};
const links = [];

class Link{
    constructor(name, url, author){
        this.name = name;
        this.url = validateUrl(url);
        this.author = author;
        renderLink(this.name,this.url,this.author);
    }
}
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

document.getElementById("submitButton").addEventListener("click", e =>{
    const frm = document.createElement("form");
    frm.setAttribute("class","linkForm");
    frm.innerHTML = `<input type = "text" name = "name" placeholder = "Title"/><input type = "text" name = "url" placeholder = "URL"/><br><input type = "text" name = "author" placeholder = "Author"/><input type="submit" id="submit-frm" class="btn btn-primary navbar-btn" value = "Add link">`; 
    frm.addEventListener("submit", e =>{
        const name = e.target.elements.name.value;
        const url = e.target.elements.url.value;
        const author = e.target.elements.author.value;
        e.preventDefault();
        setTimeout(() =>{
          links.push(new Link(name, url, author));
            frm.remove();
        },1000);
    });
  document.getElementById("content").insertAdjacentElement("afterbegin",frm);
  
});

