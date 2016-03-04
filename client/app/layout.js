module.exports = {
  view:(ctrl, args)=>{
    return m(".app",[
      //any links that will be persistant accross all pages
      m("a",{href:"/",config:m.route},"home"),
      m("a",{href:"/register",config:m.route},"register"),
      m("a",{href:"/login",config:m.route},"login"),


      args.body ? args.body : m("div","body here")
    ])
  }
}
