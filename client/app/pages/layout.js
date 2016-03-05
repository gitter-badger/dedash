var navbarWrapper = require('../components/navbarWrapper');

// wierd navbar srtucture api ;-)
var links = [
  {
    text:"register",url:"/register",direction:"right",drops:[
      {text:"As student",url:"/student"},
      {text:"As Admin",url:"/admin"}
    ]
  },
  {text:"login",url:"/login",direction:"right"},
  {text:"home",url:"/",direction:"right"}
]

module.exports = {
  view:(ctrl, args) => {
    return m(".app",[
      m(navbarWrapper,{
        color:"blue",
        logo:{
          position:"left",
          text:"DEDASH"
        },
        links:links
      }),
      args.body ? args.body : m("div","body here")
    ])
  }
}
