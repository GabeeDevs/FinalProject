import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Criação de novo usuário com senha hashed
  async registerUser(name: string, email: string, password: string) {
    const passwordHash = hashPassword(password); // Gera o hash da senha
    const user = await this.userRepository.addUser(name, email, passwordHash); // Armazena o usuário
    return user;
  }


  // Login de usuário
  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');
  
    console.log('Senha digitada:', password);
    console.log('Hash armazenado:', user.passwordHash);
  
    const isPasswordValid = comparePassword(password, user.passwordHash);
    if (!isPasswordValid) throw new Error('Senha inválida');
  
    createSession(user.id); // Cria a sessão
    return user; 
 }
}
   /* 

       Metodo de comparação de senha, metodo de validação 

    const testPassword = 'senhaTeste';
    const hashedPassword = hashPassword(testPassword);


        console.log('Senha original:', testPassword);
        console.log('Senha hasheada:', hashedPassword);
        console.log('Comparação de senha:', comparePassword(testPassword, hashedPassword)); // Deve retornar `true`



*/
