import React, { Component } from 'react'
import '../Components/Style.css'

export class TandC extends Component {
  render() {
    return (
      <div class='main'>
        <div class='main-container'>
          <div class='main-content'>
            <h1>Terms & Conditions</h1>
            <p>1. FLIGHT TICKETS </p>
            <p>
              TERMS OF THE AIRLINES
              <li>
                The airline tickets available through the Website are subject to
                the terms & conditions of the concerned airline, including but
                not limited to cancellation and refund policies.
              </li>
              <li>
                Tripr merely acts as a facilitator to enable the User to book a
                flight ticket. The contract of service for utilization of the
                flight is always between the User and the concerned airline.
              </li>
              <li>
                Airlines retain the right to reschedule flight times, route,
                change or cancel flights or itineraries independent of and
                without prior intimation to Tripr. As a facilitator Tripr has no
                control or authority over the logistics of the airlines and
                therefore is not liable for any loss, direct or incidental, that
                a User may incur due to such change or cancellation of a flight.
              </li>
              <li>
                Different tickets on the same airline may carry different
                restrictions or include different services and price.
              </li>
              <li>
                The baggage allowance on given fare is as per the terms decided
                by the airline, and Tripr has no role to play in the same. Some
                of the fares shown in the booking flow are “hand baggage fares”
                which do not entitle the User for free check in baggage and
                therefore the User will be required to pay separately for check
                in baggage. The prices for adding check-in baggage to a booking
                may vary from airline to airline. The User is advised to contact
                the airlines for detailed costs.
              </li>
              <br />
              TRAVEL DOCUMENTS
              <br />
              <li>
                It shall be the sole responsibility of the User to ensure they
                are in possession of valid travel documents such as identity
                proof, passport, visa (including transit visa) etc. to undertake
                the travel. User agrees that in case of inability to travel for
                not carrying valid travel documents, Tripr shall in no way be
                held liable.
              </li>
              <li>
                User understands that the information (if any) provided by Tripr
                regarding the travel documents is only advisory in nature and
                can’t be considered conclusive. The User shall ensure checking
                the requirements of travel with the respective airlines of the
                respective jurisdictions the User may transit through or choose
                to visit.
              </li>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default TandC
