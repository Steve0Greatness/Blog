//code made by Raihan142857 on Scratch
function getPages(username, reponame, branch = 'main') {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/${username}/${reponame}/git/trees/${branch}?recursive=1`)
    .then((resp) => resp.json())
    .then(({tree}) => {
      const pages = tree.filter((file) => file.path.endsWith('.html'));
      resolve(pages);
    })
    .catch(reject)
  });
}
getPages('Steve0Greatness', 'Blog').then((pages) => {pages.map((pui) => pui.path.slice(0, -5)).forEach((pui) => {var page; page = pui.replace(/-/g, ' ');if(pui != 'index') document.getElementById('index').innerHTML += '<div><a href="./' + pui + '.html">' + page + '</a></div>';})});
//Thanks for thier help!

var pageUrl = window.location.origin
var script = document.createElement('script')
script.type = "text/javascript"
if (pageUrl.includes('repl.co')) {
  script.src = "https://steve0greatnessgithubio.stevesgreatness.repl.co/src/script.js"
} else {
  script.src = "../src/script.js"
}
document.body.appendChild(script)

console.log(pageUrl, pageUrl.includes('blog.stevesgreatness.repl.co'))
if (pageUrl.includes('blog.stevesgreatness.repl.co')) {
  var note = document.createElement('div')
  note.className = 'notice'
  note.innerHTML = `this is a not properly working version of the blog(dark mode, among other things doesn't work), i'd suggest switching to <a href="https://steve0greatness.github.io/Blog/">the main site</a> for it to work properly`
  document.body.appendChild(note)
  console.warn(`this version of the site doesn't have everything working properly(at least not yet)
  it would be a good idea to switch to https://steve0greatness.github.io/Blog`)
}