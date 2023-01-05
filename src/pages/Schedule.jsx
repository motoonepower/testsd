import React from "react";

function Schedule() {
  return (
    <div className="p-4 text-gray-700 text-lg h-full overflow-hidden">
      <h1 className="text-4xl text-center pb-4 text-black">Schedule</h1>{" "}
      <table className="m-auto mt-8 w-full" border="1">
        <tr>
          <td>Paper Submission Deadline</td>
          <td>January 31 ,2023</td>
        </tr>
        <tr>
          <td>Acceptance notification</td>
          <td>February 15 ,2023</td>
        </tr>
        <tr>
          <td>Registration Deadline</td>
          <td>February 25, 2023</td>
        </tr>
        <tr>
          <td>Camera ready paper Submission</td>
          <td>March 1,2023</td>
        </tr>
        <tr>
          <td>Conference</td>
          <td>March 17-18,2023</td>
        </tr>
      </table>
    </div>
  );
}

export default Schedule;
