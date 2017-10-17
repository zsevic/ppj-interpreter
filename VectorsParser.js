// Generated from Vectors.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VectorsListener = require('./VectorsListener').VectorsListener;
var grammarFileName = "Vectors.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000eD\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001b",
    "\n\u0003\f\u0003\u000e\u0003\u001e\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004%\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "-\n\u0005\f\u0005\u000e\u00050\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u00066\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0002\u0004\u0004\b\t\u0002\u0004\u0006\b\n\f\u000e",
    "\u0002\u0002\u0002A\u0002\u0010\u0003\u0002\u0002\u0002\u0004\u0012",
    "\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002\u0002\b&\u0003\u0002",
    "\u0002\u0002\n5\u0003\u0002\u0002\u0002\f7\u0003\u0002\u0002\u0002\u000e",
    ";\u0003\u0002\u0002\u0002\u0010\u0011\u0005\u0004\u0003\u0002\u0011",
    "\u0003\u0003\u0002\u0002\u0002\u0012\u0013\b\u0003\u0001\u0002\u0013",
    "\u0014\u0005\u0006\u0004\u0002\u0014\u0015\u0007\u000b\u0002\u0002\u0015",
    "\u001c\u0003\u0002\u0002\u0002\u0016\u0017\f\u0004\u0002\u0002\u0017",
    "\u0018\u0005\u0006\u0004\u0002\u0018\u0019\u0007\u000b\u0002\u0002\u0019",
    "\u001b\u0003\u0002\u0002\u0002\u001a\u0016\u0003\u0002\u0002\u0002\u001b",
    "\u001e\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e",
    "\u001c\u0003\u0002\u0002\u0002\u001f \u0007\u0004\u0002\u0002 %\u0005",
    "\b\u0005\u0002!\"\u0007\u0005\u0002\u0002\"%\u0007\u0006\u0002\u0002",
    "#%\u0005\f\u0007\u0002$\u001f\u0003\u0002\u0002\u0002$!\u0003\u0002",
    "\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0007\u0003\u0002\u0002\u0002",
    "&\'\b\u0005\u0001\u0002\'(\u0005\n\u0006\u0002(.\u0003\u0002\u0002\u0002",
    ")*\f\u0004\u0002\u0002*+\u0007\n\u0002\u0002+-\u0005\n\u0006\u0002,",
    ")\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/\t\u0003\u0002\u0002\u00020.\u0003",
    "\u0002\u0002\u000212\u0007\u0006\u0002\u000223\u0007\t\u0002\u00023",
    "6\u0005\u000e\b\u000246\u0007\u0006\u0002\u000251\u0003\u0002\u0002",
    "\u000254\u0003\u0002\u0002\u00026\u000b\u0003\u0002\u0002\u000278\u0007",
    "\u0006\u0002\u000289\u0007\t\u0002\u00029:\u0005\u000e\b\u0002:\r\u0003",
    "\u0002\u0002\u0002;<\u0007\u0007\u0002\u0002<=\u0007\u0003\u0002\u0002",
    "=>\u0007\n\u0002\u0002>?\u0007\u0003\u0002\u0002?@\u0007\n\u0002\u0002",
    "@A\u0007\u0003\u0002\u0002AB\u0007\b\u0002\u0002B\u000f\u0003\u0002",
    "\u0002\u0002\u0006\u001c$.5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'['", "']'", "'='", 
                     "','", "';'" ];

var symbolicNames = [ null, "NUM", "VECTOR", "PRINT", "ID", "LP", "RP", 
                      "AO", "COMMA", "SEMICOLON", "WHITESPACE", "NEWLINE", 
                      "ANY" ];

var ruleNames =  [ "vectors", "array_of_statements", "statement", "array_of_declarations", 
                   "declaration", "assignment", "e" ];

function VectorsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VectorsParser.prototype = Object.create(antlr4.Parser.prototype);
VectorsParser.prototype.constructor = VectorsParser;

Object.defineProperty(VectorsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VectorsParser.EOF = antlr4.Token.EOF;
VectorsParser.NUM = 1;
VectorsParser.VECTOR = 2;
VectorsParser.PRINT = 3;
VectorsParser.ID = 4;
VectorsParser.LP = 5;
VectorsParser.RP = 6;
VectorsParser.AO = 7;
VectorsParser.COMMA = 8;
VectorsParser.SEMICOLON = 9;
VectorsParser.WHITESPACE = 10;
VectorsParser.NEWLINE = 11;
VectorsParser.ANY = 12;

VectorsParser.RULE_vectors = 0;
VectorsParser.RULE_array_of_statements = 1;
VectorsParser.RULE_statement = 2;
VectorsParser.RULE_array_of_declarations = 3;
VectorsParser.RULE_declaration = 4;
VectorsParser.RULE_assignment = 5;
VectorsParser.RULE_e = 6;

function VectorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_vectors;
    return this;
}

VectorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VectorsContext.prototype.constructor = VectorsContext;

VectorsContext.prototype.array_of_statements = function() {
    return this.getTypedRuleContext(Array_of_statementsContext,0);
};

VectorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterVectors(this);
	}
};

VectorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitVectors(this);
	}
};




VectorsParser.VectorsContext = VectorsContext;

