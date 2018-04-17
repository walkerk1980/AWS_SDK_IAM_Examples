package com.amazon.oop.example;

public class PolyMorphism {	
	
	public static void main(String[] z) {
		//example of polymorphism
    
		System.out.println(add(1, 1));
		System.out.println(add("one ", "two"));
	}
	
	//This static method takes two integers as args and is named add
	//it sums the ints and returns the result as an int
  
	static int add(int a, int b) {
		int c = a + b;
		return c;
	}
  
  //This static method takes three integers as args and is named add
	//it sums the ints and returns the result as an int
  
	static int add(int a, int b, int c) {
		int c = a + b + c;
		return d;
	}
  
	//This static method takes two strings as args and is named add
	//it concats the strings and returns result as string
  
	static String add(String a, String b) {
		String c = a + b;
		return c;
	}
  
	//When the code is called in the main method the
	//java compiler knows which definition of the 
	//add method() to use based on the number and
	//type (int or string) of arguments that are passed.
	//As you can see in the methods the + sign operator works
	//differently depending on the type of variables it is
	//used on. This is what is known as operator overloading
	//which is also an example of polymorphism
}
