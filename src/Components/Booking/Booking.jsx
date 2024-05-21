import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import "./Booking.css";


function Booking({ rooms, onSelect }) {
    const currentDate = format(new Date(), "MMMM d, yyyy");
    const formattedDateTomorrow = format(new Date(currentDate).getTime() + 24 * 60 * 60 * 1000, "MMMM d, yyyy");

    return (
        <div className="container-form">
            <div class="row-2">
                <div className="stayDate" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginleft: "350px", display: 'flex', alignItems: 'center', }}>
                        <div style={{ width: '150px' }}>
                            <p style={{ fontWeight: 'bold' }}>Stay Dates</p>
                            <p style={{ marginTop: '-10px' }}>{currentDate}</p>
                        </div>
                        <p style={{ fontWeight: 'bold' }}> - </p>
                        <div style={{ width: '150px', textAlign: 'right' }}>
                            <p style={{ fontWeight: 'bold' }}>Stay Dates</p>
                            <p style={{ marginTop: '-10px' }}>{formattedDateTomorrow}</p>
                        </div>
                    </div>
                    <div style={{ marginleft: '100px' }}>
                        <button style={{ backgroundColor: '#003366', color: 'white', alignContent: 'center', margin: '80px 200px', padding: '5px 20px 5px 20px', borderRadius: '15px 15px' }}>
                            Update Stay Details
        </button>
                    </div>
                </div>
            </div>

            <div>
            
        </div>
        <div className="room-option">
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>
              {/*{room.roomType}*/}
              </p>
          <p style={{ fontWeight: 'bold', justifyContent: 'center' }}>Available
              {/*{room.available} */}
             rooms</p>
          {/*{room.rooms.map((item, idx) => ( */}

            <div 
            /*key={idx}*/
            className="details" style={{ display: 'flex', width: '80%', marginBottom: '50px' }}> 
              <img style={{ borderRadius: '10%', marginRight: '30px', marginBottom: '60px' }} 
              /*src={item.image} alt={item.name}*/
               />
              <div className="text-detail" style={{width: '70%'}}>
                <div className="title" style={{marginBottom: '50px'}}>
                  <p style={{ fontWeight: 'bold', fontSize: '24px'}}>
                      {/*{item.name}*/}
                      </p>
                </div>
                <div style={{display: 'flex', marginBottom: '50px'}}>
                  <p style={{fontWeight: 'bold', fontSize: '20px', marginRight: '200px'}}>Flexi-rate</p>
                  <div>
                    <p style={{}}>IDR 
                        {/*{item.flexyRate.toLocaleString('id-ID')}*/}
                          /night</p>
                    <p style={{ fontStyle: 'italic', fontSize: '12px'}}>taxes and all fees included</p>
                  </div>
                </div>
                <div style={{display: 'flex',}}>
                  <button style={{backgroundColor: 'transparent'}}>
                    <p style={{fontSize: '14px', color: 'blue', marginRight: '30px'}}>Room Detail</p>
                  </button>
                  <button onClick={() => {window.location.href = '/bookingform'}} style={{backgroundColor: 'transparent'}}>

                    <p style={{fontSize: '14px', color: 'blue'}}>Select Room</p>
                  </button>
                </div>
              </div>
            </div>
        </div>
        </div>

        
      );
}

export default Booking;