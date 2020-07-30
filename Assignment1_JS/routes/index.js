/*
 File Name: index.js
 Author's name:  Ramandeep Kaur
 Website name: Jewellery System
 File description: In this file, i have rander all the views in the pug template pages.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Jewellery System' });
});

/* GET home page. */
router.get('/jewellery_types', function (req, res) {
    res.render('jewellery_types', { title: 'Jewellery Types' });
});

/* GET home page. */
router.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});

/* GET home page. */
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

/* GET home page. */
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'Aboutme' });
});

module.exports = router;
