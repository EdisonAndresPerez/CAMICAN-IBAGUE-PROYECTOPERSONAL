import { render, screen } from '@testing-library/react'
import { Features } from '@/components/features'
import { FEATURES } from '@/lib/constants'

describe('Features Component', () => {
  it('renders section heading', () => {
    render(<Features />)
    const heading = screen.getByText(/¿Por qué elegir SecureView Pro\?/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders all features from constants', () => {
    render(<Features />)
    FEATURES.forEach((feature) => {
      const title = screen.getByText(feature.title)
      expect(title).toBeInTheDocument()
    })
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    FEATURES.forEach((feature) => {
      const description = screen.getByText(feature.description)
      expect(description).toBeInTheDocument()
    })
  })

  it('has correct number of feature items', () => {
    render(<Features />)
    const featureHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(featureHeadings.length).toBe(FEATURES.length)
  })

  it('renders subtitle correctly', () => {
    render(<Features />)
    const subtitle = screen.getByText(/Tecnología de punta respaldada por años de experiencia/i)
    expect(subtitle).toBeInTheDocument()
  })
})
