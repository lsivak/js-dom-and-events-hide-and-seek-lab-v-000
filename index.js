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

  for (let i = 1; i < lis.length; i++) {
    parseInt(lis[i].innerHTML) = (i + n)
  }
}
