var layout = require('./pages/layout');
m.route(document.body,"/",{
  "/":m(layout,{body:require('./pages/home')}),
  "/login":m(layout,{body:require('./pages/login')}),
  "/register":m(layout,{body:require('./pages/register')}),
  "/content/:content_id":m(layout,{body:require('./pages/content')})
})
