require('./DbConnect');
const app = require('./app');
 
app.listen(process.env.PORT,()=>{
    console.log(`server running at localhot:${process.env.PORT}`)
})