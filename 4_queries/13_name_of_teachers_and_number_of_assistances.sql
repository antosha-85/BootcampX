SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests.*) as total_assistance
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id 
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY cohorts.name, teachers.name
ORDER BY teacher;
