import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Navigation from './../../Shared/Navigation/Navigation';

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
