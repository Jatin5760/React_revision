// Primitive data types

/*
  1) bool     true/false
  2) integer  3
  3) double   4.7
 */

// Complex data types

/*
  1) String 'text'
  2) List   [1,2,3]
  3) Map    {'key':'value'}
 */


// Keywords
/*
  1) final  - after first initialization not changable in this lifecybcle
  2) const  - set while compiling not changeble
  3) var  - type is assigned automatically
  4) late - to say we will assign the variable a value later on.
*/



void main(){
  bool boolOutput = false;
  print(boolOutput);

  int intOutput = -1;
  print(intOutput);

  double doubleOutput = -3.69;
  print(doubleOutput);


  String stringOutput = 'Jatin Sharma';
  print('the value is $stringOutput');


  late int exampleInt;
  exampleInt = 34;
  print(exampleInt);


  final int finalInt = 2; // we can assign it in runtime but not in compile time
  print(finalInt);
  // finalInt = 3; gives error because we cannot change the final datatype.


  const int constInt = 4; // we cannot assign it in runtime only compile time.
  print(constInt);


  // if we don't know the datatype we can use this, but it is not advisable to use dynamic.
  dynamic dynamicVariable = "Hello World!";
  // dynamicVariable = 50; overwrite is allowed that's why it is bad.
  print(dynamicVariable);



  var varOutput = 69;
  // varOutput = "text"; error we can't change the datatype. // overwrting is not allowed.
  print(varOutput);


}