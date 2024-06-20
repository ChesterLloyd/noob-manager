'use client'

import { Doughnut, Line, Radar, PolarArea } from 'react-chartjs-2'
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale,
} from 'chart.js'
import { doughnutData, lineData, options, polarAreaData, radarData } from '@/app/data/data.mock'
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
)

import styles from './Charts.module.scss'

const Charts = () => {
  return (
    <div className={styles.charts}>
      <PolarArea data={polarAreaData} />
    </div>
  )
}

export default Charts
