#include <bits/stdc++.h>
using namespace std;

vector<string> blockKaatoBhai(const vector<string> &lines, int kadam) {
    int maxChaudi = 0;
    for (auto &r : lines) maxChaudi = max(maxChaudi, (int)r.size());
    vector<string> theekKaro = lines;
    for (auto &r : theekKaro) if ((int)r.size() < maxChaudi) r += string(maxChaudi - r.size(), ' ');

    int cols = maxChaudi;
    if (cols < 3) return {};
    int ginti = (cols + (kadam - 3)) / kadam;
    vector<string> tukde;
    for (int i = 0; i < ginti; ++i) {
        int shuru = i * kadam;
        string naksha = "";
        for (int r = 0; r < 3; ++r) {
            string pankti = theekKaro[r];
            if (shuru + 3 > (int)pankti.size()) pankti += string(shuru + 3 - pankti.size(), ' ');
            naksha += pankti.substr(shuru, 3);
        }
        tukde.push_back(naksha);
    }
    return tukde;
}

vector<string> autoBlockKaato(const vector<string> &lines, int ummeedGinti = -1) {
    vector<string> char4 = blockKaatoBhai(lines, 4);
    vector<string> teen3 = blockKaatoBhai(lines, 3);

    if (ummeedGinti > 0) {
        if ((int)char4.size() == ummeedGinti) return char4;
        if ((int)teen3.size() == ummeedGinti) return teen3;
    }
    auto khaliNahi = [](const vector<string> &v){
        int c = 0;
        for (auto &p : v) {
            bool sabZero = true;
            for (char ch : p) if (ch != ' ') { sabZero = false; break; }
            if (!sabZero) ++c;
        }
        return c;
    };
    int n4 = khaliNahi(char4), n3 = khaliNahi(teen3);
    if (n4 >= n3) return char4;
    return teen3;
}

string blockSeBits(const string &tukda) {
    string bits;
    for (char c : tukda) bits.push_back(c == ' ' ? '0' : '1');
    return bits;
}

map<string,string> patternsParsKaro(const vector<string> &lines, const vector<string> &chinh) {
    vector<string> tukde = autoBlockKaato(lines, (int)chinh.size());
    map<string,string> dictionary;
    for (size_t i = 0; i < chinh.size() && i < tukde.size(); ++i) {
        string taala = blockSeBits(tukde[i]);
        dictionary[taala] = chinh[i];
    }
    return dictionary;
}

vector<string> expressionParsKaro(const vector<string> &lines, const map<string,string> &sabPatterns) {
    vector<string> tukde = autoBlockKaato(lines, -1);
    vector<string> tokens;
    string ankaBuffer = "";
    for (auto &tukda : tukde) {
        string taala = blockSeBits(tukda);
        auto dhundo = sabPatterns.find(taala);
        if (dhundo != sabPatterns.end()) {
            string symbol = dhundo->second;
            if (symbol.size() == 1 && isdigit(symbol[0])) {
                ankaBuffer.push_back(symbol[0]);
            } else {
                if (!ankaBuffer.empty()) {
                    tokens.push_back(ankaBuffer);
                    ankaBuffer.clear();
                }
                tokens.push_back(symbol);
            }
        } else {
            bool sabZero = true;
            for (char c : taala) if (c != '0') { sabZero = false; break; }
            if (sabZero) continue;
            continue;
        }
    }
    if (!ankaBuffer.empty()) tokens.push_back(ankaBuffer);
    return tokens;
}

string bitYa(const string &a, const string &b) {
    int lambi = max((int)a.size(), (int)b.size());
    string pehla(lambi - (int)a.size(), '0'); pehla += a;
    string dusra(lambi - (int)b.size(), '0'); dusra += b;
    string result; result.reserve(lambi);
    for (int i = 0; i < lambi; ++i) result.push_back((pehla[i]=='1' || dusra[i]=='1') ? '1' : '0');
    return result;
}

string bitAur(const string &a, const string &b) {
    int lambi = max((int)a.size(), (int)b.size());
    string pehla(lambi - (int)a.size(), '0'); pehla += a;
    string dusra(lambi - (int)b.size(), '0'); dusra += b;
    string result; result.reserve(lambi);
    for (int i = 0; i < lambi; ++i) result.push_back((pehla[i]=='1' && dusra[i]=='1') ? '1' : '0');
    return result;
}

string bitUlta(const string &a) {
    string result; result.reserve(a.size());
    for (char c : a) result.push_back(c=='1' ? '0' : '1');
    return result;
}

