'use client'

import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB, getINP } from 'web-vitals'

export default function ReportVitals() {
  useEffect(() => {
    // Log Web Vitals to console for development/debugging
    const logMetric = (metric: any) => {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    }

    // Measure and log all Core Web Vitals
    getCLS(logMetric)
    getFID(logMetric)
    getFCP(logMetric)
    getLCP(logMetric)
    getTTFB(logMetric)
    getINP(logMetric)

    // In production, you would typically send these metrics to an analytics service
    // Example: sendToAnalytics(metric)
  }, [])

  return null
}
