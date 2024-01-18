// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCheckbox,
//   MDBCol,
//   MDBContainer,
//   MDBInput,
//   MDBRow,
//   MDBRadio,
//   MDBBtn,
//   MDBListGroup,
//   MDBListGroupItem,
// } from "mdb-react-ui-kit";


// export default function Payment() {
//   return (
//     <MDBContainer className="py-5 ">
//       <MDBRow>
//         <MDBCol md="8" className="mb-4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader className="py-3">
//               <h5 className="mb-0">Payment details</h5>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBRow className="mb-4">
//                 <MDBCol>
//                   <MDBInput label="Name" id="form1" type="text" />
//                 </MDBCol>

//                 {/* <MDBCol>
//                   <MDBInput label="Last name" id="form2" type="text" />
//                 </MDBCol> */}
//               </MDBRow>

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Address"
//                 id="form3"
//                 type="text"
//               />
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Email"
//                 id="form4"
//                 type="email"
//               />
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Phone"
//                 id="form5"
//                 type="number"
//               />

//               <hr className="my-4" />

              

              

//               <h5 className="mb-4">Payment</h5>

//               <MDBRadio
//                 name="flexRadioDefault"
//                 id="flexRadioDefault1"
//                 label="Credit card"
//                 checked
//               />

//               <MDBRadio
//                 name="flexRadioDefault"
//                 id="flexRadioDefault2"
//                 label="Debit card"
//                 wrapperClass="mb-4"
//               />

             

//               <MDBRow>
               
//                 <MDBCol>
//                   <MDBInput
//                     label="card number"
//                     id="form7"
//                     type="text"
//                     wrapperClass="mb-4 w-50"
//                   />
//                 </MDBCol>
//               </MDBRow>

//               <MDBRow>
//                 <MDBCol md="3">
//                   <MDBInput
//                     label="Exp"
//                     id="form8"
//                     type="text"
//                     wrapperClass="mb-4 "
//                   />
//                 </MDBCol>
//                 <MDBCol md="3">
//                   <MDBInput
//                     label="CVV"
//                     id="form8"
//                     type="text"
//                     wrapperClass="mb-4  "
//                   />
//                 </MDBCol>
//               </MDBRow>

//               <MDBBtn size="lg" block>
//                 Continue to Pay
//               </MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

      
//       </MDBRow>
//     </MDBContainer>









// // <section class="p-4 p-md-5" style="
// //     background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp);
// //   ">
// //   <div class="row d-flex justify-content-center">
// //     <div class="col-md-10 col-lg-8 col-xl-5">
// //       <div class="card rounded-3">
// //         <div class="card-body p-4">
// //           <div class="text-center mb-4">
// //             <h3>Settings</h3>
// //             <h6>Payment</h6>
// //           </div>
// //           <form action="">
// //             <p class="fw-bold mb-4 pb-2">Saved cards:</p>

// //             <div class="d-flex flex-row align-items-center mb-4 pb-1">
// //               <img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
// //               <div class="flex-fill mx-3">
// //                 <div class="form-outline">
// //                   <input type="text" id="formControlLgXc" class="form-control form-control-lg"
// //                     value="**** **** **** 3193" />
// //                   <label class="form-label" for="formControlLgXc">Card Number</label>
// //                 </div>
// //               </div>
// //               <a href="#!">Remove card</a>
// //             </div>

// //             <div class="d-flex flex-row align-items-center mb-4 pb-1">
// //               <img class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" />
// //               <div class="flex-fill mx-3">
// //                 <div class="form-outline">
// //                   <input type="text" id="formControlLgXs" class="form-control form-control-lg"
// //                     value="**** **** **** 4296" />
// //                   <label class="form-label" for="formControlLgXs">Card Number</label>
// //                 </div>
// //               </div>
// //               <a href="#!">Remove card</a>
// //             </div>

// //             <p class="fw-bold mb-4">Add new card:</p>

// //             <div class="form-outline mb-4">
// //               <input type="text" id="formControlLgXsd" class="form-control form-control-lg"
// //                 value="Anna Doe" />
// //               <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
// //             </div>

// //             <div class="row mb-4">
// //               <div class="col-7">
// //                 <div class="form-outline">
// //                   <input type="text" id="formControlLgXM" class="form-control form-control-lg"
// //                     value="1234 5678 1234 5678" />
// //                   <label class="form-label" for="formControlLgXM">Card Number</label>
// //                 </div>
// //               </div>
// //               <div class="col-3">
// //                 <div class="form-outline">
// //                   <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
// //                     placeholder="MM/YYYY" />
// //                   <label class="form-label" for="formControlLgExpk">Expire</label>
// //                 </div>
// //               </div>
// //               <div class="col-2">
// //                 <div class="form-outline">
// //                   <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
// //                     placeholder="Cvv" />
// //                   <label class="form-label" for="formControlLgcvv">Cvv</label>
// //                 </div>
// //               </div>
// //             </div>

// //             <button class="btn btn-success btn-lg btn-block">Add card</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </section>











//   );
// }


import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 3193"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value="jishmal k"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value="1234 5678 1234 5678"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                Pay
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}