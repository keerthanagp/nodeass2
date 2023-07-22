const express= require('express');
const fs= require('fs')

const app = express()

const hallbooking= [{
    id : '1',
    numberOfSeats : "100",
    amendies : 'ac',
    price : "5000",
    ifBooked : 'true',
    customerName : 'surya',
    date : '2023-01-02',
    startTime : '7.00am',
    endTime : '9.00pm',
    roomId : "200",
    roomName : 'luxury'
    }
]

app.get('/hall/all/spec1', (req,res)=>{
    const selecteddataseats = hallbooking.map((val)=>val.numberOfSeats)
    const selectedamendies = hallbooking.map((val)=>val.amendies)
    const selecteddataprice = hallbooking.map((val)=>val.price)
    console.log()
    res.status(200).json({numberOfSeats : selecteddataseats, amendies : selectedamendies, priceForHour : selecteddataprice})
})

//2.Book a room with customername, date, starttime, endTime, roomId?

app.get("/hall/all/spec2", (req,res)=>{
const selectedcustomer = hallbooking.map((val)=>val.customerName)
const selecteddate = hallbooking.map((val)=>val.date)
const selectedstarttime = hallbooking.map((val)=>val.startTime)
const selectedendtime = hallbooking.map((val)=>val.endTime)
const selectedroomid = hallbooking.map((val)=>val.roomId)
res.status(200).json({customerName : selectedcustomer, date : selecteddate, startTime : selectedstarttime, endtime : selectedendtime, roomid: selectedroomid})
})

// 3. list all rooms with booked data with room name, booked status, customername, date, starttime, endtime?
app.get('/hall/all/spec3',(req,res)=>{
    const selectedroomname = hallbooking.map((val)=>val.roomName)
    const selectedbookedstatus = hallbooking.map((val)=>val.ifBooked)
    const selectedcustomer = hallbooking.map((val)=>val.customerName)
    const selecteddate = hallbooking.map((val)=>val.date)
    const selectedstarttime = hallbooking.map((val)=>val.startTime)
    const selectedendtime = hallbooking.map((val)=>val.endTime)
    res.status(200).json({roomname : selectedroomname, bookedstatus : selectedbookedstatus, customerName : selectedcustomer, date : selecteddate, startTime : selectedstarttime, endTime : selectedendtime})
})

//4. list all customer with booked data customername, roomname, date, starttime, endtime
app.get('/hall/all/spec4', (req,res)=>{
    const selectedcustomer=hallbooking.map((val)=>val.customerName)
    const selectedroomname = hallbooking.map((val)=>val.roomName)
    const selecteddate = hallbooking.map((val)=>val.date)
    const selectedstarttime = hallbooking.map((val)=>val.startTime)
    const selectedendtime = hallbooking.map((val)=>val.endTime)
    res.status(200).json({customerName : selectedcustomer, roomName : selectedroomname, date : selecteddate, startTime : selectedstarttime, endTime : selectedendtime})
})

//5.list customer has booked with the detalils customername, roomname, date, starttime, endtimer, booking id, bookingdate, bookingstatus?

app.get('/hall/all/spec5',(req,res)=>{
    const selectedcustomer=hallbooking.map((val)=>val.customerName)
    const selectedroomname = hallbooking.map((val)=>val.roomName)
    const selecteddate = hallbooking.map((val)=>val.date)
    const selectedstarttime = hallbooking.map((val)=>val.startTime)
    const selectedendtime = hallbooking.map((val)=>val.endTime)
    const selectedid = hallbooking.map((val)=>val.id)
    const selectedbookedstatus = hallbooking.map((val)=>val.ifBooked)
    res.status(200).json({customerName : selectedcustomer, roomName : selectedroomname, date : selecteddate, startTime : selectedstarttime, endTime : selectedendtime, bookingid : selectedid, bookingStatus : selectedbookedstatus})
   
})

app.listen(9000,()=>console.log("server started"))