# ppj-interpreter
Small interpreter written in ANTLR and Python 2.7

### Setup
    wget http://www.antlr.org/download/antlr-4.7-complete.jar
    sudo cp antlr-4.7-complete.jar /usr/local/lib/
    export CLASSPATH=".:/usr/local/lib/antlr-4.7-complete.jar:$CLASSPATH" 
	alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7-complete.jar:$CLASSPATH" org.antlr.v4.Tool'

### Usage
    antlr4 -Dlanguage=Python2 Vectors.g4
    python2.7 antlr.py

### Demo


input


    vector v = [1,3.1,4], v1 = [-2, 1,0], v2, v3;
    print v;
    v2=[0,1,4.5];
    print v2;
    v3 = v1;
    print v3;


output


    [1, 3.1, 4]
    [0, 1, 4.5]
    [-2, 1, 0]