VectorsParser.prototype.vectors = function() {

    var localctx = new VectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VectorsParser.RULE_vectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.array_of_statements(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_of_statementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_array_of_statements;
    return this;
}

Array_of_statementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_of_statementsContext.prototype.constructor = Array_of_statementsContext;

Array_of_statementsContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Array_of_statementsContext.prototype.SEMICOLON = function() {
    return this.getToken(VectorsParser.SEMICOLON, 0);
};

Array_of_statementsContext.prototype.array_of_statements = function() {
    return this.getTypedRuleContext(Array_of_statementsContext,0);
};

Array_of_statementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterArray_of_statements(this);
	}
};

Array_of_statementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitArray_of_statements(this);
	}
};



VectorsParser.prototype.array_of_statements = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Array_of_statementsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, VectorsParser.RULE_array_of_statements, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.statement();
        this.state = 18;
        this.match(VectorsParser.SEMICOLON);
        this._ctx.stop = this._input.LT(-1);
        this.state = 26;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Array_of_statementsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VectorsParser.RULE_array_of_statements);
                this.state = 20;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 21;
                this.statement();
                this.state = 22;
                this.match(VectorsParser.SEMICOLON); 
            }
            this.state = 28;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.VECTOR = function() {
    return this.getToken(VectorsParser.VECTOR, 0);
};

StatementContext.prototype.array_of_declarations = function() {
    return this.getTypedRuleContext(Array_of_declarationsContext,0);
};

StatementContext.prototype.PRINT = function() {
    return this.getToken(VectorsParser.PRINT, 0);
};

StatementContext.prototype.ID = function() {
    return this.getToken(VectorsParser.ID, 0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitStatement(this);
	}
};




VectorsParser.StatementContext = StatementContext;

VectorsParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VectorsParser.RULE_statement);
    try {
        this.state = 34;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VectorsParser.VECTOR:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.match(VectorsParser.VECTOR);
            this.state = 30;
            this.array_of_declarations(0);
            break;
        case VectorsParser.PRINT:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(VectorsParser.PRINT);
            this.state = 32;
            this.match(VectorsParser.ID);
            break;
        case VectorsParser.ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 33;
            this.assignment();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_of_declarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_array_of_declarations;
    return this;
}

Array_of_declarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_of_declarationsContext.prototype.constructor = Array_of_declarationsContext;

Array_of_declarationsContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

Array_of_declarationsContext.prototype.array_of_declarations = function() {
    return this.getTypedRuleContext(Array_of_declarationsContext,0);
};

Array_of_declarationsContext.prototype.COMMA = function() {
    return this.getToken(VectorsParser.COMMA, 0);
};

Array_of_declarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterArray_of_declarations(this);
	}
};

Array_of_declarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitArray_of_declarations(this);
	}
};



VectorsParser.prototype.array_of_declarations = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Array_of_declarationsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, VectorsParser.RULE_array_of_declarations, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.declaration();
        this._ctx.stop = this._input.LT(-1);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Array_of_declarationsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VectorsParser.RULE_array_of_declarations);
                this.state = 39;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 40;
                this.match(VectorsParser.COMMA);
                this.state = 41;
                this.declaration(); 
            }
            this.state = 46;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.ID = function() {
    return this.getToken(VectorsParser.ID, 0);
};

DeclarationContext.prototype.AO = function() {
    return this.getToken(VectorsParser.AO, 0);
};

DeclarationContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitDeclaration(this);
	}
};




VectorsParser.DeclarationContext = DeclarationContext;

VectorsParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VectorsParser.RULE_declaration);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(VectorsParser.ID);
            this.state = 48;
            this.match(VectorsParser.AO);
            this.state = 49;
            this.e();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
            this.match(VectorsParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.ID = function() {
    return this.getToken(VectorsParser.ID, 0);
};

AssignmentContext.prototype.AO = function() {
    return this.getToken(VectorsParser.AO, 0);
};

AssignmentContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitAssignment(this);
	}
};




VectorsParser.AssignmentContext = AssignmentContext;

VectorsParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VectorsParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(VectorsParser.ID);
        this.state = 54;
        this.match(VectorsParser.AO);
        this.state = 55;
        this.e();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VectorsParser.RULE_e;
    return this;
}

EContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EContext.prototype.constructor = EContext;

EContext.prototype.LP = function() {
    return this.getToken(VectorsParser.LP, 0);
};

EContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VectorsParser.NUM);
    } else {
        return this.getToken(VectorsParser.NUM, i);
    }
};


EContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VectorsParser.COMMA);
    } else {
        return this.getToken(VectorsParser.COMMA, i);
    }
};


EContext.prototype.RP = function() {
    return this.getToken(VectorsParser.RP, 0);
};

EContext.prototype.enterRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.enterE(this);
	}
};

EContext.prototype.exitRule = function(listener) {
    if(listener instanceof VectorsListener ) {
        listener.exitE(this);
	}
};




VectorsParser.EContext = EContext;

VectorsParser.prototype.e = function() {

    var localctx = new EContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VectorsParser.RULE_e);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(VectorsParser.LP);
        this.state = 58;
        this.match(VectorsParser.NUM);
        this.state = 59;
        this.match(VectorsParser.COMMA);
        this.state = 60;
        this.match(VectorsParser.NUM);
        this.state = 61;
        this.match(VectorsParser.COMMA);
        this.state = 62;
        this.match(VectorsParser.NUM);
        this.state = 63;
        this.match(VectorsParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VectorsParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.array_of_statements_sempred(localctx, predIndex);
	case 3:
			return this.array_of_declarations_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VectorsParser.prototype.array_of_statements_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

VectorsParser.prototype.array_of_declarations_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VectorsParser = VectorsParser;
