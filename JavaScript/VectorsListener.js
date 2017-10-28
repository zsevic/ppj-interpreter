// Generated from Vectors.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by VectorsParser.
function VectorsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

VectorsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
VectorsListener.prototype.constructor = VectorsListener;

// Enter a parse tree produced by VectorsParser#vectors.
VectorsListener.prototype.enterVectors = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#vectors.
VectorsListener.prototype.exitVectors = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#array_of_statements.
VectorsListener.prototype.enterArray_of_statements = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#array_of_statements.
VectorsListener.prototype.exitArray_of_statements = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#statement.
VectorsListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#statement.
VectorsListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#array_of_declarations.
VectorsListener.prototype.enterArray_of_declarations = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#array_of_declarations.
VectorsListener.prototype.exitArray_of_declarations = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#declaration.
VectorsListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#declaration.
VectorsListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#assignment.
VectorsListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#assignment.
VectorsListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by VectorsParser#e.
VectorsListener.prototype.enterE = function(ctx) {
};

// Exit a parse tree produced by VectorsParser#e.
VectorsListener.prototype.exitE = function(ctx) {
};



exports.VectorsListener = VectorsListener;