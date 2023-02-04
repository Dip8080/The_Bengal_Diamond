import React from 'react';

const Table = () => {
    return (
        <div class="overflow-x-auto w-full">
  <table class="table w-full">
   
    <thead>
      <tr>
     
        <th>Name</th>
        <th>Email</th>
        <th>Purchased Item</th>
        
        <th> Comment</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
      
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Demomail@hotmail.com
       
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
      <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-photo/male-beauty-concept-portrait-fashionable-young-man-with-stylish-haircut-wearing-trendy-suit-posing-black-studio-background_155003-21656.jpg?w=1060&t=st=1663482637~exp=1663483237~hmac=2baf9e11260c19ecd976e60c545385a2292fecbe607f71a190346fb0bfbaabd3" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Brice Swyre</div>
              <div class="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
        Demomail@hotmail.com
          
          <span class="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
      <tr>
      
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-photo/portrait-photo_144627-46580.jpg?w=740&t=st=1663483344~exp=1663483944~hmac=f4b1e2797304a6a659cd6206b434c94b8aaecd3377da4e1261ada6fde85e8c8b" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Marjy Ferencz</div>
              <div class="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
        Demomail@hotmail.com
    
          <span class="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
      <tr>
      
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/premium-photo/portrait-elderly-man-park-he-looks-thoughtfully-into-distance-planning-dreaming-about-future_262288-8143.jpg?w=1060" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Yancy Tear</div>
              <div class="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
        Demomail@hotmail.com
          <br/>
          <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    <tbody></tbody>
  
 
    
  </table>
</div>
    )  
};

export default Table;