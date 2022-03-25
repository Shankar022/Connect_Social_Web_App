const dotenv = require('dotenv');
const app = require('./app');
const {connect} = require('mongoose');

dotenv.config();

// Connect to MongoDB

const MongoDB = process.env.MONGODB_URL.replace(
    '<password>',
    process.env.MONGODB_PASSWORD
);
connect(MongoDB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},()=>{
    //console.log(conn.connections);
    console.log('DB connection successful ✔✔✔');
})


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
