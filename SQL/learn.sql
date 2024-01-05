

-- ||  and as use panni la
select SCHOOL_NAME || ' Place:=> ' || NEIGHBORHOOD as Place from v_sum_school ;

-- select all data in database
select * from v_sum_school ;


-- where contsation
select School_name,safe from v_sum_school where safe = 82 ;

-- two and more number contation
select School_name,safe from v_sum_school where safe in (84,82) ;


-- not that number data show pannum
select School_name,safe from v_sum_school where safe not in (84,82) ;

select BOROUGH from v_sum_school where BOROUGH like ('B%') ;

select BOROUGH from v_sum_school where BOROUGH like ('_A%') ;

select BOROUGH from v_sum_school where BOROUGH like ('%A') ;

-- B illa data display pannum
select BOROUGH from v_sum_school where BOROUGH not like upper ('b%') ;

-- between use panna "and" must
select School_name,safe from v_sum_school where safe between 82 and 84;






















