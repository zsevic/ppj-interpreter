from antlr4 import *
from VectorsLexer import VectorsLexer
from VectorsParser import VectorsParser
from MainListener import MainListener

def main():
    input = FileStream('./test.txt')
    lexer = VectorsLexer(input)
    stream = CommonTokenStream(lexer)
    parser = VectorsParser(stream)
    tree = parser.vectors()

    vec = MainListener()
    walker = ParseTreeWalker()
    walker.walk(vec, tree)

if __name__ == '__main__':
    main()
