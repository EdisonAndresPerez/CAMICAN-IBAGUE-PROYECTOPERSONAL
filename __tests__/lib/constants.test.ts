import { COMPANY_INFO, SERVICES, FEATURES, STATS, NAV_LINKS } from '@/lib/constants'

describe('Constants', () => {
  describe('COMPANY_INFO', () => {
    it('has valid company name', () => {
      expect(COMPANY_INFO.name).toBe('SecureView Pro')
      expect(COMPANY_INFO.name).toBeTruthy()
    })

    it('has valid phone numbers', () => {
      expect(COMPANY_INFO.phone).toBeTruthy()
      expect(COMPANY_INFO.phoneRaw).toBeTruthy()
      expect(COMPANY_INFO.phoneRaw).toMatch(/^\+\d+$/)
    })

    it('has valid email', () => {
      expect(COMPANY_INFO.email).toBeTruthy()
      expect(COMPANY_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    it('has valid address object', () => {
      expect(COMPANY_INFO.address).toBeDefined()
      expect(COMPANY_INFO.address.street).toBeTruthy()
      expect(COMPANY_INFO.address.city).toBeTruthy()
      expect(COMPANY_INFO.address.state).toBeTruthy()
      expect(COMPANY_INFO.address.zip).toBeTruthy()
      expect(COMPANY_INFO.address.country).toBeTruthy()
    })

    it('has valid social media links', () => {
      expect(COMPANY_INFO.social.facebook).toMatch(/^https:\/\//)
      expect(COMPANY_INFO.social.twitter).toMatch(/^https:\/\//)
      expect(COMPANY_INFO.social.instagram).toMatch(/^https:\/\//)
    })
  })

  describe('SERVICES', () => {
    it('has correct number of services', () => {
      expect(SERVICES).toHaveLength(4)
    })

    it('all services have required fields', () => {
      SERVICES.forEach((service) => {
        expect(service.id).toBeTruthy()
        expect(service.title).toBeTruthy()
        expect(service.description).toBeTruthy()
        expect(service.icon).toBeTruthy()
        expect(Array.isArray(service.features)).toBe(true)
        expect(service.features.length).toBeGreaterThan(0)
      })
    })

    it('all service ids are unique', () => {
      const ids = SERVICES.map(s => s.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('FEATURES', () => {
    it('has correct number of features', () => {
      expect(FEATURES).toHaveLength(6)
    })

    it('all features have required fields', () => {
      FEATURES.forEach((feature) => {
        expect(feature.id).toBeTruthy()
        expect(feature.title).toBeTruthy()
        expect(feature.description).toBeTruthy()
        expect(feature.icon).toBeTruthy()
      })
    })

    it('all feature ids are unique', () => {
      const ids = FEATURES.map(f => f.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('STATS', () => {
    it('has correct number of stats', () => {
      expect(STATS).toHaveLength(4)
    })

    it('all stats have required fields', () => {
      STATS.forEach((stat) => {
        expect(stat.id).toBeTruthy()
        expect(stat.value).toBeTruthy()
        expect(stat.label).toBeTruthy()
      })
    })

    it('all stat ids are unique', () => {
      const ids = STATS.map(s => s.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('NAV_LINKS', () => {
    it('has navigation links', () => {
      expect(NAV_LINKS.length).toBeGreaterThan(0)
    })

    it('all nav links have required fields', () => {
      NAV_LINKS.forEach((link) => {
        expect(link.id).toBeTruthy()
        expect(link.label).toBeTruthy()
        expect(link.href).toBeTruthy()
      })
    })
  })
})
