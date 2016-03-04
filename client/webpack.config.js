module.exports = {
  entry: ["./app/router.js"],
  output:{
    path:'./dist',
    filename: "dedash.js"
  },
  watch:true,
  resolve:{
    extensions:['','.js']
  },
  module:{
    loaders:[
      {
        test : /.js$/,
        loader:'babel-loader'
      }
    ]
  }
}
