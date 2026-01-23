#include <bits/stdc++.h> 
using namespace std; 
 
int main() { 
    ios::sync_with_stdio(false); 
    cin.tie(nullptr); 
 
    int galiyaan, makaan_num; 
    cin >> galiyaan >> makaan_num; 
 
    vector<string> sheher_ka_naksha(galiyaan); 
    int i_grid = 0;
    while (i_grid < galiyaan) { 
        sheher_ka_naksha[i_grid].resize(makaan_num); 
        int j_grid = 0;
        while (j_grid < makaan_num) { 
            cin >> sheher_ka_naksha[i_grid][j_grid]; 
            j_grid++;
        } 
        i_grid++;
    } 
 
    vector<int> seedhi_sadak, lambi_sadak; 
    int i_sadak = 0;
    while (i_sadak < galiyaan) { 
        if (all_of(sheher_ka_naksha[i_sadak].begin(), sheher_ka_naksha[i_sadak].end(), [](char c){ return c != '.'; })) 
            seedhi_sadak.push_back(i_sadak); 
        i_sadak++;
    } 
    
    int j_sadak = 0;
    while (j_sadak < makaan_num) { 
        bool poora_bhara = true; 
        int i_check = 0;
        while (i_check < galiyaan) {
            if (sheher_ka_naksha[i_check][j_sadak] == '.') poora_bhara = false; 
            i_check++;
        }
        if (poora_bhara) lambi_sadak.push_back(j_sadak); 
        j_sadak++;
    } 
 
    vector<vector<bool>> chauraha_hai(galiyaan, vector<bool>(makaan_num, false)); 
    for (int c : lambi_sadak) { 
        int i_chauraha = 0;
        while (i_chauraha < galiyaan) { 
            int baayein = c - 1, daayein = c + 1; 
            if (baayein >= 0 && daayein < makaan_num && sheher_ka_naksha[i_chauraha][baayein] == 'C' && sheher_ka_naksha[i_chauraha][daayein] == 'C') 
                chauraha_hai[i_chauraha][c] = true; 
            i_chauraha++;
        } 
    } 
    for (int r : seedhi_sadak) { 
        int j_chauraha = 0;
        while (j_chauraha < makaan_num) { 
            int upar = r - 1, neeche = r + 1; 
            if (upar >= 0 && neeche < galiyaan && sheher_ka_naksha[upar][j_chauraha] == 'C' && sheher_ka_naksha[neeche][j_chauraha] == 'C') 
                chauraha_hai[r][j_chauraha] = true; 
            j_chauraha++;
        } 
    } 
 
    vector<vector<bool>> cable_ka_raasta(galiyaan, vector<bool>(makaan_num, false)); 
    int i_raasta = 0;
    while (i_raasta < galiyaan) {
        int j_raasta = 0;
        while (j_raasta < makaan_num) {
            if (sheher_ka_naksha[i_raasta][j_raasta] == 'C' || chauraha_hai[i_raasta][j_raasta]) 
                cable_ka_raasta[i_raasta][j_raasta] = true; 
            j_raasta++;
        }
        i_raasta++;
    }
 
    vector<vector<int>> saare_raste(galiyaan * makaan_num); 
    int dishayein_i[4] = {-1, 0, 1, 0}; 
    int dishayein_j[4] = {0, 1, 0, -1}; 
 
    int i_graph = 0;
    while (i_graph < galiyaan) { 
        int j_graph = 0;
        while (j_graph < makaan_num) { 
            if (!cable_ka_raasta[i_graph][j_graph]) {
                j_graph++;
                continue; 
            }
            int jagah_ka_id = i_graph * makaan_num + j_graph; 
            int disha = 0;
            while (disha < 4) { 
                int padosi_i = i_graph + dishayein_i[disha], padosi_j = j_graph + dishayein_j[disha]; 
                if (padosi_i >= 0 && padosi_i < galiyaan && padosi_j >= 0 && padosi_j < makaan_num && cable_ka_raasta[padosi_i][padosi_j]) 
                    saare_raste[jagah_ka_id].push_back(padosi_i * makaan_num + padosi_j); 
                disha++;
            } 
            j_graph++;
        } 
        i_graph++;
    } 
 
    int shuruaat = -1; 
    int i_start = 0;
    while (i_start < galiyaan && shuruaat == -1) {
        int j_start = 0;
        while (j_start < makaan_num) {
            if (cable_ka_raasta[i_start][j_start] && saare_raste[i_start * makaan_num + j_start].size() == 1) { 
                shuruaat = i_start * makaan_num + j_start; 
                break; 
            } 
            j_start++;
        }
        i_start++;
    }
 
    vector<bool> dekh_liya_hai(galiyaan * makaan_num, false); 
    vector<int> lapeto_horizontal(galiyaan, 0), lapeto_vertical(makaan_num, 0); 
 
    int current_jagah = shuruaat, pichla_kadam = -1; 
    dekh_liya_hai[current_jagah] = true; 
 
    while (true) { 
        int abhi_row = current_jagah / makaan_num, abhi_col = current_jagah % makaan_num; 
        int agla_kadam = -1; 
        for (int padosi : saare_raste[current_jagah]) 
            if (padosi != pichla_kadam && !dekh_liya_hai[padosi]) { 
                agla_kadam = padosi; 
                break; 
            } 
 
        if (chauraha_hai[abhi_row][abhi_col] && pichla_kadam != -1) { 
            int pichli_row = pichla_kadam / makaan_num, pichli_col = pichla_kadam % makaan_num; 
            int nishaan = (sheher_ka_naksha[abhi_row][abhi_col] == 'C') ? 1 : -1; 
 
            if (pichli_row == abhi_row) 
                lapeto_vertical[abhi_col] += ((pichli_col < abhi_col) ? 1 : -1) * nishaan; 
            else 
                lapeto_horizontal[abhi_row] += ((pichli_row < abhi_row) ? 1 : -1) * nishaan; 
        } 
 
        if (agla_kadam == -1) break; 
        pichla_kadam = current_jagah; 
        current_jagah = agla_kadam; 
        dekh_liya_hai[current_jagah] = true; 
    } 
 
    long long jawaab = 0; 
    for (int r : seedhi_sadak) jawaab += abs(lapeto_horizontal[r]) / 2; 
    for (int c : lambi_sadak)   jawaab += abs(lapeto_vertical[c]) / 2; 
 
    cout << jawaab; 
    return 0; 
}