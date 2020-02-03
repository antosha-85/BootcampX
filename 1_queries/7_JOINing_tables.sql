SELECT students.name as student_name, cohorts.name as cohort_name, cohorts.start_date as cohort_start_date, students.start_date as students_start_date
FROM students INNER JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.start_date <> students.start_date