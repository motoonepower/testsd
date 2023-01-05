import React from "react";

function Registration_Details() {
  return (
    <div className="p-4 text-gray-700 text-lg h-full overflow-hidden">
      <h1 className="text-4xl text-center pb-8 text-black">
        Registration Details
      </h1>

      <div>
        <table className="text-center m-auto mt-8 w-full" border="1">
          <tr>
            <th>Author Category</th>
            <th>Indian Authors</th>
            <th>Foreign Authors</th>
          </tr>
          <tr>
            <td>Student</td>
            <td>1000INR</td>
            <td>25USD</td>
          </tr>
          <tr>
            <td>Research Scholars</td>
            <td>1200INR</td>
            <td>30USD</td>
          </tr>
          <tr>
            <td>Academicians</td>
            <td>1500INR</td>
            <td>50USD</td>
          </tr>
          <tr>
            <td>Industrialist</td>
            <td>2000INR</td>
            <td>60USD</td>
          </tr>
        </table>
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-center pb-6">Publication</h2>
        <p>
          All the selected best papers will be published in International Journal of
          Digital Litercy and Digital Competence.
        </p>
        <div className="mt-10 flex flex-row justify-evenly items-center cursor-pointer">
          <img
            src="https://media.discordapp.net/attachments/763396882793758731/1023552310598701216/pic1.png"
            alt="UGC-Care"
          />
          <img
            src="https://media.discordapp.net/attachments/763396882793758731/1023552107506319390/pic2.png"
            alt="ACM Digital Library"
          />
        </div>
        <p className="mt-10">
          Indexed in 15 indices including UGC care and ACM Digital Library.
        </p>
      </div>
    </div>
  );
}

export default Registration_Details;
