const express=require('express');
const app = express();
app.get('/courses',(req,res)=>{
  const courses=[
    {id:24,name:'Sasi',tile:'js'},
    {id:17,name:'keerthi',title:'da'}
  ];
  res.json(courses);
});
app.listen(3000,() => {
  console.log("running");
});