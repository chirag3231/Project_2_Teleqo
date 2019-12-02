const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dbConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college_rajat'
});


// We are not making any db.connection() or db.end(). Since, MySQL package automatically manages it. 
const app = express();

//Support POST parsing
app.use(cors());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({   // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.send('This is a testing api', 200);
});

// Company routes 
app.get('/api/v1/company/:id(\\d+)/', function (req, res) {
  let companyId = req.params.id;
  console.log(companyId);
  dbConnect.query('SELECT * FROM companies WHERE id = ? LIMIT 1', [companyId], function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  })
});

app.get('/api/v1/company/all', function (req, res) {
  dbConnect.query('SELECT * FROM companies', function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  })
});

app.post('/api/v1/company', function (req, res) {
  let name = req.body.name;

  if (name === '') {
    return res.json({error: 'Blank company names are not allowed'});
  }

  dbConnect.query('INSERT INTO companies SET ?', {name: name}, function (err, results, fields) {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.json({error: 'Duplicate company names not allowed.'});
      } else {
        throw err;
      }
    }
    res.json({status: results.insertId});
  })
});

// Plan
app.get('/api/v1/plan/:id(\\d+)/', function (req, res) {
  let companyId = req.params.id;
  console.log(companyId);
  dbConnect.query('SELECT * FROM plans WHERE id = ? LIMIT 1', [companyId], function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  })
});
app.get('/api/v1/plan/all', function (req, res) {
  dbConnect.query('SELECT * FROM plans', function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  })
});

app.post('/api/v1/plan', function (req, res) {
  let name = req.body.name,
    price = req.body.price,
    companyId = req.body.company_id;

  dbConnect.query('INSERT INTO plans SET ?', {name: name, price: price, company_id: companyId}, function (err, result) {
    if (err) throw err;
    res.json({last_id: result.insertId});
  });
});

// Company Associated 
app.get('/api/v1/company/:companyId/plan/:planId(\\d+)/', function (req, res) {
  let planId = req.params.planId,
    companyId = req.params.companyId;

  dbConnect.query('SELECT * FROM plans WHERE id = ? AND company_id = ? LIMIT 1', [planId, companyId], function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  })
});

app.get('/api/v1/plans/company/:companyId/', function (req, res) {
  let companyId = req.params.companyId;
  dbConnect.query('SELECT * FROM plans WHERE company_id = ?', [companyId], function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  })
});

// Subscribers 
app.get('/api/v1/subscribers', function (req, res) {
  let filter = req.query.type,
    query = '';

  switch (filter) {
    case 'count':
      query = 'SELECT company.name, COUNT( subscribers.id ) as subscribers FROM companies as company INNER JOIN subscribers ON company.id = subscribers.company_id ORDER BY subscribers.created_at DESC';
      break;
    case 'year':
      query = 'SELECT company.name, YEAR(subscribers.created_at) as year, COUNT( subscribers.id ) as subscribers FROM companies as company INNER JOIN subscribers ON company.id = subscribers.company_id GROUP BY year,company_id ORDER BY year DESC';
      break;
    default:
      query = 'SELECT * FROM subscribers';
  }
  dbConnect.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});


app.post('/api/v1/subscriber', function (req, res) {
  let name = req.body.name,
    email = req.body.email,
    plan_id = req.body.plan_id ? req.body.plan_id : null,
    companyId = req.body.company_id,
    year = req.body.year;

  let date = new Date;
  date.setFullYear(year);

  dbConnect.query('INSERT INTO subscribers SET ?', {
    name: name,
    email: email,
    company_id: companyId,
    plan_id: plan_id,
    created_at: date
  }, function (err, result) {
    if (err) throw err;
    res.json({last_id: result.insertId});
  });
});

app.get('/api/v1/subscriber/:subscriberId(\\d+)/', function (req, res) {
  let subscriberId = req.params.subscriberId;
  dbConnect.query('SELECT * FROM subscribers WHERE id = ? LIMIT 1', [subscriberId], function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/api/v1/company/:companyId/subscribers', function (req, res) {
  let companyId = req.params.companyId;
  dbConnect.query('SELECT * FROM subscribers WHERE company_id = ? ', [companyId], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/api/v1/plan/:planId/subscribers', function (req, res) {
  let planId = req.params.planId;
  dbConnect.query('SELECT * FROM subscribers WHERE plan_id = ? ', [planId], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('*', function (req, res) {
  res.send('Lost route ???', 404);
});

const server = app.listen(8000, function () {
  let address = server.address().address,
    port = server.address().port;

  console.log("Server is running at http://%s:%s", address, port)
});