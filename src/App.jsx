import { usestate } from "react";
import "./App.css";

function App(){
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
            <input type="text" placeholder="fist name" id="aa" />
            <input type="text" placeholder="name" id="aa" />
            </div>
            <div class="inside3">
                <label>Date of birth ?</label>
                <br />
                <select id="dob">
                    <option>24</option>
                    <option>23</option>
                    <option>22</option>
                    <option>21</option>
                    <option>20</option>
                    <option>19</option>
                    <option>18</option>
                    <option>17</option>
                    <option>16</option>
                    <option>15</option>
                    <option>14</option>
                    <option>13</option>
                    <option>12</option>
                    <option>11</option>
                    <option>10</option>
                </select>
                <select  id="dob">
                    <option>jan</option>
                    <option>feb</option>
                    <option>mar</option>
                    <option>apr</option>
                    <option>may</option>
                    <option>jun</option>
                    <option>jul</option>
                    <option>aug</option>
                    <option>sep</option>
                    <option>oct</option>
                    <option>nov</option>
                    <option>dec</option>
                </select>
                <select id="dob">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                   
                </select>
            </div>
            <label id="lg">gender ?</label>
            <div class="inside4">
                <input type="text"  name="gender" value="male" id="gg" />
                <input type="text"  name="gender" value="female" id="gg" />
                <input type="text"  name="gender" value="custom" id="gg" />
            </div>
            <div class="inside5">
                <input type="text" placeholder="Mobile number or email address" id="cc" />
                <input type="password" placeholder="new password" id="cc" />
            </div>
            <div class="inside6">
                <p>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more.</a></p>

                   <p> By clicking Sign Up, you agree to our <a href="">Terms,Privacy Policy </a> and <a href="">Cookies Policy.</a>  You may receive SMS notifications from us and can opt out at any time.</p>
            </div>
            <div class="inside7">
                <button id="btn">Sign up</button>
            </div>
            <div class="inside8">
                <h2>Already have an account?</h2>
            </div>
        </div>
    </div>
    
    </div>
   
</div>
  );
}
export default App;
