void main(){

  List exampleList = [1, 2, 3, 4]; // this is dynamic datatype list
  List<int> lst = [5, 6, 7, 8];
  print(lst);

  List<dynamic> dynamicList = [1, "String", 3.4, 4];
  print(dynamicList);

  print(exampleList);

  print(exampleList[2]);


  print(dynamicList.length);

  dynamicList.add("Added a value");
  print(dynamicList);


  // Maps
  Map<String, String> exampleMap = {
    "key1" : "value1",
    "key2" : "value2"
  };

  Map<String, dynamic> exampleMap2 = {
    "key1" : 3,
    "key2" : "value2"
  };

  print(exampleMap["key2"]);
  print(exampleMap2.length);
  print(exampleMap2.keys);
  print(exampleMap2.values);
}



















