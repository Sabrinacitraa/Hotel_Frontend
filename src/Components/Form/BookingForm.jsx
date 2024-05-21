import React from "react";
import "./form.css";
// import { useRoom } from '../App';

function Booking() {
//   const { selectedRoom } = useRoom();

//   const taxesAndFees = 0.1 * selectedRoom.flexyRate;
//   const serviceFee = 0.05 * selectedRoom.flexyRate;
//   const costForStay = selectedRoom.flexyRate + taxesAndFees + serviceFee;
  
  return (
      <>
      <div class="text-header">
      <h1>Let's finish booking</h1>
      </div>
    <div className="container-form">
      
      <div style={{display: 'flex',  marginTop: '40px', marginBottom: '80px', marginLeft: '150px', marginRight: '150px'}}>
        <div style={{width: '70%', padding: '30px', border: '1px solid rgba(0, 0, 0, 0.15)', borderRadius: '15px'}}>
          <div style={{marginBottom: '20px'}}>
            <u>Your Information</u>
          </div>
          <form action="">
          <label for="title">Title</label>
          <label for="fullname" style={{marginLeft: '170px'}}>Full Name</label>
          <div>
            <select id="title" style={{width: '20%', padding: '10px', marginTop: '6px', marginRight: '10px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px'}}>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
            </select>
            <input style={{width: '70%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px'}} type="text" id="fullname" name="fullname" placeholder="Enter your full name"></input>
          </div>
          <label for="countryCode">Country Code</label>
          <label for="mobilenumber" style={{marginLeft: '90px'}}>Mobile Number</label>
          <div>
            <select style={{width: '20%', padding: '10px', marginTop: '6px', marginBottom: '16px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '4px'}} id="countryCode">
                <option value="+62">+62</option>
                <option value="+1">+1</option>
            </select>
            <input style={{width: '70%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px'}} type="text" id="mobilenumber" name="mobilenumber" placeholder="Enter your mobile number"></input>
          </div>
            <label for="nationality">Nationality</label>
            <label for="email" style={{marginLeft: '115px'}}>Email</label>
          <div>
            <select style={{width: '20%', padding: '10px', marginTop: '6px', marginBottom: '16px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '4px'}} id="nationality">
                <option value="indonesia">Indonesia</option>
            </select>
              <input style={{width: '70%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px'}} type="email" id="email" name="email" placeholder="Enter your email"></input>
          </div>
          <div>
            <label for="requests">Got any requests?</label>
            <p>Feel free to ask in English or in the local lingo of the hotel.</p>
          </div>
          <div>
            <textarea style={{width: '91%', padding: '10px', height: '100px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px'}} id="requests" name="requests" ></textarea>
          </div>
          <div style={{textAlign: 'right'}}>
            <button style={{borderRadius: '15px 15px 15px 15px', padding: '12px'}} type="submit">Continue to Payment</button>
          </div>
          </form>
        </div>
        <div src= "" style={{ marginLeft: '20px', border: '1px solid rgba(0, 0, 0, 0.15)', borderRadius: '30px', width: '40%'}}>
          <img style={{ borderRadius: '10%', marginRight: '30px', marginBottom: '60px', width: '100%' }} 
          /*src={selectedRoom.image} alt={selectedRoom.name} */
          />
          <p style={{textAlign: 'center', marginTop: '-25px'}}>
            {/*{selectedRoom.name}*/}
            <hr style={{width: '50%'}}/>
            Guest Room
          </p>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>
            Flexi-Rate
          </p>
          <p>
            IDR 
            {/*{selectedRoom.flexyRate.toLocaleString('id-ID')}*/}
             /night
          </p>
          </div>
          <hr style={{width: '75%'}}/>
          <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px', fontSize: '13px'}}>
            <p style={{marginLeft: '20px'}}>Cost in cash</p>
            <p style={{marginLeft: '20px'}}>IDR 
                {/*{selectedRoom.costInCash.toLocaleString('id-ID')}*/}
                </p>
          </div>
          < br />
          <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px', marginTop: '-20px', fontSize: '13px'}}>
            <p style={{marginLeft: '20px'}}>Expected govern taxes and fees</p>
            <p style={{marginLeft: '20px'}}>IDR 
                {/*{taxesAndFees.toLocaleString('id-ID')}*/}
                </p>
          </div>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px', marginTop: '-20px', fontSize: '13px'}}>
            <p style={{marginLeft: '20px'}}>Service fee</p>
            <p style={{marginLeft: '20px'}}>IDR
            {/*{serviceFee.toLocaleString('id-ID')}*/}
                </p>
          </div>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '20px', marginTop: '-20px', fontSize: '13px'}}>
            <p style={{fontWeight: 'bold', marginLeft: '20px'}}>Cost for stay</p>
            <p style={{marginLeft: '20px'}}>IDR 
                {/*{costForStay.toLocaleString('id-ID')}*/}
                </p>
          </div>
          <br />
          <hr style={{width: '75%', marginBottom: '20px', marginTop: '0px'}}/>

          <p style={{marginLeft: '20px', fontSize: '12px', fontWeight: 'bold'}}>
            Extra cost
          </p>

            <p class= "list" >Off-site parking 100000.00 IDR per hour</p>
            <p class= "list">Free on-site parking</p>
            <p class= "list" >Any changes to taxes or fees post-booking will impact the total room price</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Booking;
