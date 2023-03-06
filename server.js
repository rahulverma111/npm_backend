require('./connection');

const app = require('./app');
app.listen(8000,()=>{
    console.log('server running at 8000');
})