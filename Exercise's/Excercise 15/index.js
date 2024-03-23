const fs = require('fs/promises')
const fsn = require('fs')
const path = require('path')

const basepath = "e:\\Web D (SIGMA)\\Web-Dev\\Exercise's\\Excercise 15"

async function readDirectory() {
    try {
    const files = await fs.readdir(basepath);
      for (const item of files) {
        console.log("running for ",item)
        let ext = item.split(".")[item.split(".").length - 1];
        console.log(ext);
        if(ext != "js" && ext != "json" && item.split(".").length > 1){
            if(fsn.existsSync(path.join(basepath , ext))){
                fs.rename(path.join(basepath , item),path.join(basepath , ext , item))
            }else{
                fs.mkdir(ext);
                fs.rename(path.join(basepath , item),path.join(basepath , ext , item))
                
            }
        }
    }
    } catch (error) {
      console.error(error);
    }
   
  }
readDirectory()