import React from 'react';
import ReactPlayer from 'react-player'
import './Experience.css';

const Google = () => (
  <div className="container">
    <div className="content-container">
    <p className="header">Google</p >
      <div className="full-experience-wrapper">
        <div className='video-wrapper'>
          <ReactPlayer
          url='/google-demo.mp4'
          width='100%'
          height='100%'
          controls = {true}
          playing = {true}
          />
        </div>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>During my internship at Google Search, I added more useful information to car related searches! For all car searches, you can now see the MSRP data as well as other important information such as MPGe and Horsepower.  </p>
          <p className='description-text'>For electric cars, you can now see Fastest Charging information as well as Financial Incentives for electric cars in the US.</p>
          <p className='description-text'>Throughout this project, I worked cross-functionally with a PM, UX Designer as well as two other engineers. </p>
          <p className='description-text'>Now that the project is launched, you can view it online if you search an electric car such as the <a href="https://www.google.com/search?sca_esv=292e527dce65be8d&sxsrf=ACQVn08w1AYGnXnkqZYjInXMGdKqj3hsrg:1712685858037&q=2023+Rivian+R1S&stick=H4sIAAAAAAAAAONgVeLVT9c3NCzOyK4sNi-qMuIpyizLTMxTKCkqTc4-xQiRzUnOiS80rUqB8bMtk0uy8rKNkeVNDM1NYXyYaY8Y1zFxC7z8cU9YagnTpDUnrzHOZeIS8MnPL07NqQxKzUksSU0JyRcS42JzzSvJLKkU4pHi4uLQz9U3SC4rNBaazMjFHZxaEpLvm5-SmVYp1Mwo1MCIRb8EXD-fFA8XF0h_epZFWUquUBCqAc5Cjlycvqm5SalFxf5pQiZcXM75OTmpySWZ-XlCalIqXEr6yXAB_cTSkvzc_KTMnNT43PyU1Jz4ytTEomKlSCO3XZemnWNzEGQAgiXZwQ5SGlqCXGwu-bmJmXmCN2cxHJD_895eS5iLIySxIj8vP7dSMNMwVXHZ_nR7JU5OoB6Hgyve2WsxTGBibNq34hAbBwejAIMREwdDFQPPIlZ-IwMjY4UgSCwEGQZPYGMEABCBVPKmAQAA&sa=X&lei=IoMVZoDJAd2m5NoPmeS28AI">Rivian R1T</a> and the Tesla Model 3. Over the summer, the project was expected to reach an estimated 100k new monthly average users!</p>
          <p className='subheading'>Roadblocks</p>
          <p className='description-text'>This project required migrating the current desktop version of a UI component that renders when cars are searched from a legacy framework to a new custom framework. This framework would affect several teams' work so every decision I made had to take into consideration the possible consequences to other teams. This required a lot of time-consuming communication with teams across Google, slowing down the overall workflow over the summer. </p>
          <p className='subheading'>Skills</p>
          <p className='description-text'>C++, Java, Javascript</p>
        </div>
        
      </div>
    </div>
  </div>
);

export default Google;