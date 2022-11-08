// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//p, red, “Hey I’m red!”
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I’m red!";

container.appendChild(paragraph);

//h3, blue, "I'm a blue h3!"
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

//div, black border, pink background
const div2 = document.createElement("div");
div2.classList.add("div2");
div2.style.border.color = "black";
div2.style.background.color = "pink";
//  h1, "I'm a div"
const h1 = document.createElement("h1");
h1.textContent = "I'm a div"
//  p, "ME TOO!"
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div2.appendChild(h1);
div2.appendChild(p2);
container.appendChild(div2);

