import React from 'react';
import Input from '../Input/Input';

const Footer = () => {
  return (
    <footer>
      <div className=''>
        <p>© 2026 Todo App. All rights reserved.</p>
      </div>
      <div className=''>
        <form action='' method='post'>
          <Input type='text' placeholder='Your Name' />
          <textarea id='message' name='message' rows={4} cols={50}>
            Your FeedBack goes Here
          </textarea>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
