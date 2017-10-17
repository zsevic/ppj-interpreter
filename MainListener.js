const antlr4 = require('antlr4/index');
const Lexer = require('./VectorsLexer');
const Parser = require('./VectorsParser');
let VectorsListener = require('./VectorsListener').VectorsListener;
 
MainListener = function(res) {
    this.Res = res;    
    VectorsListener.call(this);
    return this;
};
 
MainListener.prototype = Object.create(VectorsListener.prototype);
MainListener.prototype.constructor = MainListener;
 
MainListener.prototype.enterDeclaration = function(ctx) {          
    this.Res.write('<strong>');
};
 
MainListener.prototype.exitDeclaration = function(ctx) {      
    let id = ctx.ID().getText();
    console.log(id);
    this.Res.write(`${id}</strong>`);
}; 

exports.MainListener = MainListener;
