///const data =FileSystem.readfileSynsc("./sample.txt","utf-8");
///console.log(data);
///console.log("A")
///FileSystem.readFile("./sample.txt","utf-8",(err,data)=>{
///    if(err){
///        console.log(err);
///    }else{
///        console.log(data);
///    }
///})
///console.log("8")



///FileSystem.writefile("./sample.txt","Hello World again",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File updated");
    }
///})


///FileSystem.appendFileSync("./sample.txt","\nHello World! again");
const salt=crypto.randomBytes(16).toString("hex");
///const password="Alex@123"

///const hash=crypto.createHash("sha255").update(password).digest("hex")
console.log(hash)