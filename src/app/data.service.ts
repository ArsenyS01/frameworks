
interface ItemI {
    ISBN: string;
    book: string;
    author: string;
    publisher: string;
    date: string;
    id: number
  }

export default ItemI
  
export class DataService{
  
  prev: number = 3;
    
     books = [ 
        {   
            ISBN: '111-000-111',
            book: "Captain's daughter",
            author: 'Pushkin A.S.',
            publisher: 'San Diego',
            date: '1982',
            id: 1
          },
        {   
            ISBN: '111-000-222 ',
            book: "Kapitanning qizi",
            author: 'Pushkin A.S.',
            publisher: 'Tashkent',
            date: '1945',
            id: 2
          },
        {   
            ISBN: '111-000-333',
            book: "Капитанская дочка",
            author: 'Пушкин А.С.',
            publisher: 'Москва',
            date: '1835',
            id: 3
          }
    ];
      
    getBooks(): ItemI[] {
        return this.books;
    }
    addItem(ISBN: string, book: string, author: string, publisher: string, date: string){
      this.prev++
      let n = this.prev
          let newB: ItemI = {ISBN, book, author, publisher, date, id: n}
        this.books.push(newB);
    }
}