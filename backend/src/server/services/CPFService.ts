
const invalidos = [
    '000.000.000-00',
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '777.777.777-77',
    '888.888.888-88',
    '999.999.999-99',
];


const validar = (cpf: string) => {
    // Implementação
    if (cpf in invalidos) return false;
    return true;
};


export const CPFService = { validar };