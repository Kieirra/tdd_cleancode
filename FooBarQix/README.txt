Si le nombre est divisible par 3, écrire “Foo” à la place du nombre
Si le nombre est divisible par 5, ajouter “Bar”
Si le nombre est divisible par 7, ajouter “Qix” 
Pour chaque 3, 5, 7, ajouter “Foo”, “Bar”, “Qix” en respectant l’ordre.

1  => 1
2  => 2
3  => FooFoo (divisible by 3, contains 3)
4  => 4
5  => BarBar (divisible by 5, contains 5)
6  => Foo (divisible by 3)
7  => QixQix (divisible by 7, contains 7)
8  => 8
9  => Foo
10 => Bar
13 => Foo
15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
21 => FooQix
33 => FooFooFoo (divisible by 3, contains two 3)
51 => FooBar
53 => BarFoo

/////////////////////// STEP 2 ////////////////////

Nous avons une nouvelle demande business : nous devons garder une trace du 0 dans les nombres. 
Chaque 0 doit être remplacé par ‘*’

101   => 1*1
303   => FooFoo*Foo
105   => FooBarQix*Bar
10101 => FooQix**



