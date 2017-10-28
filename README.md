### Setup
    wget http://www.antlr.org/download/antlr-4.7-complete.jar
    sudo cp antlr-4.7-complete.jar /usr/local/lib/
    export CLASSPATH=".:/usr/local/lib/antlr-4.7-complete.jar:$CLASSPATH" 
	alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
	alias grun='java org.antlr.v4.gui.TestRig'

### Test
    antlr4 Vectors.g4
	javac Vectors*.java
	grun Vectors vectors	 

### Test (JavaScript)
    cd JavaScript
    antlr4 -Dlanguage=JavaScript ../Vectors.g4
    node antlr.js
    
### Test (Python)
    cd Python
    antlr4 -Dlanguage=Python2 ../Vectors.g4
    python2.7 antlr.py
