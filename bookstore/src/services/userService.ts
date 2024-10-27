// Serviço: userService.ts
import { isValidEmail, isValidName } from '../helpers/validationHelper';
import { UserRepository } from '../repositories/userRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, passwordHash: string) {
    if (!isValidName(name)) {
      throw new Error('Nome inválido');
    }
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    return await this.userRepository.addUser(name.charAt(0).toUpperCase() + name.slice(1), email, passwordHash);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}
