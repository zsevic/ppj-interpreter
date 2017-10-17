const antlr4 = require('antlr4/index');
const Lexer = require('./VectorsLexer');
const Parser = require('./VectorsParser');
let VectorsListener = require('./VectorsListener').VectorsListener;
 
MainListener = function() {
    this.table = {};
    VectorsListener.call(this);
    return this;
};
 
MainListener.prototype = Object.create(VectorsListener.prototype);
MainListener.prototype.constructor = MainListener;
 
MainListener.prototype.enterStatement = function(ctx) {
    if(ctx.PRINT()){
        console.log(this.table[ctx.children[1].getText()]);
    } 
};

MainListener.prototype.enterDeclaration = function(ctx) {
    
};

MainListener.prototype.exitDeclaration = function(ctx) {
    let id = ctx.ID().getText();
    if(ctx.children.length===3){
        let tmp = JSON.parse(ctx.children[2].getText());
        this.table[id] = tmp.slice();
    }else{
        this.table[id] = [0,0,0];
    }
}; 

MainListener.prototype.exitAssignment = MainListener.prototype.exitDeclaration;

MainListener.prototype.enterE = function(ctx) {
    let tmp=[];
    for(let i=1;i<=5;i+=2){
        tmp.push(ctx.children[i].getText());
    }
    return tmp;
};

exports.MainListener = MainListener;
