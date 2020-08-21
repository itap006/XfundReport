const express = require('express');
const axios = require('axios');
const { formatCurrency, formatDate } = require('../utils.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.post(
      'https://xfundcoreapi.azurewebsites.net/api/v1/getvaluationsummary',
      {
        schemeIds: [2, 12, 10],
        thisday: new Date('2020-06-30'),
      }
    );
    let state = response.data;

    if (!state) return res.statusCode(200).send('<div>no data</div>');

    let data = () => {
      const portfolio = [];
      const indexes = [];

      state.forEach((e, i) => {
        if (!portfolio.includes(e.portfolio)) {
          portfolio.push(e.portfolio);
          indexes.push(i);
        }
      });

      const z = indexes.map((e, i) => {
        return state.slice(e, indexes[i + 1]);
      });

      return z;
    };
    res.render('pages/index', { data: data(), formatCurrency, formatDate });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
