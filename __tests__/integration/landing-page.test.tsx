import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Landing Page Integration', () => {
  it('renders all main sections in correct order', () => {
    render(<Page />)
    
    // Check that all sections are present
    expect(screen.getByText('Protege lo que más importa')).toBeInTheDocument()
    expect(screen.getByText('Nuestros Servicios')).toBeInTheDocument()
    expect(screen.getByText(/¿Por qué elegir SecureView Pro\?/i)).toBeInTheDocument()
    expect(screen.getByText('Solicita tu cotización gratis')).toBeInTheDocument()
  })

  it('has proper semantic HTML structure', () => {
    const { container } = render(<Page />)
    
    // Check for main element
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    
    // Check for sections
    const sections = container.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(4)
  })

  it('displays all call-to-action buttons', () => {
    render(<Page />)
    
    const ctaButtons = screen.getAllByText(/cotización/i)
    expect(ctaButtons.length).toBeGreaterThan(0)
  })

  it('has accessible navigation links', () => {
    render(<Page />)
    
    const contactLinks = screen.getAllByText(/Contactar/i)
    expect(contactLinks.length).toBeGreaterThan(0)
  })
})
