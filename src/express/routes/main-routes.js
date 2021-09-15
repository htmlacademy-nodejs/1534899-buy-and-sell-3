'use strict';

const {Router} = require(`express`);

const mainRoutes = new Router();

mainRoutes.get(`/register`, (req, res) => {
  res.render(`signup`);
});

mainRoutes.get(`/login`, (req, res) => {
  res.render(`login`);
});

mainRoutes.get(`/category`, (req, res) => {
  res.render(`category`);
});

mainRoutes.get(`/comments`, (req, res) => {
  res.render(`comments`);
});

mainRoutes.get(`/main`, (req, res) => {
  res.render(`main`);
});

mainRoutes.get(`/my-tickets`, (req, res) => {
  res.render(`my-tickets`);
});

mainRoutes.get(`/ticket`, (req, res) => {
  res.render(`ticket`);
});

mainRoutes.get(`/search`, (req, res) => {
  res.render(`search-result`);
});

mainRoutes.get(`/ticket-edit`, (req, res) => {
  res.render(`ticket-edit`);
});

module.exports = mainRoutes;
