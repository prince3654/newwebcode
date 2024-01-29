#include <bits/stdc++.h>
using namespace std;

int main(){
    map<int,string> s;
    s[1]="Hiii";
    s[5]="hello";
    s.insert({0,"khariyat"});

    map<int,string> ::iterator it ;

    for(it = s.begin(); it!=s.end(); ++it){
        cout<<(*it).first<<" - "<<(*it).second<<endl;
    }
    return 0;
}