--                      function using intercept
/*
create function getDelegateID(@CourseName1 varchar(200), @CourseName2 varchar(200))
	returns @a table(DelegateID varchar(100))
	as
	begin
		insert into @a 
			select DelegateID
			from DelegateAttendance as da
			join CourseRun as cr on da.CourseRunID = cr.CourseRunID
			join Course as c on c.CourseID = cr.CourseID
			where CourseName = @CourseName1
			intersect
			select DelegateID
			from DelegateAttendance as da
			join CourseRun as cr on da.CourseRunID = cr.CourseRunID
			join Course as c on c.CourseID = cr.CourseID
			where CourseName = @CourseName2
		return
	end
go
*/



--                      create view
/*
create view [dbo.CourseList] as 
select c.CourseName, c.CourseID, v.VendorName
from Course as c
inner join Vendor as v on c.VendorID = v.VendorID
go
*/



--						inline view
/*
select company.name, salesperson.fname+' '+salesperson.lname as 'Employee Name', sale.order_value
from sale
inner join company 
	on sale.company_no = company.company_no
inner join salesperson 
	on sale.emp_no = salesperson.emp_no
inner join (select company_no, max(order_value) as MAXVALUE from sale group by company_no) as wotsit
	on sale.order_value = wotsit.MAXVALUE  and  sale.company_no = wotsit.company_no
order by company.company_no
*/



--                      CTE
/*
with cte_BourneCourses as (
    select CourseRunID, StartDate
    from Trainer as t
    join CourseRun as cr on t.TrainerID = cr.TrainerID
    where t.TrainerName like 'Jason Bourne'
)

select d.DelegateID, d.DelegateName, d.CompanyName, bc.StartDate
from Delegate as d
join DelegateAttendance as da on d.DelegateID = da.DelegateID
join cte_BourneCourses as bc on da.CourseRunID = bc.CourseRunID
*/



--                    local and global tables
/*
select *
into #MicrosoftLocal 
from Course
where VendorID = 2

select *
into ##MicrosoftGlobal 
from Course
where VendorID = 2

select * from #MicrosoftLocal
select * from ##MicrosoftGlobal
*/



--                   windowing
/* 
select ProductID, TransferDate, TransferAmount,
	sum(transferamount) OVER (partition by productid order by transferdate) as RunningStock
from BookTransfers
*/



--                  OVER  and  PARTITION BY
/*
SELECT *
,sum(TransactionValue) OVER () AS TotalAll
,sum(TransactionValue) OVER (PARTITION BY PersonRef) AS TotalPerson
,sum(TransactionValue) OVER (PARTITION BY PersonRef ORDER BY PayDT) AS RunningTotalPerson
,avg(TransactionValue) OVER (PARTITION BY PersonRef ORDER BY PayDT ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS AvgLast 3Person 
FROM account_transactions
ORDER BY PersonRef, PayDT
GO
*/



--                  POSITIONAL LEADERBOARD
/*
select * 
	, rank() over (order by NumberDelegates desc) as Rank
	, dense_rank() over (order by numberdelegates desc) as DenseRank
	, row_number() over (order by numberdelegates desc) as RowNumber
	, ntile(3) over (order by numberdelegates desc) as NTile
from VendorCourseDelegateCount
*/



--                  pivot & unpivot
/*
select *
    from (select category, quarter, sales from salessource) as A pivot
    (sum(sales) for quarter inn ([q1],[q2],[q3])) as B
*/
/*
select *
    from (select * from importedsource) as A
    unpivot 
*/



--                  rollup/cube
/*
select category, quarter, sum(sales) as totalsales
from salessource
group by category, quarter  
    with rollup
*/



--                  grouping sets & grouping_id
/*
select category, grouping(category) as gc, quarter, grouping(quarter) as gq, sum(sales) as sales
from salessource
group by category, quarter
    with cube
*/
/*
select vendorname, coursename, startdate, sum(numberdelegates) as totaldelegates, grouping_id(vendorname, coursename, startdate) as groupingtype
from VendorCourseDateDelegateCount
group by grouping sets (
    (vendorname),
    (vendorname, coursename),
    (vendorname, coursename, startdate)
)
*/



--                  add error message
/*
exec sp_addmessage 50200,16,'Customer %d has been deleted by %s'

SELECT * FROM sys.messages

DECLARE @msg VARCHAR(100) = FORMATMESSAGE(50200, 2345, 'Fred Jones')
    -- %d = 2345,  %s = 'Fred Jones'
*/



-- 					transaction
/*
declare @accountno int = 12343422
declare @machine in = 23321
declare @amount money = 50.00

begin try
	begin tran
		insert into dbo.cashpointtrans(acctno,trandt,machineid,tranvalue)
			values (@accountno, getdate(),@machine,@amount)
		update dbo.currentaccount
			set balance = balance - @amount
			where acctno = @accountno
	commit tran
end try
begin catch
	print 'error was caught';
	throw
end catch
*/


--					show all pairs of people from same county
/*
select sp1.county, sp1.fname+' '+sp1.lname as Bod1, sp2.fname+' '+sp2.lname as Bod2
from salesperson as sp1
inner join salesperson as sp2 
	on sp1.county = sp2.county
where sp1.emp_no < sp2.emp_no
*/
