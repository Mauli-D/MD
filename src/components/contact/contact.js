import React from 'react';

const Contact = props => {
  return (
    <section id="contact" class="contentsection">
      <div class="container">
        <div class="row"> 
          <div class="col-6 mx-auto text-center">
            <h2 class="text-uppercase text-white">Contact</h2>
            <form action="#">
              <input type="text" id="fname" name="firstname" placeholder="Name.." required /><br/>
              <input type="email" id="email" name="email" placeholder="Email.." required /><br/>
              <textarea placeholder="Message" type="text" name="message" /><br />
              {/* <textarea id="feedback" name="feedback" placeholder="Message.." style="height: 150px;"></textarea><br /> */}
              <input class="button" type="submit" id="submit" value="SUBMIT" />              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;