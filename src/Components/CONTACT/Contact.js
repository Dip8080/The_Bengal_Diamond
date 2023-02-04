import emailjs from 'emailjs-com'
import React, { useState } from 'react';
import('./Contact.css')


const Contact = () => {
    const [to_name,setTo_name] = useState("");
    const [from_name,setFrom_name]=useState("");
    const[message,setMessage]= useState("");
    const sentEmail = (event)=>{
       
        
        console.log(to_name + from_name + message);

    }
    
    return (
        <div class="card  bg-base-100 shadow-xl flex contact_div" id='contact '>
       <section class="bg-white dark:bg-white-900 contact_div">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-dark">Contact Us</h2>
      {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p> */}
      <form action="#" class="space-y-8">
          <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name :</label>
              <input onChange={(event)=>{setTo_name(event.target.value)}} type="text" id="name" name='name' class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  " placeholder="Mr.Client" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email : </label>
              <input onChange={(event)=>{setFrom_name(event.target.value)}} type="email" id="email" name='email' class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  " placeholder="client23@gmail.com" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea onChange={(event)=>{setMessage(event.target.value)}} id="message"  name='message' rows="6" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300 " placeholder="Leave a mail with your contact info. Our customer support will contact with you within 1 hour. Thank You."></textarea>
          </div>
          <button onSubmit={()=>sentEmail()}  type="submit" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  ">Send mail</button>
      </form>
  </div>
</section>
        <div class="p-2 my-5 content-center map">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=concord%20tower%20,%20banglamotor%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><a href="https://www.embedgooglemap.net">google map code generator</a></div></div>
        </div>
      </div>
    );
};

export default Contact;

// //  function sentEmail(e) {
        
        
//     e.preventDefault();
//     emailjs.sendForm('service_782b40m','template_vznno2s',e.target,'N66BOUj61eE4Ry5qj')
//     .then(res=>console.log(`success${res}`))
//     .catch(err=>console.log(`error ${err}`))
// }
