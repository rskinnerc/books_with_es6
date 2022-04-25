export class Book {
  id = new Date().getTime();

  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    if (id !== null) {
      this.id = id;
    }
  }

  createNode() {
    const node = document.createElement('li');
    node.innerHTML = `
        <span><span class="book-title">${this.title}</span> by ${this.author}</span> <button onclick="display.removeBook(${this.id})">Remove</button>
    `;

    return node;
  }
}