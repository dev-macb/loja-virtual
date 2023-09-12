// Importação de módulos
import * as jwt from 'jsonwebtoken';


interface IDados {
    uid: number;
}


const gerar = (dados: IDados): string | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';
    
    return jwt.sign(
        dados, 
        process.env.APP_SEGREDO_JWT,
        { expiresIn: '8h'}
    );
};


const autenticar = (token: string): IDados | 'TOKEN_INVALIDO' | 'APP_SEGREDO_JWT_NAO_ENCONTRADO' => {
    if(!process.env.APP_SEGREDO_JWT) return 'APP_SEGREDO_JWT_NAO_ENCONTRADO';

    try {
        const decoded = jwt.verify(token, process.env.APP_SEGREDO_JWT);

        if(typeof decoded === 'string') return 'TOKEN_INVALIDO';
        else return decoded as IDados;
    }
    catch (erro) {
        return 'TOKEN_INVALIDO';
    }
};


export const JWTService = { gerar, autenticar };