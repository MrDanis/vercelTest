const app = express();
const path = require("path");
const loger = require("morgan");
const cors = require("cors");
app.use(loger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/api',(req,res)=>{
    res.send("test");
});
app.listen(3000,(req,res)=>{console.log('Server is listening at port 3000')});
