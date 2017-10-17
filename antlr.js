const http = require('http');
const antlr4 = require('antlr4/index');
const Lexer = require('./VectorsLexer');
const Parser = require('./VectorsParser');
const MainListener = require('./MainListener').MainListener;
 
http.createServer((req, res) => {
   
   res.writeHead(200, {
          'Content-Type': 'text/html',        
      });
 
   res.write('<html><head><meta charset="UTF-8"/></head><body>');
   
   var input = "vector p=[1,2,3];";
   var chars = new antlr4.InputStream(input);
   var lexer = new Lexer.VectorsLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new Parser.VectorsParser(tokens);
   parser.buildParseTrees = true;   
   var tree = parser.vectors();   
   var vec = new MainListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(vec, tree);
   
   res.write('</body></html>');
   res.end();
 
}).listen(1337);
