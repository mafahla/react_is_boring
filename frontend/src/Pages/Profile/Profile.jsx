import React from "react";
import "./profile.css";
import Sidebar from '../../Components/SideBar/Sidebar'
import TopNav from "../../Components/TopNav/TopNav";

const Profile = () => {
  return (

    <div>
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content">
          <div className="settings">
            <div className="settings__wrapper">
              <h2 className="settings__title">Profile</h2>

              <div className="settings__top">
                <button className="setting__btn">My Details</button>
                <button className="setting__btn active__btn">Profile</button>
                <button className="setting__btn">Password</button>

              </div>

              <div className="details__form">
                <h2 className="profile__title">Profile</h2>
                <p className="profile__desc">
                  Update your photo and personal details here
                </p>
                <form>
                  <div className="form__group">
                    <div>
                      <label>First Name</label>
                      <input type="text" placeholder="Sylhet Bangladesh" />
                    </div>

                    <div>
                      <label>Last Name</label>
                      <input type="text" placeholder="Jones" />
                    </div>
                  </div>

                  <div className="form__group">
                    <div>
                      <label>Email</label>
                      <input type="email" placeholder="example@gmail.com" />
                    </div>

                    <div>
                      <label>Phone Number</label>
                      <input type="number" placeholder="+27 62*******" />
                    </div>
                  </div>

                  <div className="form__group">
                    <div>
                      <label>Date of Birth</label>
                      <input type="date" placeholder="dd/mm/yyyy" />
                    </div>

                    <div>
                      <label>Gender</label>
                      <input type="text" placeholder="Male" />
                    </div>
                  </div>

                  <div className="form__group">
                    <div>
                      <label>Your Photo</label>
                      <p className="profile-img__desc">
                        This will be displayed in your profile
                      </p>
                      <input type="file" placeholder="choose file" />
                    </div>

                    <div className="profile__img-btns">
                      <button className="update__btn">Update</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
};

      export default Profile;