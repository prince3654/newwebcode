#include<bits/stdc++.h>

using namespace std;
void listcons(int vertex , int edge ){
    vector<pair<int,int>> vec[vertex+1];
    int u =0,v=0;
    int weg =0;
    pair <int, int> p1;
    pair<int, int> p2;
    for(int i =0 ; i<edge;i++){
          cout << "Enter u and v";
        cin >> u >> v;
        cout<<"Enter weight";
        cin>>weg;
        p1={u,weg};
        p2={v,weg};
        vec[u].push_back(p2);
        vec[v].push_back(p1);
        
    }
    // Vector display
    for(int i =0 ; i<edge;i++){

     for(auto j : vec[i]){
        cout<<i<<"-->>"<< j.first<<"-"<<j.second<<"    ";
    }
    cout<<endl;}
    
}
int main(){
    listcons(5,6);
    return 0;
}