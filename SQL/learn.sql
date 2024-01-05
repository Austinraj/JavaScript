

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

-- not between
select School_name,safe from v_sum_school where safe  not between 82 and 84;




--  ">" greater than
select School_name,safe from v_sum_school where safe > 84;


select School_name,safe from v_sum_school where safe > 84 order by school_name asc;


select School_name,safe from v_sum_school where safe < 84 order by safe desc;

-- "!=" and "<>" same 
select School_name,safe from v_sum_school where safe != 84 order by safe desc;

-- tables total view pannalam
select * from user_tables ;

-- Rename
alter table STUDENT_INFORMATION rename to student_info;

-- describe table
desc students;

alter table student_info drop column stud_id;


-- DDL => Data Definition Language.
-- create, alter -> add , modify,drop rename, Truncate, drop ,rename

-- DML => data Manuplating language 
-- insert , update, delete , merage

-- insert multiple values add
insert all
        into student_info values(2),
        into student_info values(1000),
        select * from dual;


        






