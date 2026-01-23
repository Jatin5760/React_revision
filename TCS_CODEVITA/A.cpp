#include <bits/stdc++.h>
using namespace std;

static int encontrarOperacionesMinimas(const vector<int>& permutacion) {
    int tamano = (int)permutacion.size();
    
    string estado_actual(tamano, '\0');
    string estado_objetivo(tamano, '\0');

    for (int i = 0; i < tamano; ++i) {
        estado_actual[i] = char(permutacion[i]);
        estado_objetivo[i] = char(i);
    }
    if (estado_actual == estado_objetivo) return 0;
    vector<array<int, 3>> movimientos_posibles;
    movimientos_posibles.reserve(tamano * tamano * tamano);
    
    for (int posicion_inicio = 0; posicion_inicio < tamano; ++posicion_inicio) {
        for (int posicion_final = posicion_inicio + 1; posicion_final <= tamano; ++posicion_final) {
            int longitud_segmento = posicion_final - posicion_inicio;
            for (int posicion_insertar = 0; posicion_insertar <= tamano - longitud_segmento; ++posicion_insertar) {
                if (posicion_insertar == posicion_inicio) continue;
                movimientos_posibles.push_back({posicion_inicio, posicion_final, posicion_insertar});
            }
        }
    }
    deque<string> cola_adelante, cola_atras;
    unordered_map<string, int> distancia_adelante, distancia_atras;
    
    cola_adelante.push_back(estado_actual);
    distancia_adelante.emplace(estado_actual, 0);
    
    cola_atras.push_back(estado_objetivo);
    distancia_atras.emplace(estado_objetivo, 0);
    
    auto expandirNivel = [&](deque<string>& cola_corriente, 
                          unordered_map<string, int>& distancias_propias,
                          unordered_map<string, int>& distancias_opuestas) -> int {
        int tamano_nivel = (int)cola_corriente.size();
        
        while (tamano_nivel--) {
            string corriente = cola_corriente.front();
            cola_corriente.pop_front();
            int distancia_corriente = distancias_propias[corriente];
            
            for (auto &movimiento : movimientos_posibles) {
                int inicio = movimiento[0];
                int fin = movimiento[1];
                int insertar = movimiento[2];
                int longitud = fin - inicio;
                
                string segmento = corriente.substr(inicio, longitud);
                string restante = corriente.substr(0, inicio) + corriente.substr(fin);
                string proximo_estado = restante.substr(0, insertar) + segmento + restante.substr(insertar);
                
                if (distancias_propias.find(proximo_estado) != distancias_propias.end()) 
                    continue;
                
                int nueva_distancia = distancia_corriente + 1;
                
                auto buscar = distancias_opuestas.find(proximo_estado);
                if (buscar != distancias_opuestas.end()) {
                    return nueva_distancia + buscar->second;
                }
                
                distancias_propias.emplace(proximo_estado, nueva_distancia);
                cola_corriente.push_back(proximo_estado);
            }
        }
        return -1;
    };
    
    while (!cola_adelante.empty() && !cola_atras.empty()) {
        if (cola_adelante.size() <= cola_atras.size()) {
            int resultado = expandirNivel(cola_adelante, distancia_adelante, distancia_atras);
            if (resultado != -1) return resultado;
        } else {
            int resultado = expandirNivel(cola_atras, distancia_atras, distancia_adelante);
            if (resultado != -1) return resultado;
        }
    }
    
    return 0;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int numero_elementos;
    if (!(cin >> numero_elementos)) return 0;
    
    string linea;
    getline(cin, linea);
    getline(cin, linea);
    
    vector<string> orden_mezclado(numero_elementos);
    vector<string> orden_original(numero_elementos);
    
    for (int i = 0; i < numero_elementos; ++i) {
        getline(cin, orden_mezclado[i]);
    }
    
    getline(cin, linea);
    
    for (int i = 0; i < numero_elementos; ++i) {
        getline(cin, orden_original[i]);
    }
    
    unordered_map<string, int> elemento_a_posicion;
    elemento_a_posicion.reserve(numero_elementos * 2);
    
    for (int i = 0; i < numero_elementos; ++i) {
        elemento_a_posicion[orden_original[i]] = i;
    }
    
    vector<int> permutacion(numero_elementos);
    for (int i = 0; i < numero_elementos; ++i) {
        permutacion[i] = elemento_a_posicion[orden_mezclado[i]];
    }
    cout << encontrarOperacionesMinimas(permutacion) << "\n";
    
    return 0;
}