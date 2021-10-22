// Operadores aritimeticos ->
   5 + 2 > 2  - soma
   5 - 2 > 3  - Subtrair
   5 * 2 > 10 - multiplicar
   5 / 2 > 2.5 - Dividir
   5 % 2 > 1 ( resto de uma divisão)
   5** 2 > 25   ( potencia )

// Ordem de Precedência de operadores -->

1° - ( )
2° - **
3° - * ; / ; %
4° - + ; -

// exemplos -->

var n = 3        

                    Tipo de sintase
n = n +4   simplificando n+=4  ou x++
n = n - 5  simplificando n-=4  ou X--
n = n * 4  simplificando n*=4
n = n / 2  simplificando n/=2
n = n ** 2 simplificando n**=2
n = n % 5  simplificando n%=5


// Operadores relacionais //

> : maior
< : menor
>= : maior ou igual
<= : menor ou igual
== : igual ex :( 5==5 : true ou 5=="5" : true) - Analisa se é o mesmo valor
=== : idêntico ex: ( 5==="5" : falso  e 5===5 : true) analiasa se é o mesmo valor e tipo - É chamdo de Operador de identidade
!= : diferente


// Operadores lógicos //

! : negação ou nao 
&& : Conjunção , and , E
|| : disjunção , OR , OU


exmplos de expressões : 

idade>=15 && idade<=17 // a idade está entre 15 e 17 ?
estado=="RJ" || estado=="SP" // o estado é RJ ou SP ?
salário>1500 && sexo!="M" // salario é mairo que 1550 e sexo é diferente de masculino ?


// Ordem de precedencia Geral//

(), **, /, ...
>, < , >= ...
!
&&
||


// Operadores ternário// é com se fosse "se" em excel
?
:

estrutura:     teste        ?   true    :   false
exemplo:     A média >= 7.0 ? "Aprovado":"Reprovado" // se a media é maior ou igual a 7, aprovado, se não reprovado.
