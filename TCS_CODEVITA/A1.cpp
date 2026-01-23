#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <queue>
#include <set>

// Using namespace for brevity in competitive programming style
using namespace std;

int main() {
    int N;
    cin >> N;
    cin.ignore(); // Consume the newline character left by cin

    string line;

    // Read the "shuffled" header
    getline(cin, line);

    // Read the N shuffled instructions
    vector<string> shuffled_strings(N);
    for (int i = 0; i < N; ++i) {
        getline(cin, shuffled_strings[i]);
    }

    // Read the "original" header
    getline(cin, line);

    // Map to store string -> int mapping
    map<string, int> string_to_int;
    // The target state is always {0, 1, 2, ..., N-1}
    vector<int> target_state(N);
    
    // Read the N original instructions to build the map
    for (int i = 0; i < N; ++i) {
        getline(cin, line);
        string_to_int[line] = i;
        target_state[i] = i;
    }

    // Create the integer-based start_state from the shuffled strings
    vector<int> start_state(N);
    for (int i = 0; i < N; ++i) {
        start_state[i] = string_to_int[shuffled_strings[i]];
    }

    // --- Breadth-First Search (BFS) ---

    // Queue to store pairs of {current_state, cost}
    queue<pair<vector<int>, int>> q;
    
    // Set to keep track of visited states to avoid cycles
    set<vector<int>> visited;

    // Push the starting state with cost 0
    q.push({start_state, 0});
    visited.insert(start_state);

    while (!q.empty()) {
        vector<int> current_state = q.front().first;
        int current_cost = q.front().second;
        q.pop();

        // Check if we've reached the target
        if (current_state == target_state) {
            cout << current_cost << endl;
            return 0;
        }

        // --- Generate all possible next states (one cut-and-insert) ---

        // i = start of cut, j = end of cut
        for (int i = 0; i < N; ++i) {
            for (int j = i; j < N; ++j) {
                // 1. Create the 'block' to be moved
                vector<int> block;
                for (int b = i; b <= j; ++b) {
                    block.push_back(current_state[b]);
                }

                // 2. Create the 'remaining' list (with the block removed)
                vector<int> remaining;
                for (int r = 0; r < i; ++r) {
                    remaining.push_back(current_state[r]);
                }
                for (int r = j + 1; r < N; ++r) {
                    remaining.push_back(current_state[r]);
                }

                // 3. Try inserting the 'block' at every possible position 'k'
                // We can insert at k=0 (before) up to k=remaining.size() (at end)
                for (int k = 0; k <= remaining.size(); ++k) {
                    vector<int> next_state = remaining;
                    
                    // Insert the block at the k-th position
                    next_state.insert(next_state.begin() + k, block.begin(), block.end());

                    // If this new state hasn't been visited, add it to the queue
                    if (visited.find(next_state) == visited.end()) {
                        visited.insert(next_state);
                        q.push({next_state, current_cost + 1});
                    }
                }
            }
        }
    }

    return 0; // Should not be reached if a solution always exists
}