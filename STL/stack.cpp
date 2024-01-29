#include<bits/stdc++.h>
using namespace std;
void explainStack(){
    stack<int> s1;
    s1.push(1);
    int n;
    for(int i = 0 ;i<5 ;i++){
        cin>>n;
        s1.push(n);
    }
    for(int i = 0 ;i!=s1.empty();i++){
        cout<<s1.top();
        s1.pop();
    }
}
int main(){
explainStack();
    return 0;
}