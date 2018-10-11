1. User DB
create table users(
    userid integer,
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
    targetid integer,
    targetname varchar(200),
    targetcountry varchar(100),
    targetcontinents varchar(100),
    targetcity varchar(100)
)
3. Travel DB
create table travels(
    travelid integer,
    travelname varchar(200),
    status varchar(5),
    startdate timestamp,
    enddate timestamp
)
4. Travel Members
create table travelmembers {
    travelmemberid integer,
    travelid varchar(20),
    memberage int,
    membergender varchar(1),
    membername varchar(200)
}
5. User Travel Connection
create table usertravel(
    userid integer,
    travelid integer,
    orderindex integer
)
6. Travel Target Connection
create table traveltarget(
    travelid integer,
    targetid integer,
    orderindex integer
)
7. Travel member Connection
create table travelmember(
    travelid integer,
    memberid integer,
    orderindex integer
)
8. tags
create table tags(
    tagid integer,
    tagname varchar(100),
    tagtype integer
)
9. Travel Target Connection
create table traveltarget(
    travelid integer,
    tagid integer,
    orderindex integer,
    priority integer
)
10. Travel days
create table travelday(
    traveldayid integer,
    travelday timestamp,
    title varchar(120),
    summary varchar(1000)
)
11. travel day item
create table traveldayitem(
    traveldayitemid integer,
    itemtitle varchar(120),
    starttime timestamp,
    endtime timestamp,
    categoryid integer
)
12. travel day item Connection
create table travledayanditem(
    traveldayid integer,
    traveldayitemid integer,
    orderindex integer
)
13. travel day item category
create table category(
    categoryid integer,
    categorytypename varchar(30)
)
14. travel day item detail traffic
create table itemtraffic(
    itemtrafficid integer,
    trafficcountry varchar(100),
    trafficcity varchar(100),
    trafficname varchar(100),
    traffictype integer,
    trafficdirection varchar(100),
    getonstation varchar(100),
    getoffstation varchar(100),
    plannedstartdate timestamp,
    plannedlength integer,
    traffictimetable varchar(2000),
    detailinfo varchar(2000),
    mapimageuri varchar(300),
    mapinfo varchar(100)
)

15. attractions
create table itemattraction(
    itemattractionid integer,
    attractioncountry varchar(100),
    attractioncity varchar(100),
    attractiondistrict varchar(100),
    attractionname varchar(300),
    attractiontype integer,
    attractionaddress varchar(300),
    plannedstartdate timestamp,
    plannedlength integer,
    detailinfo varchar(2000),
    mapimageuri varchar(300),
    mapinfo varchar(100)
)

16. hotel
create table itemhotel(
    itemhotelid integer,
    hotelcountry varchar(100),
    hotelcity varchar(100),
    hoteldistrict varchar(100),
    hotelname varchar(300),
    hoteltype integer,
    hoteladdress varchar(300),
    plannedstartdate timestamp,
    plannedlength integer,
    detailinfo varchar(2000),
    mapimageuri varchar(300),
    mapinfo varchar(100),
    orderinfo varch(1000)
)
17. hotel
create table itemfood(
    itemfoodid integer,
    foodcountry varchar(100),
    foodcity varchar(100),
    fooddistrict varchar(100),
    foodname varchar(300),
    foodtype integer,
    foodaddress varchar(300),
    plannedstartdate timestamp,
    plannedlength integer,
    detailinfo varchar(2000),
    mapimageuri varchar(300),
    mapinfo varchar(100),
    orderinfo varch(1000)
)
