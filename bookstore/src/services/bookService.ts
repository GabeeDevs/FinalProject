import { isValidPrice, isValidTitle } from "../helpers/validationHelper";
import { BookRepository } from "../repositories/bookRepository";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(title: string, author: string, price: number) {
    if (!isValidTitle(title)) {
        throw new Error("Título inválido. Deve ter mais de 3 caracteres.");
    }
    if (!isValidPrice(price)) {
      throw new Error("Insira um preço valido");
    }
    return await this.bookRepository.addBook(title, author, price);
  }

  async listBooks() {
    return await this.bookRepository.getAllBooks();
  }
}