import json
from antlr4 import *
from VectorsParser import VectorsParser
from VectorsListener import VectorsListener

class MainListener(VectorsListener):
    def __init__(self):
        self.table = {}
    
    def exitStatement(self, ctx):
        ## PRINT ID
        if(ctx.PRINT()):
            print(self.table[ctx.children[1].getText()])

    def exitE(self, ctx):
        ## ID
        if(ctx.ID()):
            id = ctx.ID().getText()
            return self.table[id]
        ## LP NUM COMMA NUM COMMA NUM RP
        else:
            tmp = []
            for x in range(1,6)[::2]:
                tmp.append(ctx.children[x].getText())
            return tmp

    def exitDeclaration(self, ctx):
        id = ctx.ID().getText()
        if(len(ctx.children)==3):
            ##if(ctx.children[2].ID() is not None):
                ##tmp1 = self.table[ctx.children[2].ID().getText()]
                ##self.table[id] = tmp1
            ##else:
            ## ID AO e
            tmp2 = json.loads(ctx.children[2].getText())
            self.table[id] = tmp2
        else:
            ## ID
            self.table[id] = []

    def exitAssignment(self, ctx):
        id = ctx.ID().getText()
        ## ID AO e
        if(len(ctx.children)==3):
            if(ctx.children[2].ID() is not None):
                tmp1 = self.table[ctx.children[2].ID().getText()]
                self.table[id] = tmp1
            else:
                tmp2 = json.loads(ctx.children[2].getText())
                self.table[id] = tmp2
        ##else:
            ##self.table[id] = []
