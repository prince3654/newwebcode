#include <bits/stdc++.h>
using namespace std;

void stlpair (){
    pair<int,int > p = {1,4};
    cout<<endl;
    cout<<p.first;
    cout<<endl;
    cout<<p.second;
    cout<<endl;
    pair<int , string> st = { 1, "string"};
    cout<<st.second;
}
void nestedPair(){
    // pair <int, pair<float,pair<string , pair<int,string>>> p1 = {1,{1.1,{"String 1",{2,"String2"}}}};
    pair<int , pair<int , string >> p1 = {1,{12,"String"}};
    cout<<p1.first;
    cout<<p1.second.second;
}
int main(){
    cout<<"HII";
    // stlpair();
    nestedPair();
    return 0;
}
