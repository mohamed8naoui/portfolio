import React from 'react'
import Container from '../container'
import Title from '../ui/title'
import ContactForm from '../contact-form'

function Contact() {
  return (
    <div className="bg-black">
    <Container className="my-0 pt-36">
        <div className="space-y-8  p-5 md:p-0" id="certificates">
        <div>
          <Title>Let&apos;s Connect!</Title>
          <p className="text-lg md:text-2xl font-normal text-white leading-9">
          I&apos;m always eager to collaborate and share ideas. Whether you have questions or want to discuss potential projects, feel free to reach out. Let&apos;s explore how we can work together!
          </p>
        </div>
        <div>
            <ContactForm />
        </div>
        </div>
    </Container>
    </div>
  )
}

export default Contact