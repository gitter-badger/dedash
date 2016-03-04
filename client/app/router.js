var layout = require('./layout');
m.route(document.body,"/",{
  "/":m(layout,{body:require('./components/home')}),
  "/login":m(layout,{body:require('./components/login')}),
  "/register":m(layout,{body:require('./components/register')})
})
