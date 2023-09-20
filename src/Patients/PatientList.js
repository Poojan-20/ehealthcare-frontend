import React from 'react'
import { Link } from 'react-router-dom';
const PatientList = () => {
   return (
      <>
         <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">

            <main className="body-content">



               <div className="ms-content-wrapper">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="ms-panel">
                           <div className="ms-panel-header ms-panel-custome">
                              <h6>Patient List</h6>
                           </div>
                           <div id="data-table-2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                              
                              <div className="row">
                                 <div className="col-sm-12">
                                    <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid"
                                       aria-describedby="data-table-2_info" style={{ "width": "1159px" }}>
                                       <thead>
                                          <tr role="row">
                                             <th className="sorting_asc" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                                style={{ "width": "83px" }}>Name</th>
                                             <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                aria-label="Address: activate to sort column ascending" style={{ "width": "263px" }}>Address</th>
                                             <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                aria-label="Age: activate to sort column ascending" style={{ "width": "39px" }}>Age</th>
                                             <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                aria-label="Email: activate to sort column ascending" style={{ "width": "230px" }}>Email</th>
                                             <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                aria-label="Action: activate to sort column ascending" style={{ "width": "60px" }}>Action</th>
                                          </tr>
                                       </thead>
                                       <tbody>


                                          <tr role="row" className="even">
                                             <td className="sorting_1"><img src={"../assets/img/dashboard/patient-3.jpg"} /> Jenette </td>
                                             <td>Birch Street, El Paso</td>
                                             <td>Autoimmune</td>
                                             <td> 32</td>
                                             <td>(380) 141 1885</td>
                                             <td>jenettecaldwell@example.com</td>
                                             <td><Link to="#"><i className="fas fa-pencil-alt ms-text-primary"></i></Link> <Link to="a"><i
                                                className="far fa-trash-alt ms-text-danger"></i></Link></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 10 of 36
                                       entries</div>
                                 </div>
                                 <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate">
                                       <ul className="pagination has-gap">
                                          <li className="paginate_button page-item previous disabled" id="data-table-2_previous"><Link to="#"
                                             aria-controls="data-table-2" data-dt-idx="0" tabIndex="0" className="page-link">Previous</Link></li>
                                          <li className="paginate_button page-item active"><Link to="#" aria-controls="data-table-2" data-dt-idx="1"
                                             tabIndex="0" className="page-link">1</Link></li>
                                          <li className="paginate_button page-item "><Link to="#" aria-controls="data-table-2" data-dt-idx="2"
                                             tabIndex="0" className="page-link">2</Link></li>
                                          <li className="paginate_button page-item "><Link to="#" aria-controls="data-table-2" data-dt-idx="3"
                                             tabIndex="0" className="page-link">3</Link></li>
                                          <li className="paginate_button page-item "><Link to="#" aria-controls="data-table-2" data-dt-idx="4"
                                             tabIndex="0" className="page-link">4</Link></li>
                                          <li className="paginate_button page-item next" id="data-table-2_next"><Link to="#"
                                             aria-controls="data-table-2" data-dt-idx="5" tabIndex="0" className="page-link">Next</Link></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="ms-panel-body">
                              <div className="table-responsive">
                                 <table id="data-table-2" className="table table-striped thead-primary w-100"></table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>    

            <script src="../assets/js/jquery-3.3.1.min.js"></script>
            <script src="../assets/js/popper.min.js"></script>
            <script src="../assets/js/bootstrap.min.js"></script>
            <script src="../assets/js/perfect-scrollbar.js"> </script>
            <script src="../assets/js/jquery-ui.min.js"> </script>

            <script src="../assets/js/slick.min.js"> </script>
            <script src="../assets/js/moment.js"> </script>
            <script src="../assets/js/jquery.webticker.min.js"> </script>
            <script src="../assets/js/Chart.bundle.min.js"> </script>
            <script src="../assets/js/Chart.Financial.js"> </script>

            <script src="../assets/js/datatables.min.js"> </script>
            <script src="../assets/js/data-tables.js"> </script>

            <script src="../assets/js/framework.js"></script>

            <script src="../assets/js/settings.js"></script>
         </body>
      </>
   )
}

export default PatientList