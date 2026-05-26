'use client'

import {
  BorderTitle,
  Card,
  CardGrid,
  Container,
  Field,
  FormShell,
  InnerPage,
  Input,
  Lead,
  Section,
  SectionTitle,
  SubmitButton,
  TextArea,
} from '../components/SimbisaShared'

const contactCards = [
  {
    title: 'Visit us',
    text: '17 Morningside Drive, Mount Pleasant, Harare, Zimbabwe',
  },
  {
    title: 'Email us',
    text: 'admin@zw-simbisa.com',
  },
  {
    title: 'Brand family',
    text: "Baker's Inn is part of Simbisa Brands Limited.",
  },
]

export default function ContactPage() {
  return (
    <InnerPage
      eyebrow="Contact Us"
      title="Contact Us"
      intro="Reach Simbisa Brands for Baker's Inn enquiries, brand information and customer support."
      heroImage="/images/contactusheader.png"
    >
      <Container>
        <Section>
          <BorderTitle>Get in touch</BorderTitle>
          <SectionTitle>We are ready to hear from you.</SectionTitle>
          <Lead>
            The contact route remains available and now uses the Simbisa visual
            system, matching the source site footer details.
          </Lead>
        </Section>

        <CardGrid>
          {contactCards.map((card) => (
            <Card key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Card>
          ))}
        </CardGrid>

        <Section>
          <FormShell onSubmit={(event) => event.preventDefault()}>
            <Field>
              Name
              <Input type="text" required />
            </Field>
            <Field>
              Email
              <Input type="email" required />
            </Field>
            <Field>
              Subject
              <Input type="text" required />
            </Field>
            <Field>
              Message
              <TextArea required />
            </Field>
            <SubmitButton type="submit">Send message</SubmitButton>
          </FormShell>
        </Section>
      </Container>
    </InnerPage>
  )
}
