import React from "react";
import "./index.css";

function Home() {
  return (
    <div className="p-4 text-gray-700 text-lg h-full md:overflow-hidden">
      <h1 className="text-4xl text-center pb-8 text-black">
        1st International Conference on Recent Trends in Multidisciplinary
        Research and Innovation
      </h1>
      <br />
      <p>
        ICRMIR 2023 is the First International conference on Multidisciplinary
        Research and Innovation organized by Lokmanya Tilak College of
        Engineering .It will be held on <b>17th-18th March 2023</b>. The primary
        goal of ICRMIR 2023 is to provide a forum for researchers, academicians,
        and industry professionals from around the world to present their
        research which will help in creation of the innovation which will
        ultimately benefit the society as a whole.
      </p>
      <br />
      <p>
        The purpose of the conference is to assist innovation and research
        sector in gaining access to breakthroughs in next-generation computing.
        It seeks to give participants the chance to share fresh perspectives and
        their research, to forge commercial or research relationships, and to
        locate international partners for future collaboration. The conference
        helps to build the multidisciplinary bond and focuses to include novel
        ,challenging and society benefits topics only.
      </p>

      <div>
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
    </div>
  );
}

export default Home;
