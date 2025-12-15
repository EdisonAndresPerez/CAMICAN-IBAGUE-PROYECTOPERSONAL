import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '@/components/contact-form'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

describe('ContactForm Component', () => {
  it('renders form heading', () => {
    render(<ContactForm />)
    const heading = screen.getByText('Solicita tu cotización gratis')
    expect(heading).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Dirección del servicio/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Servicio de interés/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument()
  })

  it('renders all service options from constants', () => {
    render(<ContactForm />)
    SERVICES.forEach((service) => {
      const option = screen.getByRole('option', { name: service.title })
      expect(option).toBeInTheDocument()
    })
  })

  it('displays company contact information', () => {
    render(<ContactForm />)
    expect(screen.getByText(COMPANY_INFO.phone)).toBeInTheDocument()
    expect(screen.getByText(COMPANY_INFO.email)).toBeInTheDocument()
  })

  it('shows success message on form submission', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /Solicitar cotización gratis/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('¡Mensaje enviado!')).toBeInTheDocument()
    })
  })

  it('has contact information cards', () => {
    render(<ContactForm />)
    expect(screen.getByText('Teléfono')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Oficina')).toBeInTheDocument()
  })
})
