var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var filePath = path.resolve('');

fileDisplay(filePath);

function fileDisplay(filePath){

    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{

            files.forEach(function(filename){

                var filedir = path.join(filePath, filename);
                
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('');
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if (isFile) {
                          if (filedir.endsWith('.html')) {
                            fs.readFile(filedir, (err, data) => {
                              if (err) return console.error(err)
                              dataOne = iconv.decode(data, 'UTF-8')
                              let htmls = 'one'

                                if (dataOne.indexOf(htmls) > -1) {


                                    let inHtml = 'two'
                                
                                    let dataTwo = dataOne.replace(htmls, inHtml)
                                    arr = iconv.encode(dataTwo, 'UTF-8')
                                
                                    fs.writeFile(filedir, arr, (error) => {
                                      if (error) throw error
                                
                                      console.log('ok');
                                    })
                                  } else {
                                      console.log('====================================');
                                      console.log('no');
                                      console.log('====================================');
                                  }
                            })
                          }
                        }
                        if(isDir){
                            fileDisplay(filedir);
                        }
                    }
                })
            });
        }
    });
}
