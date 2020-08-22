const express = require('express');
const fs = require('fs');
const path = require('path');
const carbone = require('carbone-sdk')(
  'test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzMDU3IiwiYXVkIjoiY2FyYm9uZSIsImV4cCI6MjIyODc2NzA5MywiZGF0YSI6eyJpZEFjY291bnQiOjMwNTd9fQ.Aby5_soJaRC8Mv6Dht31_LCJbsFeDjGJUTc0O0s7Sct9oRA1l-jc1NFViYAuzGOUKZUlgFlwoJbpxBu6_RkyvOA3ASnkT_Cf4cV5luxuqjDgNUq_8bjMwt4maODutMeQrNnY7e7ar0TCkBzaCtzU9mGRzq7SyqTgLZ3NdmA84muCDG9f'
);

const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    data: { firstname: 'John', lastname: 'Doe' },
    convertTo: 'pdf',
  };
  const id = '3b4fdb20a1cf17a836d70249cd9b2e9cb673fa1628ec830bfcf507a90e43524b';
  carbone.setOptions({
    isReturningBuffer: false,
  });
  carbone.render(id, data, (err, downloadLink, filename) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(downloadLink);
    }
  });
});

module.exports = router;
