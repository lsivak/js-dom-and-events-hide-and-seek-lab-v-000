function getFirstSelector(selector) {
  const selection = document.querySelector(selector)
  return selection
}

function nestedTarget() {
  const tar = document.querySelector('#nested')
  return tar
}

function increaseRankBy(n) {
  document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = (i + n).toString()
  }
}
