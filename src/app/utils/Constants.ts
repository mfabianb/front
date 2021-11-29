import { HttpHeaders } from '@angular/common/http';

export const PRINCIPAL_HEADER = new HttpHeaders();
PRINCIPAL_HEADER.append('Content-Type', 'application/json');
PRINCIPAL_HEADER.append('Access-Control-Allow-Origin', '*');
PRINCIPAL_HEADER.append('Access-Control-Allow-Methods', 'OPTIONS,GET, POST, PUT, PATCH, DELETE');
PRINCIPAL_HEADER.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
PRINCIPAL_HEADER.append('Access-Control-Allow-Credentials', 'true');
/*.set('Access-Control-Allow-Origin', '*')
.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
.set('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
.set('Content-Type', 'application/json');*/

export const SYMBOLS = {
    SPACE: ' ', 
    SLASH: '/', 
    PLUS: '+'
}

export const NUMERICAL_VALUES = {
    TIME_OUT: 500
}