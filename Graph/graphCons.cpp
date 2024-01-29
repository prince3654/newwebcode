#include <bits/stdc++.h>

using namespace std;
void graphConArray(int vertex, int edge)
{
    int arr[vertex+1][edge+1] ;
    int u, v;
    for (int i = 0; i < edge+1; i++)

    {
        for (int j = 0; j <vertex+1 ; j++)
        {
         arr[i][j]=0;
        }

        cout << endl;
    }
    for (int i = 0; i < edge; i++)
    {
        cout << "Enter u and v";
        cin >> u >> v;
        arr[u][v] = 1;
        arr[v][u] = 1;
    }
    for (int i = 0; i < edge+1; i++)

    {
        for (int j = 0; j <vertex+1 ; j++)
        {
            cout << arr[i][j] << " ";
        }

        cout << endl;
    }
}

int main()
{
    graphConArray(5, 6);
    return 0;
}
