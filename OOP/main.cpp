#include<iostream>
using namespace std;

class Student {
    public:
    string name;
    int age;

    void displayInfo(){
    name= "sayem";
    age= 29;
    cout << name << " " << age << endl;
}


};

int main()
{
    Student sayem;
    sayem.displayInfo();
}