# Generated from Vectors.g4 by ANTLR 4.7
# encoding: utf-8
from __future__ import print_function
from antlr4 import *
from io import StringIO
import sys


def serializedATN():
    with StringIO() as buf:
        buf.write(u"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2")
        buf.write(u"\r]\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t")
        buf.write(u"\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\3\2\5\2")
        buf.write(u"\33\n\2\3\2\3\2\3\2\7\2 \n\2\f\2\16\2#\13\2\5\2%\n\2")
        buf.write(u"\3\2\3\2\3\2\7\2*\n\2\f\2\16\2-\13\2\5\2/\n\2\3\3\3\3")
        buf.write(u"\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5")
        buf.write(u"\7\5@\n\5\f\5\16\5C\13\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t")
        buf.write(u"\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\5\fT\n\f\3\f\3\f")
        buf.write(u"\6\fX\n\f\r\f\16\fY\3\f\3\f\2\2\r\3\3\5\4\7\5\t\6\13")
        buf.write(u"\7\r\b\17\t\21\n\23\13\25\f\27\r\3\2\b\3\2\62\62\3\2")
        buf.write(u"\63;\3\2\62;\3\2c|\4\2\62;c|\4\2\13\13\"\"\2e\2\3\3\2")
        buf.write(u"\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2")
        buf.write(u"\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2")
        buf.write(u"\25\3\2\2\2\2\27\3\2\2\2\3\32\3\2\2\2\5\60\3\2\2\2\7")
        buf.write(u"\67\3\2\2\2\t=\3\2\2\2\13D\3\2\2\2\rF\3\2\2\2\17H\3\2")
        buf.write(u"\2\2\21J\3\2\2\2\23L\3\2\2\2\25N\3\2\2\2\27W\3\2\2\2")
        buf.write(u"\31\33\7/\2\2\32\31\3\2\2\2\32\33\3\2\2\2\33$\3\2\2\2")
        buf.write(u"\34%\t\2\2\2\35!\t\3\2\2\36 \t\4\2\2\37\36\3\2\2\2 #")
        buf.write(u"\3\2\2\2!\37\3\2\2\2!\"\3\2\2\2\"%\3\2\2\2#!\3\2\2\2")
        buf.write(u"$\34\3\2\2\2$\35\3\2\2\2%.\3\2\2\2&\'\7\60\2\2\'+\t\4")
        buf.write(u"\2\2(*\t\4\2\2)(\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2")
        buf.write(u"\2,/\3\2\2\2-+\3\2\2\2.&\3\2\2\2./\3\2\2\2/\4\3\2\2\2")
        buf.write(u"\60\61\7x\2\2\61\62\7g\2\2\62\63\7e\2\2\63\64\7v\2\2")
        buf.write(u"\64\65\7q\2\2\65\66\7t\2\2\66\6\3\2\2\2\678\7r\2\289")
        buf.write(u"\7t\2\29:\7k\2\2:;\7p\2\2;<\7v\2\2<\b\3\2\2\2=A\t\5\2")
        buf.write(u"\2>@\t\6\2\2?>\3\2\2\2@C\3\2\2\2A?\3\2\2\2AB\3\2\2\2")
        buf.write(u"B\n\3\2\2\2CA\3\2\2\2DE\7]\2\2E\f\3\2\2\2FG\7_\2\2G\16")
        buf.write(u"\3\2\2\2HI\7?\2\2I\20\3\2\2\2JK\7.\2\2K\22\3\2\2\2LM")
        buf.write(u"\7=\2\2M\24\3\2\2\2NO\t\7\2\2OP\3\2\2\2PQ\b\13\2\2Q\26")
        buf.write(u"\3\2\2\2RT\7\17\2\2SR\3\2\2\2ST\3\2\2\2TU\3\2\2\2UX\7")
        buf.write(u"\f\2\2VX\7\17\2\2WS\3\2\2\2WV\3\2\2\2XY\3\2\2\2YW\3\2")
        buf.write(u"\2\2YZ\3\2\2\2Z[\3\2\2\2[\\\b\f\2\2\\\30\3\2\2\2\f\2")
        buf.write(u"\32!$+.ASWY\3\b\2\2")
        return buf.getvalue()


class VectorsLexer(Lexer):

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    NUM = 1
    VECTOR = 2
    PRINT = 3
    ID = 4
    LP = 5
    RP = 6
    AO = 7
    COMMA = 8
    SEMICOLON = 9
    WHITESPACE = 10
    NEWLINE = 11

    channelNames = [ u"DEFAULT_TOKEN_CHANNEL", u"HIDDEN" ]

    modeNames = [ u"DEFAULT_MODE" ]

    literalNames = [ u"<INVALID>",
            u"'['", u"']'", u"'='", u"','", u"';'" ]

    symbolicNames = [ u"<INVALID>",
            u"NUM", u"VECTOR", u"PRINT", u"ID", u"LP", u"RP", u"AO", u"COMMA", 
            u"SEMICOLON", u"WHITESPACE", u"NEWLINE" ]

    ruleNames = [ u"NUM", u"VECTOR", u"PRINT", u"ID", u"LP", u"RP", u"AO", 
                  u"COMMA", u"SEMICOLON", u"WHITESPACE", u"NEWLINE" ]

    grammarFileName = u"Vectors.g4"

    def __init__(self, input=None, output=sys.stdout):
        super(VectorsLexer, self).__init__(input, output=output)
        self.checkVersion("4.7")
        self._interp = LexerATNSimulator(self, self.atn, self.decisionsToDFA, PredictionContextCache())
        self._actions = None
        self._predicates = None


