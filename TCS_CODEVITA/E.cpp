#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int lambaai, chaudaai;
    if (!(cin >> lambaai >> chaudaai)) return 0;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    
    vector<int> column_ka_count(chaudaai, 0);
    for (int i = 0; i < lambaai; ++i) {
        string line, saaf_string;
        getline(cin, line);
        for (char akshar : line) if (akshar != ' ') saaf_string.push_back(akshar);
        for (int j = 0; j < chaudaai; ++j) if (saaf_string[j] == '*') ++column_ka_count[j];
    }
    
    int kitne_baar; 
    cin >> kitne_baar;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    
    for (int baar = 0; baar < kitne_baar; ++baar) {
        string disha; 
        getline(cin, disha);
        vector<int> frequency(lambaai + 1, 0);
        for (int value : column_ka_count) ++frequency[value];
        vector<int> suffix(lambaai + 2, 0);
        int abhi_tak = 0;
        for (int x = lambaai; x >= 0; --x) {
            abhi_tak += frequency[x];
            suffix[x] = abhi_tak;
        }
        int nayi_lambaai = chaudaai, nayi_chaudaai = lambaai;
        vector<int> naya_count(nayi_chaudaai, 0);
        if (disha == "right") {
            for (int col = 0; col < nayi_chaudaai; ++col) naya_count[col] = suffix[col + 1];
        } else {
            for (int col = 0; col < nayi_chaudaai; ++col) naya_count[col] = suffix[lambaai - col];
        }
        lambaai = nayi_lambaai; chaudaai = nayi_chaudaai; column_ka_count.swap(naya_count);
    }
    
    for (int i = 0; i < lambaai; ++i) {
        for (int j = 0; j < chaudaai; ++j) {
            char character = (i >= lambaai - column_ka_count[j]) ? '*' : '.';
            if (j) cout << ' ';
            cout << character;
        }
        if (i + 1 < lambaai) cout << '\n';
    }
    
    return 0;
}