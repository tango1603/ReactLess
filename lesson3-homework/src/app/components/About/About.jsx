import React, { Component } from 'react';

export default class About extends Component {

  render() {
    return (
      <div>
        <div className="about__caption">О приложении</div>
        <div className="about__text">Это тестовое приложение курса MediaSoft по реакт.<br/>
        С данным приложением вы можете покорить мир выполняя все записанное вами, повышая свою эффективность изо дня в день.<br/><br/>
        Правда приложение вам не особо поможет без должного уровня мотивации и наличия энергии. :) Удачи! :)</div>
      </div>
    );
  }
}
