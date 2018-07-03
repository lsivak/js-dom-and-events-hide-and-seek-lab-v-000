function getFirstSelector(selector) {
  const selection = document.querySelector(selector)
  return selection
}

function nestedTarget() {
  const tar = document.querySelector('#nested')
  return tar
}

function increaseRankBy(n) {
  document.querySelectorAll('ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i] = (i+n).toString()
  }
}
