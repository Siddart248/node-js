const fs= require("fs");
// if(!fs.existsSync("docs")){


// fs.mkdir("docs",(err)=>{
//     if(err){
//          console.log(err);
//     }
//  else{
//     console.log("directory created");
//  }


// }); 
// }   
//write file
// 
// fs.readFile("docs/file.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// }); 

// //delete file
// if(fs.existsSync("docs/file.txt")){
//     fs.unlink("docs/file.txt",(err) =>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("file deleted");
//         }
//         });
// }


//remove directory
if(fs.existsSync("docs/file.txt")){
    fs.rmdir("docs",(err) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("directory deleted");
        }
    })
}