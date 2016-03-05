/*
*peoples created content comes here placed in cards, cute ones
*then when clicked it goest to /content route where the content
*clicked is rendered
*/

module.exports = {
  view:(ctrl, args) => {
    return m(".app",[
      m("h1","content area")
    ])
  }
}
