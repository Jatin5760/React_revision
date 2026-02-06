void main(){
  pow(8);
  int result = add(num1: 3, num2: 4);
  print(result);

}

void pow(int x){
  int y =  x * x;
  print(y);
}


int add({required int num1 , required int num2}){
  int result = num1+num2;
  return result;
}