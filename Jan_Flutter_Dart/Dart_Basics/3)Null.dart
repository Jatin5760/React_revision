// Null 

void main(){

  int nonNullable = 10; // This value cannot be null
  int? nullableInt = null; // This value can be null
  nullableInt = 20;


  // Late doesn't has null safety.
  late String desc;
  // print(desc); late can be dangerous, because dart trust us that we will give it the value later on. if not given it will give error.
  desc = "this is good!"; // initialized

  // int value = nullableInt;

  // int value2 = nullableInt ?? 1; // 1 is used in case of nullableInt is null;


  String ? nullableString = null;
  int stringLength = nullableString?.length ?? 0; // if nullableString is null, then stringLength is 0;
  print(stringLength); 

}









