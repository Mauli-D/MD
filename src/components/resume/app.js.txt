import React, { Component } from "react";
import "./styles.css";

const isValidEmail = (email) => {
  if (!email) return false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateDOB = ({ Year, Month, Day }) => {
  if (Year === "" || Month === "" ||  Day === "") {
    return false
  }

  if (Month > 12 || Day > 31) {
    return false
  }

  const monthIndex = Month - 1;
  const date = new Date(Year, monthIndex, Day);

  if (String(date) === 'Invalid Date') {
    return false;
  }

  if (new Date().getTime() <= date.getTime()) {
    return false;
  }

  return true;
};

export default class DOB extends Component {
  constructor() {
    super();
    this.state = {
      Year: "",
      Month: "",
      Day: "",
      YearFocused: false,
      MonthFocused: false,
      DayFocused: false,
      NameFocused: false,
      Name: "",
      Role: "",
      Email: "",
      License: "",
      VerifyEmail: "",
      Valid: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      MonthFocused,
      YearFocused,
      DayFocused,
      Year,
      Month,
      Day,
    } = this.state;
    const hasDOBError =
      MonthFocused &&
      YearFocused &&
      DayFocused &&
      !validateDOB({ Year, Month, Day });

    return (
      <div>
        <form>
          <span>Role</span>
          <select
            className="form-control"
            id="role"
            name="Role"
            onChange={this.handleChange}
            value={this.state.Role}
          >
            <option value="">Select . . .</option>
            <option value="doc">Physician</option>
            <option value="nurse">Nurse</option>
            <option value="oth">Other</option>
          </select>
          {this.state.Role === "doc" && (
            <p>
              License:
              <input type="text"
              name="License"
              onChange={this.handleChange}
              value={this.state.License} />
            </p>
          )}
          <p>
            Email Address:
            <input
              type="text"
              name="Email"
              onChange={this.handleChange}
              value={this.state.Email}
            />
            {this.state.Email !== "" && !isValidEmail(this.state.Email) && (
              <b>Please check your email</b>
            )}
          </p>
          <p>
            Verify Email Address:
            <input
              type="text"
              name="VerifyEmail"
              onChange={this.handleChange}
              value={this.state.VerifyEmail}
            />
            {isValidEmail(this.state.Email) &&
              this.state.VerifyEmail &&
              this.state.VerifyEmail !== this.state.Email && (
                <b>Please check your verify email</b>
              )}
          </p>
          <p>
            Name:
            <input
              type="text"
              required
              name="Name"
              onChange={this.handleChange}
              value={this.state.Name}
            />
          </p>
          <p>
            DOB (YYYY MM DD):
            <input
              className="Year"
              type="text"
              onChange={(e) =>
                this.setState({ Year: e.target.value, YearFocused: true })
              }
              value={this.state.Year}
            />
            <input
              className="Month"
              type="text"
              onChange={(e) =>
                this.setState({ Month: e.target.value, MonthFocused: true })
              }
              value={this.state.Month}
            />
            <input
              className="Day"
              type="text"
              onChange={(e) =>
                this.setState({ Day: e.target.value, DayFocused: true })
              }
              value={this.state.Day}
            />
            {hasDOBError && <b>Please check your DOB</b>}
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

//Instructions
// 1 - When Role=Physician then show License, otherwise it should be hidden
// 2 - Validate that Email Address is in the correct format
// 3 - Validate Email Address and Verify Email Address match
// 4-  Validate that Name is not blank
// 5 - Validate the DOB (Date of Birth) to make sure it's a valid date

//If something failes validation, please put 'Error' beside the field.

//Please only apply change on this page.
//Please do not manipulate the dom element unless necessary.
//Please make the DOB validation happen only after all the 3 fields are touched.