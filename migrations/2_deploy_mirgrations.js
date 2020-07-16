const Smart=artifacts.require("./Smart.sol");
 
module.exports=function(deployer){
    deployer.deploy(Smart);
};