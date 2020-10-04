def truncates
  connection = PG.connect(dbname: 'bowling_test')
  connection.exec('TRUNCATE TABLE frames')
end
