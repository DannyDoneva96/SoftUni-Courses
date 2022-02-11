function solve(object) {
 
     function validateMEthods(object){
        let validMEthods = ['GET', 'POST', 'DELETE' ,'CONNECT']

         if(!validMEthods.includes(object['method'])||object.method==undefined){
             throw new Error("Invalid request header: Invalid Method")
         }
       
     }
     function validateUrii(object){
        let uriRegex =/^\*$|^[a-zA-Z0-9.]+$/

        if(object.uri==undefined||!uriRegex.test(object.uri)){
            throw new Error("Invalid request header: Invalid URI")
        }
    }
    function validateVersion(object){
        if(object.version!==undefined || object.version =='HTTP/0.9, HTTP/1.0' || object.version=='HTTP/2.0'){
            //do nothing
        }else{throw new Error("Invalid request header: Invalid Version")}
    }
    function validateMessage(object){
        let messageRegex =/^[^<>\\&'"]*$/
    
        if(object.message==undefined||messageRegex.test(object.message)==false){
            throw new Error("Invalid request header: Invalid Message")
        }
    }

    validateMEthods(object)
    validateUrii(object)
    validateVersion(object)
    validateMessage(object);
    console.log(object)
}
// }solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   }
//   );
// solve({
//     method: 'OPTIONS',
//     uri: '&copy;',                   //Invalid request header: Invalid Method
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   );
// solve({
//     method: 'POST',                 //Invalid request header: Invalid Version
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }
//   );
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '' ,})