const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const args = process.argv.slice(2);

pool.query(`
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort 
    FROM teachers 
    JOIN assistance_requests ON teachers.id = teacher_id
    JOIN students ON student_id = students.id 
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name = '${args[0] || 'JUL02'}'
    ORDER BY teacher;
`)
.then(res => {
    console.log(`connected`);
  res.rows.forEach(user => {
    console.log(`${user.cohort}:  ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));






