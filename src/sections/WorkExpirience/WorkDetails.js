import React from "react";
import './expirience.scss'
function WorkDetails({ data }) {
  return (
    <table className="expirience-details-table" data-aos="slide-right">
      <tr className="expirience-details-row">
        <th>Company Name </th>
        <td>{data?.companyName}</td>
      </tr>
      <tr className="expirience-details-row">
        <th>Designation </th>
        <td>{data?.designation}</td>
      </tr>
      <tr className="expirience-details-row">
        <th>Start Date </th>
        <td>{data?.startDate}</td>
      </tr>
      <tr className="expirience-details-row">
        <th>End Date </th>
        <td>{data?.endDate}</td>
      </tr>
      <tr className="expirience-details-row">
        <th>Expirience </th>
        <td>{data?.tenure}</td>
      </tr>
      <tr className="expirience-details-row">
        <th>Location </th>
        <td>{data?.location}</td>
      </tr>
    </table>
  );
}

export default WorkDetails;
