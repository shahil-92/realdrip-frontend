import React from "react";
import PropTypes from "prop-types";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import ErrorText from '../../components/common/errorText';
import LoadingIcon from '../../components/common/spinner';



const View = props => (
  <div className="app-ui">
    <div className="app-layout-canvas">
      <div className="app-layout-container">
        <main className="app-layout-content">
          {/* Page Content  */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 no-padding-x wrp-mngmnt-form">
                <div className="col-sm-6 no-padding-x hidden-xs"  style={{height:'100vh'}}>
                  <img alt="" className="img img-responsive focus-image" src={require('../../assets/Images/ward_sign_in.png')} />
                </div>
                <div className="col-sm-6">

                  <div className="card-block login-top ">
                    <form className="form-horizontal m-t-xs">
                      <p className="login-head">Welcome to RealDrip</p>
                      <h4 className=" form-title">Management Registration</h4>
                      
                      <div className="col-sm-10 text-center">
                        <ErrorText text={props.submissionError} />
                        <LoadingIcon display={props.addingUserStarted} height={50} width={50} />
                        <p/>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">Medical Center Name</label>
                            <input className="form-control height40" type="text" id="name" name="name" placeholder="Name"
                              onChange={props.getInput}
                            />
                            <ErrorText text={props.inputErrors.name} />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <label className="form-label" htmlFor="email">Medical Center Email</label>
                            <input
                              className="form-control height40"
                              type="email" id="email" name="email" placeholder="Email"
                              onChange={props.getInput}
                            />
                            <ErrorText text={props.inputErrors.email} />
                        </div>
                      </div>

                      
                      <label className="col-sm-10 form-label" htmlFor="location">Location</label>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <CountryDropdown
                            className="form-control height40"
                            id="country"
                            name="country"
                            value={props.location.country || ""}
                            onChange={(_, event) => props.getInput(event)}
                          />
                          <ErrorText text={props.inputErrors.country} />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <RegionDropdown
                            className="form-control height40"
                            id="state"
                            name="state"
                            blankOptionLabel="Select Region"
                            country={props.location.country}
                            value={props.location.state || ""}
                            onChange={(_, event) => props.getInput(event)}
                          />
                          <ErrorText text={props.inputErrors.state} />
                        </div>
                      </div>
                      <div className="col-sm-10">
                        <div className="form-group">
                          <input className="form-control height40" type="text" id="Address" name="address" placeholder="Address"
                            onChange={props.getInput}
                          />
                          <ErrorText text={props.inputErrors.address} />
                        </div>
                      </div>
                      <label className="col-sm-10 form-label" htmlFor="location">Password</label>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <input className="form-control height40" type="password" id="password" name="password" placeholder="password"
                            onChange={props.getInput}
                          />
                          <ErrorText text={props.inputErrors.password} />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <input
                            className="form-control height40" type="password" id="confirmPassword" name="confirmPassword" placeholder="confirm password"
                            onChange={props.getInput}
                          />
                          <ErrorText text={props.inputErrors.confirmPassword} />
                        </div>
                      </div>
                      <div className="radio">
                        <label htmlFor="agreement">
                          <input type="radio" id="agreement" name="agreement" value={true} onChange={props.getInput} />
                          <span>I agree to the Terms, Privacy Policy and Fees.</span>
                          <br />
                          <ErrorText text={props.inputErrors.agreement} />
                        </label>
                      </div>
                      <div className="form-group m-b-0">
                        <div className="col-xs-12">
                          <button className="btn form-btn regstn_form_margin30" type="submit" onClick={props.register} disabled={props.addingUserStarted}>Create account</button>
                        </div>
                      </div>

                      <div className="alrdyaccnt">
                          <p> Already have a management account? <span className="login-head" onClick={()=>{props.history.push('/management-signin')}}>Sign in</span></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

View.propTypes = {
  addingUserStarted: PropTypes.bool.isRequired,
  inputErrors: PropTypes.object,
  getInput: PropTypes.func.isRequired,
  location: PropTypes.shape({
    country: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  register: PropTypes.func.isRequired,
  submissionError: PropTypes.string,
};

export default View;
