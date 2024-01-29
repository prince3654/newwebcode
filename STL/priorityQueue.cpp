#include<bits/stdc++.h>

using namespace std;

void explainPriority(){
    priority_queue<int> p1 ;
    p1.push(6);
    p1.push(0);
    p1.push(100);
    p1.push(2);
    cout<<p1.top();
    p1.pop();
    cout<<p1.top();
}
int main(){
    explainPriority();
}