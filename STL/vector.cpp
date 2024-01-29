#include <bits/stdc++.h>

using namespace std;
void vectorIn(){
vector<int> v1 = {5,20};
v1.begin();
vector <int> v2(5,21);
v2.end();
v2.push_back(25);
vector <pair <int ,string>> vp;
vp.push_back(make_pair(12,"hggh"));

cout<<vp[0].second;
vector <int> v5(v1);
cout<<endl;
cout<<v1[0];
cout<<endl;;
cout<<v5[0];
cout<<endl;
cout<<v2.back();
cout<<endl;
vector<int>::iterator it = v2.begin();
cout<<*(it);
cout<<endl;
    while (it != v2.end()){
        cout<<*(it)<<" ";
        it++;
    }
    cout<<endl;
    for(auto i = v2.begin(); i != v2.end(); i++ ){
        cout<<*(i)<<" ";
    }
    cout<<endl;
    for(auto j : v2){
        cout<< j<<" ";
    }
    cout<<endl;
    v2.erase(v2.end()-1);
    for(auto j : v2){
        cout<< j<<" ";
    }
    cout<<endl;
    v2.push_back(23);
    for(auto j : v2){
        cout<< j<<" ";
    }
    cout<<endl;
    v1.insert(v1.begin(),24);
    v2.insert(v2.begin()+2,2,5);
    for(auto j : v2){
        cout<< j<<" ";
    }
    cout<<endl;
    v2.pop_back();
    for(auto j : v2){
        cout<< j<<" ";
    }
    cout<<endl;
    cout<<v2.size();
    for(auto i : v1){
        cout<<i<<" ";

    }
    
    cout<<endl;
    v2.swap(v1);
    cout<<endl;
    for(auto i :v2){
        cout<<i<<" ";
    }
    
    cout<<endl;
    v2.clear();
    cout<<endl;
    for(auto i : v2){
        cout<<i<<" ";
    }
    cout<<v2.empty();


}
void twoDVector(){
    vector<vector<int>> v;
    int c =5;
    int r = 6;
    for(int i =0 ;i<r ; i++){
        vector<int> row;
        for(int j =0; j< c ; j++){
            row.push_back((rand() %100 )+1);
        }
        v.push_back(row);
    }
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cout<< v[i][j]<<" ";
        }
        cout<<endl;
        
    }
    
}
void vectorList(){
    vector<int>v1[3];
    v1[0].push_back(1);
    v1[0].push_back(2);
    v1[0].push_back(3);
    v1[1].push_back(4);
    v1[1].push_back(5);
    v1[1].push_back(6);
    v1[2].push_back(7);
    v1[2].push_back(8);
    v1[2].push_back(9);
    for(auto it: v1[1])
    cout<<it<<" ";
}

int main(){
    twoDVector();
    return 0;
}