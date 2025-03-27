import { useState } from "react";
import "./App.css";

function App(){

      const dates=[];
      const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
      const years=[];
      const genders=["male","female","custom"];

      const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [date, setDate] = useState("");
      const [month,setmonth] = useState("");
      const [year,setyear] = useState("");
      const [gender,setgender] = useState("");
      const [email,setemail] = useState("");
      const [password,setpassword] = useState("");
      const [Signup,setsignup] = useState("");
      

      for(let i=1;i<=30;i++)
      {
        dates.push(i);
      }

      for(let i=1950;i<=2025;i++)
      {
        years.push(i);
      }

      const handleFirstNameChange=(event) =>{
        setfirstName(event.target.value);
        console.log("firstname:",event.target.value );
      }

      const handleLastNameChange=(event) =>{
        setlastName(event.target.value);
        console.log("lastname:", event.target.value);
      }
      const handledateChange=(event) =>{
        setDate(event.target.value);
        console.log("Date:",event.target.value);
      }
      const handlemonthChange=(event) =>{
        setmonth(event.target.value);
        console.log("month:",event.target.value);
      }
      const handleyearChange=(event) =>{
        setyear(event.target.value);
        console.log("year:", event.target.value);
      }
      const handlegenderChange=(event) =>{
        setgender(event.target.value);
        console.log("gender:",event.target.value);
      }
      const handleemailChange=(event) =>{
        setemail(event.target.value);
        console.log("email:", event.target.value);
      }
      const handlepasswordChange=(event) =>{
        setpassword(event.target.value);
        console.log("password:", event.target.value);
      }

      const handlesignupChange=(event) =>{
        setsignup(event.target.value);
        console.log("signup:", event.target.value);
      };

      const signup = () => {
        const userData = {
          firstName,
          lastName,
          date,
          month,
          year,
          gender,
          email,
          password,
        };
    
        console.log("User Data:", userData);
        alert("Sign Up Successful!");
      
      };
    
      
  return(
    <div class="container">
    <div class="hero">
        <div class="text">
            <h1>facebook</h1>
        </div>

    <div class="con">
        <div class="inside1">
            <h1>Create a new account</h1>
            <p>It's quick and easy.</p>
            <div class="line"></div>
            <div class="inside2">
            <input type="text" placeholder="First name" id="aa" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" placeholder="Last name" id="aa" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div class="inside3">
                <label>Date of birth ?</label>
                <select id="dob" value={date} onChange={handledateChange}>
                    {
                        dates.map(date => (<option value={date}>{date}</option>)
                    )}
                </select>
                <select  id="dob" value={month} onChange={handlemonthChange}>
                   {
                   months.map(month =>(<option value={month}>{month}</option>)
                )}
                    
                </select>
                <select id="dob" value={year} onChange={handleyearChange}>
                   {years.map(year =>(<option value={year}>{year}</option>)
                )}
                </select>
            </div>
            <label id="lg">gender ?</label>
            <div class="insidey">
            <div class="inside4"    value={gender} onChange={handlegenderChange}>
              {genders.map(gender => ( <label><input value={gender} type="radio"  name="gender"  id="gg" />{gender}</label>)
            )}
           
            </div>
            </div>
            <div class="insidex">
            <div class="inside5">
                <input type="text" placeholder="Mobile number or email address" id="cc" value={email} onChange={handleemailChange} />
                <input type="password" placeholder="new password" id="cc" value={password} onChange={handlepasswordChange} />
            </div>
            </div>
            <div class="inside6">
                <p>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more.</a></p>

                   <p> By clicking Sign Up, you agree to our <a href="">Terms,Privacy Policy </a> and <a href="">Cookies Policy.</a>  You may receive SMS notifications from us and can opt out at any time.</p>
            </div>
            <div class="inside7" value={Signup} onChange={handlesignupChange}>
                <button id="btn" onClick={signup}>Sign up</button>
            </div>
            <div class="inside8">
                <h2>Already have an account? <a href="#">log in</a></h2>
            </div>
        </div>
    </div>
    
    </div>
   
</div>
  );
}
export default App;
