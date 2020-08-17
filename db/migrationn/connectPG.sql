require 'pg'
 => true
--  connnect your db to ruby
points = PG.connect(dbname: 'bowling_scores')
 => #<PG::Connection:0x00007f8699848dd0> 
--  set a variable for the table name
result = connection.exec('SELECT * FROM frames')
  => #<PG::Result:0x00007f86992168b8 status=PGRES_TUPLES_OK ntuples=0 nfields=11 cmd_tuples=0> 
2.6.5 :005 > result.each { |frame| p frames }
{"id"=>"1", "row_one"=>1}
{"id"=>"2", "row2"=>2}

 => #<PG::Result:0x007fc9c7830cc8 status=PGRES_TUPLES_OK ntuples=3 nfields=2 cmd_tuples=3>
