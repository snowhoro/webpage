const menulist = require('../models/menulist.model');
const subcategories = require('../models/subcategory.model');
const categories = require('../models/category.model');

module.exports.controller = function (app) {
    app.get('/', function (req, res) {

        const lang = req.acceptsLanguages(['es','en']);

        let partners = [
            { name: "", src: "img/demo-images/partners/01.png"},
            { name: "", src: "img/demo-images/partners/02.png"},
            { name: "", src: "img/demo-images/partners/03.png"},
            { name: "", src: "img/demo-images/partners/04.png"},
            { name: "", src: "img/demo-images/partners/05.png"},
            { name: "", src: "img/demo-images/partners/06.png"},
            { name: "", src: "img/demo-images/partners/07.png"},
            { name: "", src: "img/demo-images/partners/08.png"},
            { name: "", src: "img/demo-images/partners/09.png"}
        ];
        let filters = [
            { name: "Quirófano", datafilter: ".1" },
            { name: "Cardiología" , datafilter: ".cardiologia" },
            { name: "Cuidados Críticos", datafilter: ".cuidados" },
            { name: "Internación", datafilter: ".internacion" },
            { name: "Materno Infantil" , datafilter: ".materno" },
            { name: "Emergencias", datafilter: ".emergencias" },
            { name: "RMN", datafilter: ".rmn" },
            { name: "VNI", datafilter: ".vni" }
        ];
        let products = [
            {
                name:"Estación de Anestesia",
                filter:"1",
                src:"img/demo-images/products/thumb_anestesia1.jpg",
                href:"/product"
            },
            {
                name:"Mesa de Cirugía",
                filter:"1",
                src:"img/demo-images/products/thumb_mesa_cirugia1.jpg",
                href:"/product"
            },
            {
                name:"Lámpara Scialitica",
                filter:"1",
                src:"img/demo-images/products/thumb_scialitica1.jpg",
                href:"/product"
            },
            {
                name:"Quirófano Inteligente",
                filter:"1",
                src:"img/demo-images/portfolio/thumb/04.jpg",
                href:"/product"
            },
            {
                name:"Monitor Básico",
                filter:"cuidados",
                src:"img/demo-images/products/thumb_monitor1.jpg",
                href:"/product"
            },
            {
                name:"Monitor Avanzado",
                filter:"cuidados",
                src:"img/demo-images/products/thumb_monitor2.jpg",
                href:"/product"
            },
            {
                name:"Ventilación",
                filter:"cuidados",
                src:"img/demo-images/portfolio/thumb/07.jpg",
                href:"/product"
            },
            {
                name:"",
                filter:"internacion",
                src:"img/demo-images/portfolio/thumb/08.jpg",
                href:"/product"
            },
            {
                name:"",
                filter:"materno",
                src:"img/demo-images/portfolio/thumb/09.jpg",
                href:"/product"
            },
            {
                name:"",
                filter:"materno",
                src:"img/demo-images/portfolio/thumb/10.jpg",
                href:"/product"
            },
            {
                name:"",
                filter:"emergencias",
                src:"img/demo-images/portfolio/thumb/11.jpg",
                href:"/product"
            },
            {
                name:"",
                filter:"emergencias",
                src:"img/demo-images/portfolio/thumb/12.jpg",
                href:"/product"
            },

        ];


        /*categories.findOne({}).populate('subcategories').exec((err, category) => {
            if (err) throw err;
            console.log(category);
        });*/

        menulist.find({active:true})
            .sort( {order: 'asc'} )
            .exec((err, menus) => {
                if (err) throw err;
                res.render('index', { lang: lang, menus: menus, partners: partners, filters: filters, products: products });
        });
    });
};