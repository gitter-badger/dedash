module.exports = {
  entry: ["./app/router.js"],
  output:{
    path:'./dist',
    filename: "dedash.js"
  },
  watch:true,
  resolve:{
    extensions:['','.js']
  }
}
