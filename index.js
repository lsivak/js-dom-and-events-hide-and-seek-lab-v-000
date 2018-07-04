function getFirstSelector(selector) {
  const selection = document.querySelector(selector)
  return selection
}

function nestedTarget() {
  const tar = document.querySelector('#nested')
  return tar
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(i + n)
  }
}

function deepestChild() {
  const nested = document.querySelectorAll('div#grand-node div')
  for (let i = 0; i < nested.length; i++) {
    nested[i] = parseInt(i + 1)
  }
}
