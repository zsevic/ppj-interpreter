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
    // PRINT ID
    if(ctx.PRINT()){
        console.log(this.table[ctx.children[1].getText()]);
    } 
};

MainListener.prototype.exitDeclaration = function(ctx) {
    let id = ctx.ID().getText();
    // ID AO e
    if(ctx.children.length===3){
        if(ctx.children[2].ID()!=null){
            // ID AO ID
            let tmp = this.table[ctx.children[2].ID().getText()];
            this.table[id] = tmp.slice();
        }else{
            // ID AO e
            let tmp = JSON.parse(ctx.children[2].getText());
            this.table[id] = tmp.slice();
        }
    // ID
    }else{
        this.table[id] = [0,0,0];
    }
}; 

// ID AO e
MainListener.prototype.exitAssignment = MainListener.prototype.exitDeclaration;

MainListener.prototype.exitE = function(ctx) {
    // ID
    if(ctx.ID()){
        id=ctx.ID().getText();
        return this.table[id].slice();
    // LP NUM COMMA NUM COMMA NUM DP 
    }else{
        let tmp=[];
        for(let i=1;i<=5;i+=2){
            tmp.push(ctx.children[i].getText());
        }
        return tmp;
    }
};

exports.MainListener = MainListener;
