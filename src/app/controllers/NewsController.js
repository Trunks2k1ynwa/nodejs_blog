class NewsController {
    //[GET]/news
    index(red, res) {
        res.render('news');
    }
    //[GET]/news/:slug
    show(red, res) {
        res.render('search');
    }
}
module.exports = new NewsController();
