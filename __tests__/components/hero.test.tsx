import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/hero'
import { COMPANY_INFO } from '@/lib/constants'

describe('Hero Component', () => {
  it('renders company name correctly', () => {
    render(<Hero />)
    const companyName = screen.getAllByText(COMPANY_INFO.name)
    expect(companyName.length).toBeGreaterThan(0)
  })

  it('renders phone number correctly', () => {
    render(<Hero />)
    const phone = screen.getByText(COMPANY_INFO.phone)
    expect(phone).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Hero />)
    const heading = screen.getByText('Protege lo que más importa')
    expect(heading).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    const quotationButton = screen.getByText('Solicitar cotización gratis')
    const servicesButton = screen.getByText('Ver servicios')
    expect(quotationButton).toBeInTheDocument()
    expect(servicesButton).toBeInTheDocument()
  })

  it('has correct phone link href', () => {
    render(<Hero />)
    const phoneLink = screen.getByRole('link', { name: new RegExp(COMPANY_INFO.phone) })
    expect(phoneLink).toHaveAttribute('href', `tel:${COMPANY_INFO.phoneRaw}`)
  })

  it('renders 24/7 protection badge', () => {
    render(<Hero />)
    const badge = screen.getByText(/Protección 24\/7/i)
    expect(badge).toBeInTheDocument()
  })
})
