module.exports = {
  entry: ["./app/router.js"],
  output:{
    path:'./dist',
    filename: "dedash.js"
  },
  watch:true,

  module:{
    loaders:[
      {
        test : /.js$/,
        loader:'babel-loader'
      }
    ],
    resolve:{
      extensions:['','.js']
    },
  }
}
