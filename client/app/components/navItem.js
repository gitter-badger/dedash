var randrom = Math.random()
console.log(randrom);
module.exports = {
  view:(ctrl, args)=>{
    args.drops ? console.log(args.drops) : console.log(" ");

    return m("span",[
      //render normal link
      m("li",{
        class:args.direction + " " + (m.route() === args.url ? "active" : " ")

      },[
        m("a",{
          href:args.url,
          class:(args.drops ? " dropdown-button" : " "),
          config:m.route,
          "data-activates":randrom
        },args.text)
      ]),

      //make drop links in case there is a drop in the json
      args.drops ? m("ul",{
        class:"dropdown-content",
        id:randrom,
        config:function(){
          $('.dropdown-button').dropdown({
              inDuration: 300,
              outDuration: 225,
              constrain_width: false, // Does not change width of dropdown to that of the activator
              hover: true, // Activate on hover
              gutter: 0, // Spacing from edge
              belowOrigin: true, // Displays dropdown below the button
              alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
          );
        }
      },[
        args.drops.map( () => m("li",{
          class:m.route() === args.url ? "active" : " "
        },[
          m("a",{
            href:args.url,
            config:m.route
          },args.text)
        ]))
      ]) : console.log("no drops for this one")


    ])
  }
}
