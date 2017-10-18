grammar Vectors;

/*
 * Lexer rules
 */

NUM : '-'?([0]|[1-9][0-9]*)('.'[0-9][0-9]*)? ;
VECTOR : 'v' 'e' 'c' 't' 'o' 'r' ;
PRINT : 'p' 'r' 'i' 'n' 't' ;
ID : [a-z][a-z0-9]* ;
LP : '[' ;
RP : ']' ;
AO : '=' ;
COMMA : ',' ;
SEMICOLON : ';' ;
WHITESPACE : (' ' | '\t') -> skip ;
NEWLINE: ('\r'? '\n' | '\r')+ -> skip;

/*
 * Parser rules
 */

vectors : array_of_statements 
    ;

array_of_statements : array_of_statements statement SEMICOLON
    | statement SEMICOLON
    ;

statement : VECTOR array_of_declarations
    | PRINT ID
    | assignment
    ;

array_of_declarations: array_of_declarations COMMA declaration
    | declaration 
    ;

declaration: ID AO e
    | ID
    ;

assignment: ID AO e
    ;

e: LP NUM COMMA NUM COMMA NUM RP
    | ID
    ;
