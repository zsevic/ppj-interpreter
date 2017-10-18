const antlr4 = require('antlr4/index');
const Lexer = require('./VectorsLexer');
const Parser = require('./VectorsParser');
const MainListener = require('./MainListener').MainListener;
 
let input = "vector p=[1,-2,3.2],p3;print p3;p3=[1,2,4];p3=p;print p3;";
let chars = new antlr4.InputStream(input);
let lexer = new Lexer.VectorsLexer(chars);
let tokens  = new antlr4.CommonTokenStream(lexer);
let parser = new Parser.VectorsParser(tokens);
parser.buildParseTrees = true;
let tree = parser.vectors();
let vec = new MainListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(vec, tree);
