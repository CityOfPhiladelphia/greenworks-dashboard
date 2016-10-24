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

// Can we handle some of the numeric formatting here?
// (Locale, rounding for sets in millions?)
