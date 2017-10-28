# Generated from Vectors.g4 by ANTLR 4.7
# encoding: utf-8
from __future__ import print_function
from antlr4 import *
from io import StringIO
import sys

def serializedATN():
    with StringIO() as buf:
        buf.write(u"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3")
        buf.write(u"\rF\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4")
        buf.write(u"\b\t\b\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\33")
        buf.write(u"\n\3\f\3\16\3\36\13\3\3\4\3\4\3\4\3\4\3\4\5\4%\n\4\3")
        buf.write(u"\5\3\5\3\5\3\5\3\5\3\5\7\5-\n\5\f\5\16\5\60\13\5\3\6")
        buf.write(u"\3\6\3\6\3\6\5\6\66\n\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3")
        buf.write(u"\b\3\b\3\b\3\b\3\b\5\bD\n\b\3\b\2\4\4\b\t\2\4\6\b\n\f")
        buf.write(u"\16\2\2\2D\2\20\3\2\2\2\4\22\3\2\2\2\6$\3\2\2\2\b&\3")
        buf.write(u"\2\2\2\n\65\3\2\2\2\f\67\3\2\2\2\16C\3\2\2\2\20\21\5")
        buf.write(u"\4\3\2\21\3\3\2\2\2\22\23\b\3\1\2\23\24\5\6\4\2\24\25")
        buf.write(u"\7\13\2\2\25\34\3\2\2\2\26\27\f\4\2\2\27\30\5\6\4\2\30")
        buf.write(u"\31\7\13\2\2\31\33\3\2\2\2\32\26\3\2\2\2\33\36\3\2\2")
        buf.write(u"\2\34\32\3\2\2\2\34\35\3\2\2\2\35\5\3\2\2\2\36\34\3\2")
        buf.write(u"\2\2\37 \7\4\2\2 %\5\b\5\2!\"\7\5\2\2\"%\7\6\2\2#%\5")
        buf.write(u"\f\7\2$\37\3\2\2\2$!\3\2\2\2$#\3\2\2\2%\7\3\2\2\2&\'")
        buf.write(u"\b\5\1\2\'(\5\n\6\2(.\3\2\2\2)*\f\4\2\2*+\7\n\2\2+-\5")
        buf.write(u"\n\6\2,)\3\2\2\2-\60\3\2\2\2.,\3\2\2\2./\3\2\2\2/\t\3")
        buf.write(u"\2\2\2\60.\3\2\2\2\61\62\7\6\2\2\62\63\7\t\2\2\63\66")
        buf.write(u"\5\16\b\2\64\66\7\6\2\2\65\61\3\2\2\2\65\64\3\2\2\2\66")
        buf.write(u"\13\3\2\2\2\678\7\6\2\289\7\t\2\29:\5\16\b\2:\r\3\2\2")
        buf.write(u"\2;<\7\7\2\2<=\7\3\2\2=>\7\n\2\2>?\7\3\2\2?@\7\n\2\2")
        buf.write(u"@A\7\3\2\2AD\7\b\2\2BD\7\6\2\2C;\3\2\2\2CB\3\2\2\2D\17")
        buf.write(u"\3\2\2\2\7\34$.\65C")
        return buf.getvalue()


