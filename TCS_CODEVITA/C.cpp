#include <bits/stdc++.h>
using namespace std;

struct Point {
    int x, y;
    bool operator==(const Point &other) const {
        return x == other.x && y == other.y;
    }
};

struct PointHash {
    size_t operator()(Point const &point) const {
        return (uint64_t(uint32_t(point.x)) << 32) ^ uint32_t(point.y);
    }
};

struct Key {
    int x, y, slide_id;
    bool operator==(const Key &other) const {
        return x == other.x && y == other.y && slide_id == other.slide_id;
    }
};

struct KeyHash {
    size_t operator()(Key const &key) const {
        uint64_t hash = key.x;
        hash = (hash << 21) ^ key.y;
        hash = (hash << 21) ^ key.slide_id;
        return size_t(hash);
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    vector<long long> input;
    long long value;
    while (cin >> value) input.push_back(value);
    
    int index = 0;
    int num_slides = (int)input[index++];
    vector<array<int, 4>> slides(num_slides);
    
    for (int j = 0; j < num_slides; j++) {
        slides[j][0] = (int)input[index++];
        slides[j][1] = (int)input[index++];
        slides[j][2] = (int)input[index++];
        slides[j][3] = (int)input[index++];
    }
    
    int start_x = (int)input[index++];
    int start_y = (int)input[index++];
    int energy = (int)input[index++];
    
    unordered_map<Point, vector<int>, PointHash> grid;
    unordered_map<Key, pair<int, int>, KeyHash> next_position;
    
    for (int slide_id = 0; slide_id < num_slides; slide_id++) {
        int x1 = slides[slide_id][0], y1 = slides[slide_id][1];
        int x2 = slides[slide_id][2], y2 = slides[slide_id][3];
        int delta_x = (x2 > x1) ? 1 : -1;
        int delta_y = (y2 > y1) ? 1 : -1;
        int length = abs(x2 - x1);
        
        if (delta_y == -1) {
            for (int k = 0; k < length; k++) {
                int x = x1 + delta_x * k;
                int y = y1 - k;
                grid[{x, y}].push_back(slide_id);
                next_position[{x, y, slide_id}] = {x + delta_x, y - 1};
            }
            grid[{x2, y2}].push_back(slide_id);
        } else {
            for (int k = 0; k < length; k++) {
                int x = x2 - delta_x * k;
                int y = y2 - k;
                grid[{x, y}].push_back(slide_id);
                next_position[{x, y, slide_id}] = {x - delta_x, y - 1};
            }
            grid[{x1, y1}].push_back(slide_id);
        }
    }
    
    auto fall = [&](int x, int y) -> pair<int, int> {
        for (int yy = y - 1; yy >= 0; yy--) {
            auto it = grid.find({x, yy});
            if (it != grid.end()) return {x, yy};
        }
        return {x, 0};
    };
    
    int current_x = start_x, current_y = start_y;
    if (grid.find({current_x, current_y}) == grid.end()) {
        auto pos = fall(current_x, current_y);
        current_x = pos.first;
        current_y = pos.second;
    }
    
    while (true) {
        if (current_y == 0) break;
        
        auto it = grid.find({current_x, current_y});
        if (it == grid.end()) {
            auto pos = fall(current_x, current_y);
            current_x = pos.first;
            current_y = pos.second;
            continue;
        }
        
        auto &slide_ids = it->second;
        if (slide_ids.size() == 1) {
            int slide_id = slide_ids[0];
            auto it2 = next_position.find({current_x, current_y, slide_id});
            if (it2 == next_position.end()) {
                auto pos = fall(current_x, current_y);
                current_x = pos.first;
                current_y = pos.second;
                continue;
            }
            if (energy == 0) break;
            energy--;
            current_x = it2->second.first;
            current_y = it2->second.second;
        } else {
            long long cost = 1LL * current_x * current_y;
            vector<pair<int, pair<int, int>>> destinations;
            destinations.reserve(slide_ids.size());
            
            for (int slide_id : slide_ids) {
                auto it3 = next_position.find({current_x, current_y, slide_id});
                if (it3 != next_position.end()) {
                    destinations.push_back({slide_id, it3->second});
                }
            }
            
            if ((long long)energy <= cost) {
                if (destinations.empty()) {
                    auto pos = fall(current_x, current_y);
                    current_x = pos.first;
                    current_y = pos.second;
                    continue;
                }
                break;
            }
            
            energy -= (int)cost;
            if (destinations.empty()) {
                auto pos = fall(current_x, current_y);
                current_x = pos.first;
                current_y = pos.second;
                continue;
            }
            
            int best_x = 0, best_y = -1;
            for (auto &dest : destinations) {
                int next_x = dest.second.first;
                int next_y = dest.second.second;
                if (next_y > best_y) {
                    best_y = next_y;
                    best_x = next_x;
                }
            }
            
            if (energy == 0) break;
            energy--;
            current_x = best_x;
            current_y = best_y;
        }
    }
    
    cout << current_x << " " << current_y << endl;
    return 0;
}