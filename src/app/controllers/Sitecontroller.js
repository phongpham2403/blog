const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = mutipleMongooseToObject(courses)
                res.render('home', { courses })
            })
            .catch(next) // catch nhận 1 func --> trả về 1 error --> truyền func next vào thì next sẽ nhận luôn 1 error
        
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController