import React from 'react'
import Container from '../container'
import Title from '../ui/title'
import ContactForm from '../contact-form'

function Contact() {
  return (
    <Container>
        <div className="space-y-8  p-5 md:p-0" id="certificates">
        <div>
          <Title>Let's Connect!</Title>
          <p className="text-lg md:text-2xl font-normal text-muted-foreground leading-9">
          I’m always eager to collaborate and share ideas. Whether you have questions or want to discuss potential projects, feel free to reach out. Let's explore how we can work together!
          </p>
        </div>
        <div>
            <ContactForm />
        </div>
        </div>
    </Container>
  )
}

export default Contact