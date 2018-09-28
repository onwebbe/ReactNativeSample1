1. User DB
create table users(
    userid varchar(100),
    username varchar(300),
    pwd varchar(100),
    mobilenum varchar(20),
    emailid varchar(100),
    gender varchar(1), -- 1: male   2: female
    wechatid varchar(100),
    fbid varchar(100)
)
2. Travel target
create table traveltarget(
    targetid varchar(20),
    targetname varchar(200),
    targetcountry varchar(100),
    targetcontinents varchar(100),
    targetcity varchar(100)
)
3. Travel DB
create table travels(
    travelid varchar(20),
    travelname varchar(200),
    traveltargetid varchar(20),
    status varchar(5),
    startdate datetime,
    enddate datetime
)

4. Travel Members
create table travelmembers {
    travelmemberid varchar(20),
    travelid varchar(20),
    memberage int,
    membergender varchar(1),
    membername varchar(200)
}