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

  for (let i = 1; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}
