// Null 

void main(){

  int nonNullable = 10; // This value cannot be null
  int? nullableInt = null; // This value can be null
  nullableInt = 20;


  // Late doesn't has null safety.
  late String desc;
  // print(desc); late can be dangerous, because dart trust us that we will give it the value later on. if not given it will give error.
  desc = "this is good!"; // initialized

  


}









