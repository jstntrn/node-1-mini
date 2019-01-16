let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        let {title, author} = req.body;
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book);
        id++;
        res.status(200).send(books)
    },
    update: (req, res) => {
        const {id} = req.params;
        const {body} = req;
        books = books.map((book) => {
            if(book.id === +id) {
                book.author = body.author,
                book.title = body.title
            }
            return book;
        });
        res.status(200).send(books);
    },
    delete: (req, res) => {
        books = books.filter((book) => book.id !== +req.params.id);
        res.status(200).send(books);
    }
};
