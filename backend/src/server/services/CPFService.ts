
const validar = (cpf: string): boolean => {    
    cpf = cpf.replace(/\D/g, '');  // Remove caracteres não numéricos
    
    if (cpf.length !== 11) return false;  // CPF deve ter 11 dígitos
    if (/^(\d)\1+$/.test(cpf)) return false;  // Verifica se todos os dígitos são iguais

    // Cálculo dos dígitos verificadores
    let soma = 0;
    let resto: number;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
};


const gerar = (formatar: boolean = true): string => {    
    const randomCPFArray = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    const digits = randomCPFArray.map(Number);
    
    const calcularDigito = (arr: number[]): number => {
        const total = arr.reduce((acc, curr, idx) => acc + curr * (10 - idx), 0);
        const resto = (total * 10) % 11;
        return resto >= 10 ? 0 : resto;
    };

    const primeiroDigito = calcularDigito(digits);
    digits.push(primeiroDigito);

    const segundoDigito = calcularDigito(digits);
    digits.push(segundoDigito);

    const cpf = digits.join('');

    if (formatar) return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    else return cpf;
};


export const CPFService = { validar, gerar };
