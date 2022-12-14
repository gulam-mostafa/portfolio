import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Checkbox, Label, Spinner, Textarea, TextInput, Toast } from 'flowbite-react';
import { useState } from 'react';


const Contact = () => {
const [loading, setoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setoading(true)

        emailjs.sendForm('service_datzhbh', 'template_d1tgrrq', form.current, 'pZqUWV_2yFZvkFI1T')
            .then((result) => {
                setoading(false)
                console.log(result);
                if(result.status === 200){
                    
                  alert('Sent Successfully')
                  form.current.reset()
                }
            }, (error) => {
                console.log(error);
            });
            form.current.reset()
    };
    return (
        <div  className='w-8/12  mx-auto' id='contact'>
            <p className='text-center text-2xl font-bold '>Contract with me</p>

            <form ref={form}  onSubmit={sendEmail} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="e name"
                            value="Your  name"
                        />
                    </div>
                    <TextInput
                        id="e name"
                        type=" name"
                        placeholder="name"
                        name='name'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@Example.com"
                        required={true}
                        
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="subject"
                            value="Your subject"
                        />
                    </div>
                    <TextInput
                        id="subject"
                        type=" subject"
                        name='subject'
                        placeholder="Subject"
                        required={true}
                        
                    />
                </div>
               
               
                
                <div className='z-10' id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                        name="message" 
                    />
                </div>
               {
                loading? 
                <Button className='text-center my-6'>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">
                  Loading...
                </span>
              </Button> :
             <Button className='z-10' type="submit">
             Submit
         </Button>
               }
            </form>

        </div>
    );
};

export default Contact;