string ankaKoBinary(const string &sankhya, const map<string,string> &ankaUlta) {
    string nikalo;
    for (char akshar : sankhya) {
        string taala(1, akshar);
        auto dhundo = ankaUlta.find(taala);
        if (dhundo != ankaUlta.end()) nikalo += dhundo->second;
        else nikalo += string(9, '0');
    }
    return nikalo;
}

string binaryKoAnka(const string &bin, const map<string,string> &binary2anka) {
    if (bin.empty()) return "0";
    int L = (int)bin.size();
    int baaki = L % 9;
    string s = bin;
    if (baaki != 0) s = string(9 - baaki, '0') + s;
    string nikalo;
    for (int i = 0; i < (int)s.size(); i += 9) {
        string hissa = s.substr(i, 9);
        auto dhundo = binary2anka.find(hissa);
        if (dhundo != binary2anka.end()) nikalo += dhundo->second;
        else {
            nikalo += '0';
        }
    }
    int jagah = 0;
    while (jagah+1 < (int)nikalo.size() && nikalo[jagah] == '0') ++jagah;
    return nikalo.substr(jagah);
}

string tokensKoEvaluateKaro(const vector<string> &tokens, const map<string,string> &ankaUlta) {
    stack<string> maan;
    stack<string> operator_stack;

    auto lagaoDost = [&](const string &oper){
        if (oper == "~") {
            if (maan.empty()) { maan.push(string(9,'0')); return; }
            string ek = maan.top(); maan.pop();
            maan.push(bitUlta(ek));
        } else {
            if (maan.empty()) { maan.push(string(9,'0')); return; }
            string doosra = maan.top(); maan.pop();
            string pehla = maan.empty() ? string(9,'0') : maan.top(); 
            if(!maan.empty()) maan.pop();
            if (oper == "|") maan.push(bitYa(pehla,doosra));
            else if (oper == "&") maan.push(bitAur(pehla,doosra));
        }
    };

    auto prathamikta = [&](const string &o)->int {
        if (o == "~") return 3;
        if (o == "|") return 2;
        if (o == "&") return 1;
        return 0;
    };

    for (size_t i = 0; i < tokens.size(); ++i) {
        string tok = tokens[i];
        if (tok == "(") {
            operator_stack.push(tok);
        } else if (tok == ")") {
            while (!operator_stack.empty() && operator_stack.top() != "(") {
                string op = operator_stack.top(); operator_stack.pop();
                lagaoDost(op);
            }
            if (!operator_stack.empty() && operator_stack.top() == "(") operator_stack.pop();
        } else if (tok == "~" || tok == "|" || tok == "&") {
            while (!operator_stack.empty() && operator_stack.top() != "(" && prathamikta(operator_stack.top()) >= prathamikta(tok)) {
                string op = operator_stack.top(); operator_stack.pop();
                lagaoDost(op);
            }
            operator_stack.push(tok);
        } else {
            maan.push(ankaKoBinary(tok, ankaUlta));
        }
    }

    while (!operator_stack.empty()) {
        string op = operator_stack.top(); operator_stack.pop();
        lagaoDost(op);
    }

    if (maan.empty()) return string();
    return maan.top();
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    vector<string> sab(9);
    for (int i = 0; i < 9; ++i) {
        if (!std::getline(cin, sab[i])) sab[i] = "";
    }

    vector<string> ankaLines = {sab[0], sab[1], sab[2]};
    vector<string> operatorLines = {sab[3], sab[4], sab[5]};
    vector<string> expressionLines = {sab[6], sab[7], sab[8]};

    vector<string> ank = {"0","1","2","3","4","5","6","7","8","9"};
    vector<string> operators = {"|","&","~","(",")"};

    auto ankaPatterns = patternsParsKaro(ankaLines, ank);
    auto opPatterns = patternsParsKaro(operatorLines, operators);

    map<string,string> ankaUlta;
    map<string,string> binary2anka;
    for (auto &jodi : ankaPatterns) {
        binary2anka[jodi.first] = jodi.second;
        ankaUlta[jodi.second] = jodi.first;
    }

    map<string,string> sabPatterns = ankaPatterns;
    for (auto &jodi : opPatterns) sabPatterns[jodi.first] = jodi.second;

    auto tokens = expressionParsKaro(expressionLines, sabPatterns);

    string jawabBinary = tokensKoEvaluateKaro(tokens, ankaUlta);

    string finalJawab = binaryKoAnka(jawabBinary, binary2anka);

    cout << finalJawab;
    return 0;
}