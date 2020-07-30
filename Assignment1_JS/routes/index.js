/*
 File Name: index.js
 Author's name:  Ramandeep Kaur
 Website name: Personal Portfolio
 File description: In this file, i have rander all the views in the pug template pages.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Personal Protofolio' });
});

/* GET home page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

/* GET home page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* GET home page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

/* GET home page. */
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'Aboutme' });
});

module.exports = router;
