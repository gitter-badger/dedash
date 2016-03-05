var navItem = require('../components/navItem');

module.exports = {
  view:(ctrl, args)=>{
    return m("nav",{class:args.color},[
      m("div",{class:"nav-wrapper"},[
        m("a",{class:"brand-logo " + args.logo.position},args.logo.text),
        m("ul",{id:"nav-mobile",class:"hide-on-med-and-down"},[
          //construct the nav items
          args.links.map((link) => m(navItem,{
            text:link.text,
            url:link.url,
            direction:link.direction,
            drops: link.drops ? link.drops.map((drop) => m(navItem,{
                text:drop.text,
                url:drop.url
              })) : console.log(" ")
          }))
          //awesomeness drop
        ])
      ])
    ])
  }
}