class VectorsParser ( Parser ):

    grammarFileName = "Vectors.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ u"<INVALID>", u"<INVALID>", u"<INVALID>", u"<INVALID>", 
                     u"<INVALID>", u"'['", u"']'", u"'='", u"','", u"';'" ]

    symbolicNames = [ u"<INVALID>", u"NUM", u"VECTOR", u"PRINT", u"ID", 
                      u"LP", u"RP", u"AO", u"COMMA", u"SEMICOLON", u"WHITESPACE", 
                      u"NEWLINE" ]

    RULE_vectors = 0
    RULE_array_of_statements = 1
    RULE_statement = 2
    RULE_array_of_declarations = 3
    RULE_declaration = 4
    RULE_assignment = 5
    RULE_e = 6

    ruleNames =  [ u"vectors", u"array_of_statements", u"statement", u"array_of_declarations", 
                   u"declaration", u"assignment", u"e" ]

    EOF = Token.EOF
    NUM=1
    VECTOR=2
    PRINT=3
    ID=4
    LP=5
    RP=6
    AO=7
    COMMA=8
    SEMICOLON=9
    WHITESPACE=10
    NEWLINE=11

    def __init__(self, input, output=sys.stdout):
        super(VectorsParser, self).__init__(input, output=output)
        self.checkVersion("4.7")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None



    class VectorsContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.VectorsContext, self).__init__(parent, invokingState)
            self.parser = parser

        def array_of_statements(self):
            return self.getTypedRuleContext(VectorsParser.Array_of_statementsContext,0)


        def getRuleIndex(self):
            return VectorsParser.RULE_vectors

        def enterRule(self, listener):
            if hasattr(listener, "enterVectors"):
                listener.enterVectors(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitVectors"):
                listener.exitVectors(self)




    def vectors(self):

        localctx = VectorsParser.VectorsContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_vectors)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 14
            self.array_of_statements(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class Array_of_statementsContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.Array_of_statementsContext, self).__init__(parent, invokingState)
            self.parser = parser

        def statement(self):
            return self.getTypedRuleContext(VectorsParser.StatementContext,0)


        def SEMICOLON(self):
            return self.getToken(VectorsParser.SEMICOLON, 0)

        def array_of_statements(self):
            return self.getTypedRuleContext(VectorsParser.Array_of_statementsContext,0)


        def getRuleIndex(self):
            return VectorsParser.RULE_array_of_statements

        def enterRule(self, listener):
            if hasattr(listener, "enterArray_of_statements"):
                listener.enterArray_of_statements(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitArray_of_statements"):
                listener.exitArray_of_statements(self)



    def array_of_statements(self, _p=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = VectorsParser.Array_of_statementsContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 2
        self.enterRecursionRule(localctx, 2, self.RULE_array_of_statements, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 17
            self.statement()
            self.state = 18
            self.match(VectorsParser.SEMICOLON)
            self._ctx.stop = self._input.LT(-1)
            self.state = 26
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,0,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    localctx = VectorsParser.Array_of_statementsContext(self, _parentctx, _parentState)
                    self.pushNewRecursionContext(localctx, _startState, self.RULE_array_of_statements)
                    self.state = 20
                    if not self.precpred(self._ctx, 2):
                        from antlr4.error.Errors import FailedPredicateException
                        raise FailedPredicateException(self, "self.precpred(self._ctx, 2)")
                    self.state = 21
                    self.statement()
                    self.state = 22
                    self.match(VectorsParser.SEMICOLON) 
                self.state = 28
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,0,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx

    class StatementContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.StatementContext, self).__init__(parent, invokingState)
            self.parser = parser

        def VECTOR(self):
            return self.getToken(VectorsParser.VECTOR, 0)

        def array_of_declarations(self):
            return self.getTypedRuleContext(VectorsParser.Array_of_declarationsContext,0)


        def PRINT(self):
            return self.getToken(VectorsParser.PRINT, 0)

        def ID(self):
            return self.getToken(VectorsParser.ID, 0)

        def assignment(self):
            return self.getTypedRuleContext(VectorsParser.AssignmentContext,0)


        def getRuleIndex(self):
            return VectorsParser.RULE_statement

        def enterRule(self, listener):
            if hasattr(listener, "enterStatement"):
                listener.enterStatement(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitStatement"):
                listener.exitStatement(self)




    def statement(self):

        localctx = VectorsParser.StatementContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_statement)
        try:
            self.state = 34
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [VectorsParser.VECTOR]:
                self.enterOuterAlt(localctx, 1)
                self.state = 29
                self.match(VectorsParser.VECTOR)
                self.state = 30
                self.array_of_declarations(0)
                pass
            elif token in [VectorsParser.PRINT]:
                self.enterOuterAlt(localctx, 2)
                self.state = 31
                self.match(VectorsParser.PRINT)
                self.state = 32
                self.match(VectorsParser.ID)
                pass
            elif token in [VectorsParser.ID]:
                self.enterOuterAlt(localctx, 3)
                self.state = 33
                self.assignment()
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class Array_of_declarationsContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.Array_of_declarationsContext, self).__init__(parent, invokingState)
            self.parser = parser

        def declaration(self):
            return self.getTypedRuleContext(VectorsParser.DeclarationContext,0)


        def array_of_declarations(self):
            return self.getTypedRuleContext(VectorsParser.Array_of_declarationsContext,0)


        def COMMA(self):
            return self.getToken(VectorsParser.COMMA, 0)

        def getRuleIndex(self):
            return VectorsParser.RULE_array_of_declarations

        def enterRule(self, listener):
            if hasattr(listener, "enterArray_of_declarations"):
                listener.enterArray_of_declarations(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitArray_of_declarations"):
                listener.exitArray_of_declarations(self)



    def array_of_declarations(self, _p=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = VectorsParser.Array_of_declarationsContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 6
        self.enterRecursionRule(localctx, 6, self.RULE_array_of_declarations, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 37
            self.declaration()
            self._ctx.stop = self._input.LT(-1)
            self.state = 44
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,2,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    localctx = VectorsParser.Array_of_declarationsContext(self, _parentctx, _parentState)
                    self.pushNewRecursionContext(localctx, _startState, self.RULE_array_of_declarations)
                    self.state = 39
                    if not self.precpred(self._ctx, 2):
                        from antlr4.error.Errors import FailedPredicateException
                        raise FailedPredicateException(self, "self.precpred(self._ctx, 2)")
                    self.state = 40
                    self.match(VectorsParser.COMMA)
                    self.state = 41
                    self.declaration() 
                self.state = 46
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,2,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx

    class DeclarationContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.DeclarationContext, self).__init__(parent, invokingState)
            self.parser = parser

        def ID(self):
            return self.getToken(VectorsParser.ID, 0)

        def AO(self):
            return self.getToken(VectorsParser.AO, 0)

        def e(self):
            return self.getTypedRuleContext(VectorsParser.EContext,0)


        def getRuleIndex(self):
            return VectorsParser.RULE_declaration

        def enterRule(self, listener):
            if hasattr(listener, "enterDeclaration"):
                listener.enterDeclaration(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitDeclaration"):
                listener.exitDeclaration(self)




    def declaration(self):

        localctx = VectorsParser.DeclarationContext(self, self._ctx, self.state)
        self.enterRule(localctx, 8, self.RULE_declaration)
        try:
            self.state = 51
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,3,self._ctx)
            if la_ == 1:
                self.enterOuterAlt(localctx, 1)
                self.state = 47
                self.match(VectorsParser.ID)
                self.state = 48
                self.match(VectorsParser.AO)
                self.state = 49
                self.e()
                pass

            elif la_ == 2:
                self.enterOuterAlt(localctx, 2)
                self.state = 50
                self.match(VectorsParser.ID)
                pass


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class AssignmentContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.AssignmentContext, self).__init__(parent, invokingState)
            self.parser = parser

        def ID(self):
            return self.getToken(VectorsParser.ID, 0)

        def AO(self):
            return self.getToken(VectorsParser.AO, 0)

        def e(self):
            return self.getTypedRuleContext(VectorsParser.EContext,0)


        def getRuleIndex(self):
            return VectorsParser.RULE_assignment

        def enterRule(self, listener):
            if hasattr(listener, "enterAssignment"):
                listener.enterAssignment(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitAssignment"):
                listener.exitAssignment(self)




    def assignment(self):

        localctx = VectorsParser.AssignmentContext(self, self._ctx, self.state)
        self.enterRule(localctx, 10, self.RULE_assignment)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 53
            self.match(VectorsParser.ID)
            self.state = 54
            self.match(VectorsParser.AO)
            self.state = 55
            self.e()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx

    class EContext(ParserRuleContext):

        def __init__(self, parser, parent=None, invokingState=-1):
            super(VectorsParser.EContext, self).__init__(parent, invokingState)
            self.parser = parser

        def LP(self):
            return self.getToken(VectorsParser.LP, 0)

        def NUM(self, i=None):
            if i is None:
                return self.getTokens(VectorsParser.NUM)
            else:
                return self.getToken(VectorsParser.NUM, i)

        def COMMA(self, i=None):
            if i is None:
                return self.getTokens(VectorsParser.COMMA)
            else:
                return self.getToken(VectorsParser.COMMA, i)

        def RP(self):
            return self.getToken(VectorsParser.RP, 0)

        def ID(self):
            return self.getToken(VectorsParser.ID, 0)

        def getRuleIndex(self):
            return VectorsParser.RULE_e

        def enterRule(self, listener):
            if hasattr(listener, "enterE"):
                listener.enterE(self)

        def exitRule(self, listener):
            if hasattr(listener, "exitE"):
                listener.exitE(self)




    def e(self):

        localctx = VectorsParser.EContext(self, self._ctx, self.state)
        self.enterRule(localctx, 12, self.RULE_e)
        try:
            self.state = 65
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [VectorsParser.LP]:
                self.enterOuterAlt(localctx, 1)
                self.state = 57
                self.match(VectorsParser.LP)
                self.state = 58
                self.match(VectorsParser.NUM)
                self.state = 59
                self.match(VectorsParser.COMMA)
                self.state = 60
                self.match(VectorsParser.NUM)
                self.state = 61
                self.match(VectorsParser.COMMA)
                self.state = 62
                self.match(VectorsParser.NUM)
                self.state = 63
                self.match(VectorsParser.RP)
                pass
            elif token in [VectorsParser.ID]:
                self.enterOuterAlt(localctx, 2)
                self.state = 64
                self.match(VectorsParser.ID)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx



    def sempred(self, localctx, ruleIndex, predIndex):
        if self._predicates == None:
            self._predicates = dict()
        self._predicates[1] = self.array_of_statements_sempred
        self._predicates[3] = self.array_of_declarations_sempred
        pred = self._predicates.get(ruleIndex, None)
        if pred is None:
            raise Exception("No predicate with index:" + str(ruleIndex))
        else:
            return pred(localctx, predIndex)

    def array_of_statements_sempred(self, localctx, predIndex):
            if predIndex == 0:
                return self.precpred(self._ctx, 2)
         

    def array_of_declarations_sempred(self, localctx, predIndex):
            if predIndex == 1:
                return self.precpred(self._ctx, 2)
         




