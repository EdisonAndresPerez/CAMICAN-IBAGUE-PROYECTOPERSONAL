import { render, screen } from '@testing-library/react'
import { Stats } from '@/components/stats'
import { STATS } from '@/lib/constants'

describe('Stats Component', () => {
  it('renders all stats from constants', () => {
    render(<Stats />)
    STATS.forEach((stat) => {
      const value = screen.getByText(stat.value)
      const label = screen.getByText(stat.label)
      expect(value).toBeInTheDocument()
      expect(label).toBeInTheDocument()
    })
  })

  it('has correct number of stat items', () => {
    render(<Stats />)
    const statValues = screen.getAllByText(/\+|años|%|\//)
    expect(statValues.length).toBeGreaterThanOrEqual(STATS.length)
  })

  it('displays experience stat correctly', () => {
    render(<Stats />)
    const experienceStat = STATS.find(s => s.id === 'experience')
    if (experienceStat) {
      expect(screen.getByText(experienceStat.value)).toBeInTheDocument()
    }
  })

  it('displays clients stat correctly', () => {
    render(<Stats />)
    const clientsStat = STATS.find(s => s.id === 'clients')
    if (clientsStat) {
      expect(screen.getByText(clientsStat.value)).toBeInTheDocument()
    }
  })
})
