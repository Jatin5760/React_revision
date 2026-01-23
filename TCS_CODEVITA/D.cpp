#include <bits/stdc++.h>
using namespace std;

struct Dhaar {
    int pehla, dusra;
    bool operator<(const Dhaar& anya) const {
        return (pehla == anya.pehla) ? dusra < anya.dusra : pehla < anya.pehla;
    }
};

static vector<Dhaar> sudharo(vector<Dhaar> dhaar_list) {
    for (auto& kinara : dhaar_list)
        if (kinara.pehla > kinara.dusra)
            swap(kinara.pehla, kinara.dusra);
    sort(dhaar_list.begin(), dhaar_list.end());
    return dhaar_list;
}

static string likho(const vector<Dhaar>& dhaar_list) {
    string natija;
    for (const auto& kinara : dhaar_list)
        natija += to_string(kinara.pehla) + "-" + to_string(kinara.dusra) + ",";
    return natija;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int sankhya;
    cin >> sankhya;

    vector<Dhaar> shuru_dhaar(sankhya), manzil_dhaar(sankhya);
    set<int> alag_nodes;

    for (int idx = 0; idx < sankhya; ++idx) {
        cin >> shuru_dhaar[idx].pehla >> shuru_dhaar[idx].dusra;
        alag_nodes.insert(shuru_dhaar[idx].pehla);
        alag_nodes.insert(shuru_dhaar[idx].dusra);
    }

    for (int idx = 0; idx < sankhya; ++idx)
        cin >> manzil_dhaar[idx].pehla >> manzil_dhaar[idx].dusra;

    vector<int> sabhi_node(alag_nodes.begin(), alag_nodes.end());

    vector<Dhaar> manzil = sudharo(manzil_dhaar);
    string manzil_chabi = likho(manzil);

    vector<Dhaar> shuru = sudharo(shuru_dhaar);
    string shuru_chabi = likho(shuru);

    if (shuru_chabi == manzil_chabi) {
        cout << 0;
        return 0;
    }

    unordered_map<string, int> dekha_hua;
    queue<pair<vector<Dhaar>, int>> bfs_queue;

    dekha_hua[shuru_chabi] = 0;
    bfs_queue.push({shuru, 0});

    while (!bfs_queue.empty()) {
        vector<Dhaar> abhi_dhaar = bfs_queue.front().first;
        int duri = bfs_queue.front().second;
        bfs_queue.pop();

        unordered_map<int, vector<int>> padosi;
        for (const auto& kinara : abhi_dhaar) {
            padosi[kinara.pehla].push_back(kinara.dusra);
            padosi[kinara.dusra].push_back(kinara.pehla);
        }

        set<vector<int>> chakkar;
        for (int node : sabhi_node) {
            function<void(int, int, vector<int>&, set<int>&)> khoj_karo =
                [&](int current_node, int pichla_node, vector<int>& rasta, set<int>& dekhe_node) {
                    rasta.push_back(current_node);
                    dekhe_node.insert(current_node);

                    for (int padosi_node : padosi[current_node]) {
                        if (padosi_node == pichla_node) continue;

                        if (dekhe_node.count(padosi_node)) {
                            auto position = find(rasta.begin(), rasta.end(), padosi_node);
                            if (position != rasta.end()) {
                                vector<int> cycle(position, rasta.end());
                                if (cycle.size() >= 3) {
                                    int min_jagah = min_element(cycle.begin(), cycle.end()) - cycle.begin();
                                    rotate(cycle.begin(), cycle.begin() + min_jagah, cycle.end());
                                    chakkar.insert(cycle);
                                }
                            }
                        } else if (rasta.size() < sabhi_node.size()) {
                            khoj_karo(padosi_node, current_node, rasta, dekhe_node);
                        }
                    }

                    rasta.pop_back();
                    dekhe_node.erase(current_node);
                };

            vector<int> path;
            set<int> visited_set;
            khoj_karo(node, -1, path, visited_set);
        }

        for (const auto& cycle : chakkar) {
            unordered_map<int, int> badlo;
            for (int vertex : sabhi_node)
                badlo[vertex] = vertex;

            int lambai = cycle.size();
            for (int pos = 0; pos < lambai; ++pos)
                badlo[cycle[pos]] = cycle[(pos + 1) % lambai];

            vector<Dhaar> naya_dhaar;
            naya_dhaar.reserve(abhi_dhaar.size());
            for (const auto& kinara : abhi_dhaar)
                naya_dhaar.push_back({badlo[kinara.pehla], badlo[kinara.dusra]});

            naya_dhaar = sudharo(naya_dhaar);
            string naya_chabi = likho(naya_dhaar);

            if (naya_chabi == manzil_chabi) {
                cout << duri + 1;
                return 0;
            }

            if (!dekha_hua.count(naya_chabi)) {
                dekha_hua[naya_chabi] = duri + 1;
                bfs_queue.push({naya_dhaar, duri + 1});
            }
        }
    }

    cout << -1;
    return 0;
}