import { render, screen } from '@testing-library/react'
import { Services } from '@/components/services'
import { SERVICES } from '@/lib/constants'

describe('Services Component', () => {
  it('renders section heading', () => {
    render(<Services />)
    const heading = screen.getByText('Nuestros Servicios')
    expect(heading).toBeInTheDocument()
  })

  it('renders all services from constants', () => {
    render(<Services />)
    SERVICES.forEach((service) => {
      const title = screen.getByText(service.title)
      expect(title).toBeInTheDocument()
    })
  })

  it('renders service descriptions', () => {
    render(<Services />)
    SERVICES.forEach((service) => {
      const description = screen.getByText(service.description)
      expect(description).toBeInTheDocument()
    })
  })

  it('renders all service features', () => {
    render(<Services />)
    SERVICES.forEach((service) => {
      service.features.forEach((feature) => {
        const featureElement = screen.getByText(feature)
        expect(featureElement).toBeInTheDocument()
      })
    })
  })

  it('has correct number of service cards', () => {
    render(<Services />)
    const serviceCards = screen.getAllByRole('heading', { level: 3 })
    expect(serviceCards.length).toBe(SERVICES.length)
  })
})
