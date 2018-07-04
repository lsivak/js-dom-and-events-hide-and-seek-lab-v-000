function getFirstSelector(selector) {
  const selection = document.querySelector(selector)
  return selection
}

function nestedTarget() {
  const tar = document.querySelector('#nested')
  return tar
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(i + n)
  }
}
