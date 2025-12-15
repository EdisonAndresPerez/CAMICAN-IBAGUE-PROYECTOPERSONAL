import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/footer'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

describe('Footer Component', () => {
  it('renders company name', () => {
    render(<Footer />)
    const companyName = screen.getByText(COMPANY_INFO.name)
    expect(companyName).toBeInTheDocument()
  })

  it('renders all services in footer', () => {
    render(<Footer />)
    SERVICES.forEach((service) => {
      const serviceLink = screen.getByRole('link', { name: service.title })
      expect(serviceLink).toBeInTheDocument()
    })
  })

  it('renders social media links', () => {
    render(<Footer />)
    const facebookLink = screen.getByLabelText('Facebook')
    const instagramLink = screen.getByLabelText('Instagram')
    const twitterLink = screen.getByLabelText('Twitter')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    
    expect(facebookLink).toHaveAttribute('href', COMPANY_INFO.social.facebook)
    expect(instagramLink).toHaveAttribute('href', COMPANY_INFO.social.instagram)
    expect(twitterLink).toHaveAttribute('href', COMPANY_INFO.social.twitter)
    expect(linkedinLink).toHaveAttribute('href', COMPANY_INFO.social.linkedin)
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const copyright = screen.getByText(new RegExp(`${currentYear}`))
    expect(copyright).toBeInTheDocument()
  })

  it('renders company sections', () => {
    render(<Footer />)
    expect(screen.getByText('Servicios')).toBeInTheDocument()
    expect(screen.getByText('Empresa')).toBeInTheDocument()
  })
})
