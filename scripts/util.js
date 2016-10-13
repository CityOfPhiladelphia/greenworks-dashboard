function pluck (rows, key) {
  return rows.map(function (row) {
    return row[key]
  })
}

function getScriptParent () {
  var scriptEls = document.querySelectorAll('script')
  var thisScriptEl = scriptEls[scriptEls.length - 1]
  return thisScriptEl.parentNode
}
