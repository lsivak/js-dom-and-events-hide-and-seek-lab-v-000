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
  let nested = document.getElementById('grand-node')
  let nextNest = nested.children[0]

  while (nextNest) {
    nested = nextNest
    nextNest = nested.children[0]
  }
return nested
}
