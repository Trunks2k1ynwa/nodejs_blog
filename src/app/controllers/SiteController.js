class SiteController {
    //[GET]/
    index(red, res) {
        res.render('home');
    }
    //[GET]/search
    show(red, res) {
        res.send('NEW Detail');
    }
}
module.exports = new SiteController();
