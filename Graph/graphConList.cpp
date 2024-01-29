#include<bits/stdc++.h>

using namespace std;
vector<int>* listcons(int vertex , int edge ){
    vector<int> vec[vertex+1];
    int u =0,v=0;
    for(int i =0 ; i<edge;i++){
          cout << "Enter u and v";
        cin >> u >> v;
        vec[u].push_back(v);
        vec[v].push_back(u);
        
    }
    // Vector display
    for(int i =0 ; i<edge;i++){

     for(auto j : vec[i]){
        cout<< j<<" ";
    }
    cout<<endl;}
    return vec;
}
int main(){
    vector<int> v1[]
    = listcons(5,6);
    return 0;
}